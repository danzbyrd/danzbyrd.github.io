﻿var CKMLib = (function(){
	var ckmObj = {
		getCookie: function(name, options){
			if (options && options.callback) {
				if (!options.attempts)
					options.attempts = 0;
				var cookieValue = ckmObj.getCookieValueWithTimeout(name, options.session_timeout);
				if ((cookieValue != null || options.attempts++ == (options.max || 50)))
					options.callback(cookieValue);
				else
					window.setTimeout(function(){
						ckmObj.getCookie(name, options);
					}, (options.ms || 100));
			} else
				return ckmObj.getCookieValueWithTimeout(name, options && options.session_timeout);
		},
		getCookieValueWithTimeout: function(name, session_timeout){
			var val = ckmObj.getCookieValue(name);
			if (val && session_timeout) {
				var split = val.split(',');
				var ms = parseInt(split[split.length - 1]);
				if (ms) {
					var set_dt = new Date(ms);
					var cur_date = new Date();
					if (cur_date.getFullYear() - set_dt.getFullYear() < 10) {
						val = split.slice(0, -1).join(',');
						if ((cur_date.getTime() - set_dt.getTime()) / 1000 > session_timeout)
							return null;
					}
				}
			}
			return val;
		},
		getCookieValue: function(name){
			var name_s = name + '=';
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ')
					c = c.substring(1, c.length);
				if (c.indexOf(name_s) == 0)
					return c.substring(name_s.length, c.length);
			}
			return null;
		},
		setCookie: function(name, value, days, domain){
			var expires = '';
			if (days) {
				var d = new Date();
				d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
				expires = '; expires=' + d.toGMTString();
			}
			domain = (domain ? '; domain=' + domain : '');

			document.cookie = name + '=' + value + domain + expires + '; path=/';
		},
		setCookieWithTimeout: function(name, value, days, domain){
			ckmObj.setCookie(name, value + ',' + (new Date()).getTime(), days, domain);
		},
		removeCookie: function(name, domain){
			ckmObj.setCookie(name, '', -1, domain);
		},
		getQSParams: function(qs){
			if (!qs || typeof qs != "string")
				return {};

			var s = qs.split("&"), params = {};
			for (var i = 0; i < s.length; i++) {
				var nv = s[i].split("=");
				if (nv.length >= 2) {
					var name = decodeURIComponent(nv[0]);
					if (name.length == 0)
						continue;
					var value = decodeURIComponent(nv[1]);
					if (typeof params[name] == "undefined")
						params[name] = value;
					else if (params[name] instanceof Array)
						params[name].push(value);
					else
						params[name] = [params[name], value];
				}
			}
			return params;
		},
		getParam: function(name, referrer_priority){
			var s_v, keys = (name || '').split(','),
				f_p = referrer_priority && referrer_priority !== -1 ? ckmObj.referrer_qs_params : ckmObj.url_qs_params,
				s_p = referrer_priority && referrer_priority !== -1 ? ckmObj.url_qs_params : (referrer_priority !== -1 ? ckmObj.referrer_qs_params : null);

			for (var i = 0; i < keys.length; i++) {
				if (f_p.hasOwnProperty(keys[i]))
					return f_p[keys[i]];
				s_v = s_v || ((s_p && s_p.hasOwnProperty(keys[i])) ? s_p[keys[i]] : null);
			}
			return s_v;
		},
		uniqueSession: function(ck_suffix, override_keys, referrer_priority, sc, subids, session_timeout, domain, fallback_cookie_name, crtv_default){
			var u_p, r_p, keys = override_keys instanceof Array ? override_keys : (override_keys || '').split(',');
			for (var i = 0; i < keys.length; i++) {
				u_p = u_p || ckmObj.url_qs_params[keys[i]];
				r_p = r_p || ckmObj.referrer_qs_params[keys[i]];
			}
			var p = (referrer_priority !== -1 && ((referrer_priority && r_p) || !u_p)) ? r_p : u_p;

			var ck_name = 'CKM_sess' + ck_suffix;
			var ckd_name = 'CKM_sess' + crtv_default;
			var ex_c = ckmObj.getCookieValueWithTimeout(ck_name, session_timeout);

			var o = (function(){
				if (ex_c) {
					var a = ckmObj.parseCSV(ex_c);
					if ((!p || p == a[0]) && ckmObj.referrer_domain == ckmObj.getHostname(document.URL))
						return [0, 0];
					if (p && p != a[0])
						return [1, 1];
					if (a.length > 1) {
						if (sc != a[1] || (ckmObj.referrer_domain || '') != a[2])
							return [1, 1];
						for (var i = 0; i < 5; i++)
							if (subids[i] && subids[i] != a[i + 3])
								return [1, 1];
						return [0, 0];
					} else
						return [0, 1];
				} else 
					return [1, 1];
			})();

			if (o[1]) {
				var vals = [p || '1', sc, (ckmObj.referrer_domain) ? ckmObj.referrer_domain : ckmObj.getHostname(document.URL)];
				for (var i = 0; i < 5; i++)
					vals.push(subids[i]);

				ckmObj.setCookieWithTimeout('CKM_sess', ckmObj.writeCSV(vals), null, domain);
				ckmObj.setCookieWithTimeout(ck_name, ckmObj.writeCSV(vals), null, domain);
				ckmObj.setCookieWithTimeout(ckd_name, ckmObj.writeCSV(vals), null, domain);

				if(fallback_cookie_name) 
					ckmObj.setCookieWithTimeout('CKM_sess' + fallback_cookie_name, ckmObj.writeCSV(vals), null, domain);
			}

			return o[0];
		},
		parseCSV: function(csv){
			var a = csv.split(',');
			for (var i = 0; i < a.length; i++)
				a[i] = decodeURIComponent(a[i]);
			return a;
		},
		writeCSV: function(arr){
			var a = [];
			for (var i = 0; i < arr.length; i++)
				a.push(encodeURIComponent(arr[i] || ''));
			return a.join(',');
		},
		clickParamCfg: {},
		clickParams: function(paramCfg){
			this.clickParamCfg = paramCfg;
		},
		eventParamCfg: {},
		eventParams: function(paramCfg){
			this.eventParamCfg = paramCfg;
		},
		getExtraParams: function(params, gclid, bingkw){
			var extra_params = '';
			if (gclid)
				extra_params += '&gclid=' + gclid;
			if (bingkw)
				extra_params += '&ckmxv=' + bingkw;
			else if (params) {
				var keys = [];
				var values = [];
				for (var k in params) {
					if (params.hasOwnProperty(k)) {
						keys.push(k);
						values.push(params[k]);
					}
				}
				extra_params += keys.length > 0 ? '&ckmxk=' + encodeURIComponent(keys.join('^')) + '&ckmxv=' + encodeURIComponent(values.join('^')) : '';
			}
			return extra_params;
		},
		getSubIDURL: function(subids){
			var ret = '';
			for (var i = 0; i < 5; i++) {
				var s = subids[i];
				if (s)
					ret += '&s' + (i + 1) + '=' + encodeURIComponent(s);
			}
			return ret;
		},
		getSubIDs: function(a){
			var subids = [];
			for (var i = 1; i <= 5; i++)
				subids.push(a['s' + i] || (a['s' + i + '_param'] && ckmObj.getParam(a['s' + i + '_param'], a['sub_chk_ref'])));
			return subids;
		},
		getHostname: function(url){
			var a = document.createElement('a');
			a.href = url;
			return a.hostname;
		},
		insertScript: function(u, async){
			if (ckmObj.debug) {
				console.log(u);
				return;
			}
			var el = document.createElement('script');
			el.type = 'text/javascript';
			el.src = u;
			el.async = !!async;
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(el, s);
		},
		run: function(c){
			typeof c === 'function' ? c() : ckmObj[c.name](c.args);
		},
		cp: function(a){
			var ckmreqid = ckmObj.url_qs_params[a['ckm_sess_param'] || a[7] || 'ckmreqid'];
			var ckmat = ckmObj.url_qs_params['ckmat'] == '1';
			var ckmint = ckmObj.url_qs_params['ckmint'] == '1';

			var gclid = ckmint && ckmObj.getParam(a['gclid_param'], a['gclid_chk_ref']);
			var bingkw = ckmint && ckmObj.getParam(a['bingkw_param'], a['bingkw_chk_ref']);

			var sc = ckmObj.getParam(a['sc_param'], a['sc_chk_ref']) || a['sc_id'];
			var scn = encodeURIComponent(ckmObj.getParam(a['attr_param'] || a[2], a['attr_chk_ref'] || a[3]) || '');
			var sess_sc = sc;
			if (!sc || (scn && ckmint))
				sess_sc = scn;

			var crtv_default = a['crtv_id'] || a[6];
			var cid = ckmObj.getParam(a['crtv_param'], a['crtv_chk_ref']) || a['crtv_id'] || a[6];
			var crn = encodeURIComponent(ckmObj.getParam(a['tpcrid_param'], a['tpcrid_chk_ref']) || '');
			var ck_suffix = '';
			var ck_fallback_suffix = null;

			if (cid || crn)
				ck_suffix = '_' + (!cid || (crn && ckmint) ? 'crn_' + crn : cid);

			if(crn && ckmint && cid)
				ck_fallback_suffix = '_' + cid;

			if (crtv_default)
				crtv_default = '_' + crtv_default;

			var subids = ckmObj.getSubIDs(a);

			var is_unique_session = false;
			var is_a_array = false;
			if (a instanceof Array) {
				is_a_array = true;
				is_unique_session = ckmObj.uniqueSession(ck_suffix, a[0], a[1], sess_sc, subids, null, null, ck_fallback_suffix, crtv_default);
			}
			else {
				is_unique_session = ckmObj.uniqueSession(ck_suffix, a['sess_param'], a['sess_chk_ref'], sess_sc, subids, a['sess_timeout'], a['site_dom'], ck_fallback_suffix, crtv_default);
			}
			
			if (!ckmat && is_a_array && is_unique_session) {
				ckmObj.insertScript('//' + a[4] + '/?cp=js&scn=' + scn + (a[6] ? '&c=' + a[6] : '') + (ckmreqid ? '&ckmreqid=' + ckmreqid : '') + ckmObj.getExtraParams(ckmObj.clickParamCfg) + '&ckmrt=' + a[5] + '&ckmpg=' + encodeURIComponent(document.URL) + '&ckmref=' + encodeURIComponent(document.referrer));
			} else if (!ckmat && !is_a_array && is_unique_session) {
				var src = (sc ? '&sc=' + sc : (a['aff_id'] ? '&a=' + a['aff_id'] : (a['po_id'] ? '&po=' + a['po_id'] : ''))) + (a['pf_id'] ? '&p=' + a['pf_id'] : '') + (a['oc_id'] ? '&oc=' + a['oc_id'] : '') + (a['mt_id'] ? '&m=' + a['mt_id'] : '');
				ckmObj.insertScript('//' + a['cookie_dom'] + '/?cp=js' + src + (scn ? '&scn=' + scn : '') + '&c=' + (cid || '') + (crn ? '&crn=' + crn : '') + (ckmint ? '&ckmint=1' : '') + (ckmreqid ? '&ckmreqid=' + ckmreqid : '') + ckmObj.getSubIDURL(subids) + ckmObj.getExtraParams(ckmObj.clickParamCfg, gclid, bingkw) + '&ckmrt=' + a['ref_type'] + '&ckmpg=' + encodeURIComponent(document.URL) + '&ckmref=' + encodeURIComponent(document.referrer));
			} else {
				if (ckmreqid) {
					ckmObj.setCookie('ckmsid', ckmreqid, null, a['site_dom']);

					if (ckmat) {
						var extra_params = ckmObj.getExtraParams(ckmObj.clickParamCfg);
						if (extra_params.length) {
							if (a instanceof Array)
								ckmObj.insertScript('//' + a[4] + '/?cp=jsu&ckmreqid=' + ckmreqid + extra_params + '&ckmrt=' + a[5] + '&ckmpg=' + encodeURIComponent(document.URL) + '&ckmref=' + encodeURIComponent(document.referrer));
							else
								ckmObj.insertScript('//' + a['cookie_dom'] + '/?cp=jsu&ckmreqid=' + ckmreqid + extra_params + '&ckmrt=' + a['ref_type'] + '&ckmpg=' + encodeURIComponent(document.URL) + '&ckmref=' + encodeURIComponent(document.referrer));
						}
					}
				}
				window.ckm_cp = true;
				window.ckm_request_id = ckmObj.getCookie('ckmsid');
			}
		},
		eventCfg: {},
		configureEvents: function(cfg){
			this.eventCfg = cfg;
		},
		fireEvent: function(cfg){
			if (cfg == null || typeof cfg !== 'object') {
				cfg = {
					event_id: cfg,
					transaction_id: arguments.length >= 2 ? arguments[1] : ''
				}
			}
			var u = (cfg.domain || this.eventCfg.domain) + '/p.ashx?f=js';
			if (!(u.indexOf('http://') == 0 || u.indexOf('https://') == 0 || u.indexOf('//') == 0))
				u = '//' + u;

			if (!cfg.request_session_id && !cfg.r && !this.eventCfg.request_session_id && !this.eventCfg.r)
				cfg.r = ckmObj.getCookieValue('ckmsid_' + (cfg.offer_id || cfg.o || this.eventCfg.offer_id || this.eventCfg.o || 'nf')) || ckmObj.getCookieValue('ckmsid');
			
			var ps = [['advertiser_id', 'a'], ['offer_id', 'o'], ['event_id', 'e'], ['request_session_id', 'r'], ['revenue', 'p'], ['transaction_id', 't'], ['sku', 'ecsk'],
				['line_item_quantity', 'ecqu'], ['line_item_price', 'ecpr'], ['line_item_discount', 'ecld'], ['order_sub_total', 'ecst'],
				['order_discount', 'ecd'], ['order_tax', 'ectx'], ['order_shipping', 'ecsh'], ['order_total', 'ect'], ['voucher_code', 'ecv'], ['country', 'ecco'], ['region', 'ecrg'], ['user_id', 'u'], ['event_third_party_name', 'en'], ['coupon', 'ecc'], ['currency', 'eccu']];
			
			for (var i = 0; i < ps.length; i++) {
				var p = ps[i];
				v = cfg[p[0]] || cfg[p[1]] || this.eventCfg[p[0]] || this.eventCfg[p[1]];
				if (v) u += '&' + p[1] + '=' + encodeURIComponent(v);
			}

			u += this.getExtraParams(cfg.event_params);

			ckmObj.insertScript(u);
		}
	};

	ckmObj.url_qs_params = ckmObj.getQSParams(location.search.substring(1));
	ckmObj.referrer_qs_params = {};
	var ref = document.referrer;
	if (ref && ref.length >= 8) {
		ckmObj.referrer_domain = ckmObj.getHostname(ref);
		var r = ref.substring(8);
		var idx = r.indexOf('?');
		if (idx == -1) idx = r.lastIndexOf('/');
		if (idx > -1) ckmObj.referrer_qs_params = ckmObj.getQSParams(r.substring(idx + 1));
	}

	return ckmObj;
})();

if (typeof _ckm == 'object' && _ckm instanceof Array) {
	var c;
	while (c = _ckm.shift())
		CKMLib.run(c);
}
else _ckm = [];

_ckm.unshift = _ckm.push = CKMLib.run;
