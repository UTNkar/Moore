/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

var N_ = Object.create;
var Yr = Object.defineProperty;
var P_ = Object.getOwnPropertyDescriptor;
var q_ = Object.getOwnPropertyNames;

var L_ = Object.getPrototypeOf,
  M_ = Object.prototype.hasOwnProperty;

var L = (e, r) => () => (e && (r = e((e = 0))), r);

var u = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports),
  K = (e, r) => {
    for (var t in r) Yr(e, t, { enumerable: !0, get: r[t] });
  },
  oa = (e, r, t, n) => {
    if ((r && typeof r === 'object') || typeof r === 'function')
      for (let i of q_(r))
        !M_.call(e, i) &&
          i !== t &&
          Yr(e, i, {
            enumerable: !(n = P_(r, i)) || n.enumerable,
            get: () => r[i],
          });
    return e;
  };

var C = (e, r, t) => (
    (t = e != null ? N_(L_(e)) : {}),
    oa(r || !e || !e.__esModule ? Yr(t, 'default', { enumerable: !0, value: e }) : t, e)
  ),
  ie = (e) => oa(Yr({}, '__esModule', { value: !0 }), e);

var aa = u((rV, fe) => {
  function gn(e) {
    return (
      (fe.exports = gn =
        typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
          ? function (r) {
              return typeof r;
            }
          : function (r) {
              return r && typeof Symbol === 'function' && r.constructor === Symbol && r !== Symbol.prototype
                ? 'symbol'
                : typeof r;
            }),
      (fe.exports.__esModule = !0),
      (fe.exports.default = fe.exports),
      gn(e)
    );
  }

  (fe.exports = gn), (fe.exports.__esModule = !0), (fe.exports.default = fe.exports);
});

var zr = u((tV, lr) => {
  var w_ = aa().default;

  function sa(e) {
    if (typeof WeakMap !== 'function') return null;

    var r = new WeakMap(),
      t = new WeakMap();

    return (sa = function (i) {
      return i ? t : r;
    })(e);
  }

  function D_(e, r) {
    if (!r && e && e.__esModule) return e;
    if (e === null || (w_(e) !== 'object' && typeof e !== 'function')) return { default: e };

    var t = sa(r);

    if (t && t.has(e)) return t.get(e);

    var n = {},
      i = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var o in e)
      if (o !== 'default' && Object.prototype.hasOwnProperty.call(e, o)) {
        var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;

        a && (a.get || a.set) ? Object.defineProperty(n, o, a) : (n[o] = e[o]);
      }

    return (n.default = e), t && t.set(e, n), n;
  }

  (lr.exports = D_), (lr.exports.__esModule = !0), (lr.exports.default = lr.exports);
});

var ua = u((nV, fr) => {
  function F_(e) {
    return e && e.__esModule ? e : { default: e };
  }

  (fr.exports = F_), (fr.exports.__esModule = !0), (fr.exports.default = fr.exports);
});

var M = u((iV, ca) => {
  var kr = function (e) {
    return e && e.Math == Math && e;
  };

  ca.exports =
    kr(typeof globalThis === 'object' && globalThis) ||
    kr(typeof window === 'object' && window) ||
    kr(typeof self === 'object' && self) ||
    kr(typeof global === 'object' && global) ||
    (function () {
      return this;
    })() ||
    Function('return this')();
});

var we = u((oV, la) => {
  la.exports = function (e) {
    try {
      return !!e();
    } catch {
      return !0;
    }
  };
});

var Se = u((aV, fa) => {
  var G_ = we();

  fa.exports = !G_(function () {
    return (
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1] != 7
    );
  });
});

var $r = u((sV, pa) => {
  var pr = Function.prototype.call;

  pa.exports = pr.bind
    ? pr.bind(pr)
    : function () {
        return pr.apply(pr, arguments);
      };
});

var ya = u((ga) => {
  'use strict';

  var da = {}.propertyIsEnumerable,
    Ea = Object.getOwnPropertyDescriptor,
    V_ = Ea && !da.call({ 1: 2 }, 1);

  ga.f = V_
    ? function (r) {
        var t = Ea(this, r);

        return !!t && t.enumerable;
      }
    : da;
});

var yn = u((cV, va) => {
  va.exports = function (e, r) {
    return {
      configurable: !(e & 2),
      enumerable: !(e & 1),
      value: r,
      writable: !(e & 4),
    };
  };
});

var Z = u((lV, Ia) => {
  var _a = Function.prototype,
    vn = _a.bind,
    _n = _a.call,
    U_ = vn && vn.bind(_n);

  Ia.exports = vn
    ? function (e) {
        return e && U_(_n, e);
      }
    : function (e) {
        return (
          e &&
          function () {
            return _n.apply(e, arguments);
          }
        );
      };
});

var ma = u((fV, ha) => {
  var Ta = Z(),
    X_ = Ta({}.toString),
    H_ = Ta(''.slice);

  ha.exports = function (e) {
    return H_(X_(e), 8, -1);
  };
});

var Aa = u((pV, Oa) => {
  var B_ = M(),
    j_ = Z(),
    W_ = we(),
    K_ = ma(),
    In = B_.Object,
    Y_ = j_(''.split);

  Oa.exports = W_(function () {
    return !In('z').propertyIsEnumerable(0);
  })
    ? function (e) {
        return K_(e) == 'String' ? Y_(e, '') : In(e);
      }
    : In;
});

var Tn = u((dV, Sa) => {
  var z_ = M(),
    k_ = z_.TypeError;

  Sa.exports = function (e) {
    if (e == null) throw k_("Can't call method on " + e);
    return e;
  };
});

var dr = u((EV, ba) => {
  var $_ = Aa(),
    Q_ = Tn();

  ba.exports = function (e) {
    return $_(Q_(e));
  };
});

var oe = u((gV, xa) => {
  xa.exports = function (e) {
    return typeof e === 'function';
  };
});

var De = u((yV, Ra) => {
  var Z_ = oe();

  Ra.exports = function (e) {
    return typeof e === 'object' ? e !== null : Z_(e);
  };
});

var Er = u((vV, Ca) => {
  var hn = M(),
    J_ = oe(),
    eI = function (e) {
      return J_(e) ? e : void 0;
    };

  Ca.exports = function (e, r) {
    return arguments.length < 2 ? eI(hn[e]) : hn[e] && hn[e][r];
  };
});

var Pa = u((_V, Na) => {
  var rI = Z();

  Na.exports = rI({}.isPrototypeOf);
});

var La = u((IV, qa) => {
  var tI = Er();

  qa.exports = tI('navigator', 'userAgent') || '';
});

var Ua = u((TV, Va) => {
  var Ga = M(),
    mn = La(),
    Ma = Ga.process,
    wa = Ga.Deno,
    Da = (Ma && Ma.versions) || (wa && wa.version),
    Fa = Da && Da.v8,
    J,
    Qr;

  Fa && ((J = Fa.split('.')), (Qr = J[0] > 0 && J[0] < 4 ? 1 : +(J[0] + J[1])));

  !Qr &&
    mn &&
    ((J = mn.match(/Edge\/(\d+)/)),
    (!J || J[1] >= 74) && ((J = mn.match(/Chrome\/(\d+)/)), J && (Qr = +J[1])));

  Va.exports = Qr;
});

var On = u((hV, Ha) => {
  var Xa = Ua(),
    nI = we();

  Ha.exports =
    !!Object.getOwnPropertySymbols &&
    !nI(function () {
      var e = Symbol();

      return !String(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && Xa && Xa < 41);
    });
});

var An = u((mV, Ba) => {
  var iI = On();

  Ba.exports = iI && !Symbol.sham && typeof Symbol.iterator === 'symbol';
});

var Sn = u((OV, ja) => {
  var oI = M(),
    aI = Er(),
    sI = oe(),
    uI = Pa(),
    cI = An(),
    lI = oI.Object;

  ja.exports = cI
    ? function (e) {
        return typeof e === 'symbol';
      }
    : function (e) {
        var r = aI('Symbol');

        return sI(r) && uI(r.prototype, lI(e));
      };
});

var Ka = u((AV, Wa) => {
  var fI = M(),
    pI = fI.String;

  Wa.exports = function (e) {
    try {
      return pI(e);
    } catch {
      return 'Object';
    }
  };
});

var za = u((SV, Ya) => {
  var dI = M(),
    EI = oe(),
    gI = Ka(),
    yI = dI.TypeError;

  Ya.exports = function (e) {
    if (EI(e)) return e;

    throw yI(gI(e) + ' is not a function');
  };
});

var $a = u((bV, ka) => {
  var vI = za();

  ka.exports = function (e, r) {
    var t = e[r];

    return t == null ? void 0 : vI(t);
  };
});

var Za = u((xV, Qa) => {
  var _I = M(),
    bn = $r(),
    xn = oe(),
    Rn = De(),
    II = _I.TypeError;

  Qa.exports = function (e, r) {
    var t, n;

    if (
      (r === 'string' && xn((t = e.toString)) && !Rn((n = bn(t, e)))) ||
      (xn((t = e.valueOf)) && !Rn((n = bn(t, e)))) ||
      (r !== 'string' && xn((t = e.toString)) && !Rn((n = bn(t, e))))
    )
      return n;

    throw II("Can't convert object to primitive value");
  };
});

var es = u((RV, Ja) => {
  Ja.exports = !1;
});

var Zr = u((CV, ts) => {
  var rs = M(),
    TI = Object.defineProperty;

  ts.exports = function (e, r) {
    try {
      TI(rs, e, { configurable: !0, value: r, writable: !0 });
    } catch {
      rs[e] = r;
    }

    return r;
  };
});

var Jr = u((NV, is) => {
  var hI = M(),
    mI = Zr(),
    ns = '__core-js_shared__',
    OI = hI[ns] || mI(ns, {});

  is.exports = OI;
});

var Cn = u((PV, as) => {
  var AI = es(),
    os = Jr();

  (as.exports = function (e, r) {
    return os[e] || (os[e] = r !== void 0 ? r : {});
  })('versions', []).push({
    copyright: '\xA9 2021 Denis Pushkarev (zloirock.ru)',
    mode: AI ? 'pure' : 'global',
    version: '3.19.0',
  });
});

var us = u((qV, ss) => {
  var SI = M(),
    bI = Tn(),
    xI = SI.Object;

  ss.exports = function (e) {
    return xI(bI(e));
  };
});

var _e = u((LV, cs) => {
  var RI = Z(),
    CI = us(),
    NI = RI({}.hasOwnProperty);

  cs.exports =
    Object.hasOwn ||
    function (r, t) {
      return NI(CI(r), t);
    };
});

var Nn = u((MV, ls) => {
  var PI = Z(),
    qI = 0,
    LI = Math.random(),
    MI = PI((1).toString);

  ls.exports = function (e) {
    return 'Symbol(' + (e === void 0 ? '' : e) + ')_' + MI(++qI + LI, 36);
  };
});

var Pn = u((wV, gs) => {
  var wI = M(),
    DI = Cn(),
    fs = _e(),
    FI = Nn(),
    ps = On(),
    Es = An(),
    Fe = DI('wks'),
    be = wI.Symbol,
    ds = be && be.for,
    GI = Es ? be : (be && be.withoutSetter) || FI;

  gs.exports = function (e) {
    if (!fs(Fe, e) || !(ps || typeof Fe[e] === 'string')) {
      var r = 'Symbol.' + e;

      ps && fs(be, e) ? (Fe[e] = be[e]) : Es && ds ? (Fe[e] = ds(r)) : (Fe[e] = GI(r));
    }

    return Fe[e];
  };
});

var Is = u((DV, _s) => {
  var VI = M(),
    UI = $r(),
    ys = De(),
    vs = Sn(),
    XI = $a(),
    HI = Za(),
    BI = Pn(),
    jI = VI.TypeError,
    WI = BI('toPrimitive');

  _s.exports = function (e, r) {
    if (!ys(e) || vs(e)) return e;

    var t = XI(e, WI),
      n;

    if (t) {
      if ((r === void 0 && (r = 'default'), (n = UI(t, e, r)), !ys(n) || vs(n))) return n;

      throw jI("Can't convert object to primitive value");
    }

    return r === void 0 && (r = 'number'), HI(e, r);
  };
});

var qn = u((FV, Ts) => {
  var KI = Is(),
    YI = Sn();

  Ts.exports = function (e) {
    var r = KI(e, 'string');

    return YI(r) ? r : r + '';
  };
});

var Mn = u((GV, ms) => {
  var zI = M(),
    hs = De(),
    Ln = zI.document,
    kI = hs(Ln) && hs(Ln.createElement);

  ms.exports = function (e) {
    return kI ? Ln.createElement(e) : {};
  };
});

var wn = u((VV, Os) => {
  var $I = Se(),
    QI = we(),
    ZI = Mn();

  Os.exports =
    !$I &&
    !QI(function () {
      return (
        Object.defineProperty(ZI('div'), 'a', {
          get: function () {
            return 7;
          },
        }).a != 7
      );
    });
});

var Dn = u((Ss) => {
  var JI = Se(),
    eT = $r(),
    rT = ya(),
    tT = yn(),
    nT = dr(),
    iT = qn(),
    oT = _e(),
    aT = wn(),
    As = Object.getOwnPropertyDescriptor;

  Ss.f = JI
    ? As
    : function (r, t) {
        if (((r = nT(r)), (t = iT(t)), aT))
          try {
            return As(r, t);
          } catch {}

        if (oT(r, t)) return tT(!eT(rT.f, r, t), r[t]);
      };
});

var gr = u((XV, xs) => {
  var bs = M(),
    sT = De(),
    uT = bs.String,
    cT = bs.TypeError;

  xs.exports = function (e) {
    if (sT(e)) return e;

    throw cT(uT(e) + ' is not an object');
  };
});

var yr = u((Ns) => {
  var lT = M(),
    fT = Se(),
    pT = wn(),
    Rs = gr(),
    dT = qn(),
    ET = lT.TypeError,
    Cs = Object.defineProperty;

  Ns.f = fT
    ? Cs
    : function (r, t, n) {
        if ((Rs(r), (t = dT(t)), Rs(n), pT))
          try {
            return Cs(r, t, n);
          } catch {}

        if ('get' in n || 'set' in n) throw ET('Accessors not supported');
        return 'value' in n && (r[t] = n.value), r;
      };
});

var et = u((BV, Ps) => {
  var gT = Se(),
    yT = yr(),
    vT = yn();

  Ps.exports = gT
    ? function (e, r, t) {
        return yT.f(e, r, vT(1, t));
      }
    : function (e, r, t) {
        return (e[r] = t), e;
      };
});

var Gn = u((jV, qs) => {
  var _T = Z(),
    IT = oe(),
    Fn = Jr(),
    TT = _T(Function.toString);

  IT(Fn.inspectSource) ||
    (Fn.inspectSource = function (e) {
      return TT(e);
    });

  qs.exports = Fn.inspectSource;
});

var ws = u((WV, Ms) => {
  var hT = M(),
    mT = oe(),
    OT = Gn(),
    Ls = hT.WeakMap;

  Ms.exports = mT(Ls) && /native code/.test(OT(Ls));
});

var Vn = u((KV, Fs) => {
  var AT = Cn(),
    ST = Nn(),
    Ds = AT('keys');

  Fs.exports = function (e) {
    return Ds[e] || (Ds[e] = ST(e));
  };
});

var rt = u((YV, Gs) => {
  Gs.exports = {};
});

var js = u((zV, Bs) => {
  var bT = ws(),
    Hs = M(),
    Un = Z(),
    xT = De(),
    RT = et(),
    Xn = _e(),
    Hn = Jr(),
    CT = Vn(),
    NT = rt(),
    Vs = 'Object already initialized',
    jn = Hs.TypeError,
    PT = Hs.WeakMap,
    tt,
    vr,
    nt,
    qT = function (e) {
      return nt(e) ? vr(e) : tt(e, {});
    },
    LT = function (e) {
      return function (r) {
        var t;

        if (!xT(r) || (t = vr(r)).type !== e) throw jn('Incompatible receiver, ' + e + ' required');
        return t;
      };
    };

  bT || Hn.state
    ? ((Ie = Hn.state || (Hn.state = new PT())),
      (Us = Un(Ie.get)),
      (Bn = Un(Ie.has)),
      (Xs = Un(Ie.set)),
      (tt = function (e, r) {
        if (Bn(Ie, e)) throw new jn(Vs);
        return (r.facade = e), Xs(Ie, e, r), r;
      }),
      (vr = function (e) {
        return Us(Ie, e) || {};
      }),
      (nt = function (e) {
        return Bn(Ie, e);
      }))
    : ((xe = CT('state')),
      (NT[xe] = !0),
      (tt = function (e, r) {
        if (Xn(e, xe)) throw new jn(Vs);
        return (r.facade = e), RT(e, xe, r), r;
      }),
      (vr = function (e) {
        return Xn(e, xe) ? e[xe] : {};
      }),
      (nt = function (e) {
        return Xn(e, xe);
      }));

  var Ie, Us, Bn, Xs, xe;

  Bs.exports = { enforce: qT, get: vr, getterFor: LT, has: nt, set: tt };
});

var Ys = u((kV, Ks) => {
  var Wn = Se(),
    MT = _e(),
    Ws = Function.prototype,
    wT = Wn && Object.getOwnPropertyDescriptor,
    Kn = MT(Ws, 'name'),
    DT = Kn && function () {}.name === 'something',
    FT = Kn && (!Wn || (Wn && wT(Ws, 'name').configurable));

  Ks.exports = { CONFIGURABLE: FT, EXISTS: Kn, PROPER: DT };
});

var Zs = u(($V, Qs) => {
  var GT = M(),
    zs = oe(),
    VT = _e(),
    ks = et(),
    UT = Zr(),
    XT = Gn(),
    $s = js(),
    HT = Ys().CONFIGURABLE,
    BT = $s.get,
    jT = $s.enforce,
    WT = String(String).split('String');

  (Qs.exports = function (e, r, t, n) {
    var i = n ? !!n.unsafe : !1,
      o = n ? !!n.enumerable : !1,
      a = n ? !!n.noTargetGet : !1,
      s = n && n.name !== void 0 ? n.name : r,
      c;

    if (
      (zs(t) &&
        (String(s).slice(0, 7) === 'Symbol(' &&
          (s = '[' + String(s).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
        (!VT(t, 'name') || (HT && t.name !== s)) && ks(t, 'name', s),
        (c = jT(t)),
        c.source || (c.source = WT.join(typeof s === 'string' ? s : ''))),
      e === GT)
    ) {
      o ? (e[r] = t) : UT(r, t);
      return;
    } else i ? !a && e[r] && (o = !0) : delete e[r];
    o ? (e[r] = t) : ks(e, r, t);
  })(Function.prototype, 'toString', function () {
    return (zs(this) && BT(this).source) || XT(this);
  });
});

var Yn = u((QV, Js) => {
  var KT = Math.ceil,
    YT = Math.floor;

  Js.exports = function (e) {
    var r = +e;

    return r !== r || r === 0 ? 0 : (r > 0 ? YT : KT)(r);
  };
});

var ru = u((ZV, eu) => {
  var zT = Yn(),
    kT = Math.max,
    $T = Math.min;

  eu.exports = function (e, r) {
    var t = zT(e);

    return t < 0 ? kT(t + r, 0) : $T(t, r);
  };
});

var nu = u((JV, tu) => {
  var QT = Yn(),
    ZT = Math.min;

  tu.exports = function (e) {
    return e > 0 ? ZT(QT(e), 9007199254740991) : 0;
  };
});

var ou = u((eU, iu) => {
  var JT = nu();

  iu.exports = function (e) {
    return JT(e.length);
  };
});

var zn = u((rU, su) => {
  var eh = dr(),
    rh = ru(),
    th = ou(),
    au = function (e) {
      return function (r, t, n) {
        var i = eh(r),
          o = th(i),
          a = rh(n, o),
          s;

        if (e && t != t) {
          for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
        } else for (; o > a; a++) if ((e || a in i) && i[a] === t) return e || a || 0;
        return !e && -1;
      };
    };

  su.exports = { includes: au(!0), indexOf: au(!1) };
});

var $n = u((tU, cu) => {
  var nh = Z(),
    kn = _e(),
    ih = dr(),
    oh = zn().indexOf,
    ah = rt(),
    uu = nh([].push);

  cu.exports = function (e, r) {
    var t = ih(e),
      n = 0,
      i = [],
      o;

    for (o in t) !kn(ah, o) && kn(t, o) && uu(i, o);
    for (; r.length > n; ) kn(t, (o = r[n++])) && (~oh(i, o) || uu(i, o));
    return i;
  };
});

var it = u((nU, lu) => {
  lu.exports = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
  ];
});

var pu = u((fu) => {
  var sh = $n(),
    uh = it(),
    ch = uh.concat('length', 'prototype');

  fu.f =
    Object.getOwnPropertyNames ||
    function (r) {
      return sh(r, ch);
    };
});

var Eu = u((du) => {
  du.f = Object.getOwnPropertySymbols;
});

var yu = u((aU, gu) => {
  var lh = Er(),
    fh = Z(),
    ph = pu(),
    dh = Eu(),
    Eh = gr(),
    gh = fh([].concat);

  gu.exports =
    lh('Reflect', 'ownKeys') ||
    function (r) {
      var t = ph.f(Eh(r)),
        n = dh.f;

      return n ? gh(t, n(r)) : t;
    };
});

var _u = u((sU, vu) => {
  var yh = _e(),
    vh = yu(),
    _h = Dn(),
    Ih = yr();

  vu.exports = function (e, r) {
    for (var t = vh(r), n = Ih.f, i = _h.f, o = 0; o < t.length; o++) {
      var a = t[o];

      yh(e, a) || n(e, a, i(r, a));
    }
  };
});

var Tu = u((uU, Iu) => {
  var Th = we(),
    hh = oe(),
    mh = /#|\.prototype\./,
    _r = function (e, r) {
      var t = Ah[Oh(e)];

      return t == bh ? !0 : t == Sh ? !1 : hh(r) ? Th(r) : !!r;
    },
    Oh = (_r.normalize = function (e) {
      return String(e).replace(mh, '.').toLowerCase();
    }),
    Ah = (_r.data = {}),
    Sh = (_r.NATIVE = 'N'),
    bh = (_r.POLYFILL = 'P');

  Iu.exports = _r;
});

var mu = u((cU, hu) => {
  var Qn = M(),
    xh = Dn().f,
    Rh = et(),
    Ch = Zs(),
    Nh = Zr(),
    Ph = _u(),
    qh = Tu();

  hu.exports = function (e, r) {
    var t = e.target,
      n = e.global,
      i = e.stat,
      o,
      a,
      s,
      c,
      l,
      f;

    if ((n ? (a = Qn) : i ? (a = Qn[t] || Nh(t, {})) : (a = (Qn[t] || {}).prototype), a))
      for (s in r) {
        if (
          ((l = r[s]),
          e.noTargetGet ? ((f = xh(a, s)), (c = f && f.value)) : (c = a[s]),
          (o = qh(n ? s : t + (i ? '.' : '#') + s, e.forced)),
          !o && c !== void 0)
        ) {
          if (typeof l === typeof c) continue;
          Ph(l, c);
        }

        (e.sham || (c && c.sham)) && Rh(l, 'sham', !0), Ch(a, s, l, e);
      }
  };
});

var Au = u((lU, Ou) => {
  var Lh = $n(),
    Mh = it();

  Ou.exports =
    Object.keys ||
    function (r) {
      return Lh(r, Mh);
    };
});

var bu = u((fU, Su) => {
  var wh = Se(),
    Dh = yr(),
    Fh = gr(),
    Gh = dr(),
    Vh = Au();

  Su.exports = wh
    ? Object.defineProperties
    : function (r, t) {
        Fh(r);
        for (var n = Gh(t), i = Vh(t), o = i.length, a = 0, s; o > a; ) Dh.f(r, (s = i[a++]), n[s]);
        return r;
      };
});

var Ru = u((pU, xu) => {
  var Uh = Er();

  xu.exports = Uh('document', 'documentElement');
});

var Du = u((dU, wu) => {
  var Xh = gr(),
    Hh = bu(),
    Cu = it(),
    Bh = rt(),
    jh = Ru(),
    Wh = Mn(),
    Kh = Vn(),
    Nu = '>',
    Pu = '<',
    Jn = 'prototype',
    ei = 'script',
    Lu = Kh('IE_PROTO'),
    Zn = function () {},
    Mu = function (e) {
      return Pu + ei + Nu + e + Pu + '/' + ei + Nu;
    },
    qu = function (e) {
      e.write(Mu('')), e.close();

      var r = e.parentWindow.Object;

      return (e = null), r;
    },
    Yh = function () {
      var e = Wh('iframe'),
        r = 'java' + ei + ':',
        t;

      return (
        (e.style.display = 'none'),
        jh.appendChild(e),
        (e.src = String(r)),
        (t = e.contentWindow.document),
        t.open(),
        t.write(Mu('document.F=Object')),
        t.close(),
        t.F
      );
    },
    ot,
    at = function () {
      try {
        ot = new ActiveXObject('htmlfile');
      } catch {}

      at = typeof document < 'u' ? (document.domain && ot ? qu(ot) : Yh()) : qu(ot);

      for (var e = Cu.length; e--; ) delete at[Jn][Cu[e]];
      return at();
    };

  Bh[Lu] = !0;

  wu.exports =
    Object.create ||
    function (r, t) {
      var n;

      return (
        r !== null ? ((Zn[Jn] = Xh(r)), (n = new Zn()), (Zn[Jn] = null), (n[Lu] = r)) : (n = at()),
        t === void 0 ? n : Hh(n, t)
      );
    };
});

var Gu = u((EU, Fu) => {
  var zh = Pn(),
    kh = Du(),
    $h = yr(),
    ri = zh('unscopables'),
    ti = Array.prototype;

  ti[ri] == null && $h.f(ti, ri, { configurable: !0, value: kh(null) });

  Fu.exports = function (e) {
    ti[ri][e] = !0;
  };
});

var Vu = u(() => {
  'use strict';

  var Qh = mu(),
    Zh = zn().includes,
    Jh = Gu();

  Qh(
    { proto: !0, target: 'Array' },
    {
      includes: function (r) {
        return Zh(this, r, arguments.length > 1 ? arguments[1] : void 0);
      },
    },
  );

  Jh('includes');
});

var Xu = u((vU, Uu) => {
  var em = M(),
    rm = Z();

  Uu.exports = function (e, r) {
    return rm(em[e].prototype[r]);
  };
});

var Bu = u((_U, Hu) => {
  Vu();

  var tm = Xu();

  Hu.exports = tm('Array', 'includes');
});

var Wu = u((IU, ju) => {
  var nm = Bu();

  ju.exports = nm;
});

var Yu = u((TU, Ku) => {
  var im = Wu();

  Ku.exports = im;
});

var ni = u((hU, zu) => {
  var om = typeof global === 'object' && global && global.Object === Object && global;

  zu.exports = om;
});

var ee = u((mU, ku) => {
  var am = ni(),
    sm = typeof self === 'object' && self && self.Object === Object && self,
    um = am || sm || Function('return this')();

  ku.exports = um;
});

var Ge = u((OU, $u) => {
  var cm = ee(),
    lm = cm.Symbol;

  $u.exports = lm;
});

var ec = u((AU, Ju) => {
  var Qu = Ge(),
    Zu = Object.prototype,
    fm = Zu.hasOwnProperty,
    pm = Zu.toString,
    Ir = Qu ? Qu.toStringTag : void 0;

  function dm(e) {
    var r = fm.call(e, Ir),
      t = e[Ir];

    try {
      e[Ir] = void 0;

      var n = !0;
    } catch {}

    var i = pm.call(e);

    return n && (r ? (e[Ir] = t) : delete e[Ir]), i;
  }

  Ju.exports = dm;
});

var tc = u((SU, rc) => {
  var Em = Object.prototype,
    gm = Em.toString;

  function ym(e) {
    return gm.call(e);
  }

  rc.exports = ym;
});

var Te = u((bU, oc) => {
  var nc = Ge(),
    vm = ec(),
    _m = tc(),
    Im = '[object Null]',
    Tm = '[object Undefined]',
    ic = nc ? nc.toStringTag : void 0;

  function hm(e) {
    return e == null ? (e === void 0 ? Tm : Im) : ic && ic in Object(e) ? vm(e) : _m(e);
  }

  oc.exports = hm;
});

var ii = u((xU, ac) => {
  function mm(e, r) {
    return function (t) {
      return e(r(t));
    };
  }

  ac.exports = mm;
});

var oi = u((RU, sc) => {
  var Om = ii(),
    Am = Om(Object.getPrototypeOf, Object);

  sc.exports = Am;
});

var pe = u((CU, uc) => {
  function Sm(e) {
    return e != null && typeof e === 'object';
  }

  uc.exports = Sm;
});

var ai = u((NU, lc) => {
  var bm = Te(),
    xm = oi(),
    Rm = pe(),
    Cm = '[object Object]',
    Nm = Function.prototype,
    Pm = Object.prototype,
    cc = Nm.toString,
    qm = Pm.hasOwnProperty,
    Lm = cc.call(Object);

  function Mm(e) {
    if (!Rm(e) || bm(e) != Cm) return !1;

    var r = xm(e);

    if (r === null) return !0;

    var t = qm.call(r, 'constructor') && r.constructor;

    return typeof t === 'function' && t instanceof t && cc.call(t) == Lm;
  }

  lc.exports = Mm;
});

var fc = u((si) => {
  'use strict';
  Object.defineProperty(si, '__esModule', { value: !0 });
  si.default = wm;

  function wm(e) {
    var r,
      t = e.Symbol;

    return (
      typeof t === 'function'
        ? t.observable
          ? (r = t.observable)
          : ((r = t('observable')), (t.observable = r))
        : (r = '@@observable'),
      r
    );
  }
});

var pc = u((ci, ui) => {
  'use strict';
  Object.defineProperty(ci, '__esModule', { value: !0 });

  var Dm = fc(),
    Fm = Gm(Dm);

  function Gm(e) {
    return e && e.__esModule ? e : { default: e };
  }

  var Ve;

  typeof self < 'u'
    ? (Ve = self)
    : typeof window < 'u'
      ? (Ve = window)
      : typeof global < 'u'
        ? (Ve = global)
        : typeof ui < 'u'
          ? (Ve = ui)
          : (Ve = Function('return this')());

  var Vm = (0, Fm.default)(Ve);

  ci.default = Vm;
});

var li = u((Tr) => {
  'use strict';
  Tr.__esModule = !0;
  Tr.ActionTypes = void 0;
  Tr.default = yc;

  var Um = ai(),
    Xm = gc(Um),
    Hm = pc(),
    dc = gc(Hm);

  function gc(e) {
    return e && e.__esModule ? e : { default: e };
  }

  var Ec = (Tr.ActionTypes = { INIT: '@@redux/INIT' });

  function yc(e, r, t) {
    var n;

    if ((typeof r === 'function' && typeof t > 'u' && ((t = r), (r = void 0)), typeof t < 'u')) {
      if (typeof t !== 'function') throw new Error('Expected the enhancer to be a function.');
      return t(yc)(e, r);
    }

    if (typeof e !== 'function') throw new Error('Expected the reducer to be a function.');

    var i = e,
      o = r,
      a = [],
      s = a,
      c = !1;

    function l() {
      s === a && (s = a.slice());
    }

    function f() {
      return o;
    }

    function p(E) {
      if (typeof E !== 'function') throw new Error('Expected listener to be a function.');

      var I = !0;

      return (
        l(),
        s.push(E),
        function () {
          if (I) {
            (I = !1), l();

            var T = s.indexOf(E);

            s.splice(T, 1);
          }
        }
      );
    }

    function d(E) {
      if (!(0, Xm.default)(E))
        throw new Error('Actions must be plain objects. Use custom middleware for async actions.');
      if (typeof E.type > 'u')
        throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
      if (c) throw new Error('Reducers may not dispatch actions.');

      try {
        (c = !0), (o = i(o, E));
      } finally {
        c = !1;
      }

      for (var I = (a = s), v = 0; v < I.length; v++) I[v]();
      return E;
    }

    function y(E) {
      if (typeof E !== 'function') throw new Error('Expected the nextReducer to be a function.');
      (i = E), d({ type: Ec.INIT });
    }

    function g() {
      var E,
        I = p;

      return (
        (E = {
          subscribe: function (T) {
            if (typeof T !== 'object') throw new TypeError('Expected the observer to be an object.');

            function m() {
              T.next && T.next(f());
            }

            m();

            var h = I(m);

            return { unsubscribe: h };
          },
        }),
        (E[dc.default] = function () {
          return this;
        }),
        E
      );
    }

    return (
      d({ type: Ec.INIT }),
      (n = { dispatch: d, getState: f, replaceReducer: y, subscribe: p }),
      (n[dc.default] = g),
      n
    );
  }
});

var pi = u((fi) => {
  'use strict';
  fi.__esModule = !0;
  fi.default = Bm;

  function Bm(e) {
    typeof console < 'u' && typeof console.error === 'function' && console.error(e);

    try {
      throw new Error(e);
    } catch {}
  }
});

var Ic = u((di) => {
  'use strict';
  di.__esModule = !0;
  di.default = zm;

  var vc = li(),
    jm = ai(),
    MU = _c(jm),
    Wm = pi(),
    wU = _c(Wm);

  function _c(e) {
    return e && e.__esModule ? e : { default: e };
  }

  function Km(e, r) {
    var t = r && r.type,
      n = (t && '"' + t.toString() + '"') || 'an action';

    return (
      'Given action ' +
      n +
      ', reducer "' +
      e +
      '" returned undefined. To ignore an action, you must explicitly return the previous state.'
    );
  }

  function Ym(e) {
    Object.keys(e).forEach(function (r) {
      var t = e[r],
        n = t(void 0, { type: vc.ActionTypes.INIT });

      if (typeof n > 'u')
        throw new Error(
          'Reducer "' +
            r +
            '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.',
        );

      var i = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');

      if (typeof t(void 0, { type: i }) > 'u')
        throw new Error(
          'Reducer "' +
            r +
            '" returned undefined when probed with a random type. ' +
            ("Don't try to handle " + vc.ActionTypes.INIT + ' or other actions in "redux/*" ') +
            'namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.',
        );
    });
  }

  function zm(e) {
    for (var r = Object.keys(e), t = {}, n = 0; n < r.length; n++) {
      var i = r[n];

      typeof e[i] === 'function' && (t[i] = e[i]);
    }

    var o = Object.keys(t);

    if (!1) var a;

    var s;

    try {
      Ym(t);
    } catch (c) {
      s = c;
    }

    return function () {
      var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
        f = arguments[1];

      if (s) throw s;
      if (!1) var p;

      for (var d = !1, y = {}, g = 0; g < o.length; g++) {
        var E = o[g],
          I = t[E],
          v = l[E],
          T = I(v, f);

        if (typeof T > 'u') {
          var m = Km(E, f);

          throw new Error(m);
        }

        (y[E] = T), (d = d || T !== v);
      }

      return d ? y : l;
    };
  }
});

var hc = u((Ei) => {
  'use strict';
  Ei.__esModule = !0;
  Ei.default = km;

  function Tc(e, r) {
    return function () {
      return r(e.apply(void 0, arguments));
    };
  }

  function km(e, r) {
    if (typeof e === 'function') return Tc(e, r);
    if (typeof e !== 'object' || e === null)
      throw new Error(
        'bindActionCreators expected an object or a function, instead received ' +
          (e === null ? 'null' : typeof e) +
          '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?',
      );

    for (var t = Object.keys(e), n = {}, i = 0; i < t.length; i++) {
      var o = t[i],
        a = e[o];

      typeof a === 'function' && (n[o] = Tc(a, r));
    }

    return n;
  }
});

var yi = u((gi) => {
  'use strict';
  gi.__esModule = !0;
  gi.default = $m;

  function $m() {
    for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];

    if (r.length === 0)
      return function (o) {
        return o;
      };

    if (r.length === 1) return r[0];

    var n = r[r.length - 1],
      i = r.slice(0, -1);

    return function () {
      return i.reduceRight(
        function (o, a) {
          return a(o);
        },
        n.apply(void 0, arguments),
      );
    };
  }
});

var mc = u((vi) => {
  'use strict';
  vi.__esModule = !0;

  var Qm =
    Object.assign ||
    function (e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];

        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }

      return e;
    };

  vi.default = rO;

  var Zm = yi(),
    Jm = eO(Zm);

  function eO(e) {
    return e && e.__esModule ? e : { default: e };
  }

  function rO() {
    for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];

    return function (n) {
      return function (i, o, a) {
        var s = n(i, o, a),
          c = s.dispatch,
          l = [],
          f = {
            dispatch: function (d) {
              return c(d);
            },
            getState: s.getState,
          };

        return (
          (l = r.map(function (p) {
            return p(f);
          })),
          (c = Jm.default.apply(void 0, l)(s.dispatch)),
          Qm({}, s, { dispatch: c })
        );
      };
    };
  }
});

var _i = u((Q) => {
  'use strict';
  Q.__esModule = !0;

  Q.compose = Q.applyMiddleware = Q.bindActionCreators = Q.combineReducers = Q.createStore = void 0;

  var tO = li(),
    nO = Ue(tO),
    iO = Ic(),
    oO = Ue(iO),
    aO = hc(),
    sO = Ue(aO),
    uO = mc(),
    cO = Ue(uO),
    lO = yi(),
    fO = Ue(lO),
    pO = pi(),
    UU = Ue(pO);

  function Ue(e) {
    return e && e.__esModule ? e : { default: e };
  }

  Q.createStore = nO.default;
  Q.combineReducers = oO.default;
  Q.bindActionCreators = sO.default;
  Q.applyMiddleware = cO.default;
  Q.compose = fO.default;
});

var re,
  Ii,
  ae,
  dO,
  EO,
  st,
  gO,
  Ti = L(() => {
    'use strict';

    (re = {
      DROPDOWN_CLOSE: 'DROPDOWN_CLOSE',
      DROPDOWN_OPEN: 'DROPDOWN_OPEN',
      ECOMMERCE_CART_CLOSE: 'ECOMMERCE_CART_CLOSE',
      ECOMMERCE_CART_OPEN: 'ECOMMERCE_CART_OPEN',
      MOUSE_CLICK: 'MOUSE_CLICK',
      MOUSE_DOWN: 'MOUSE_DOWN',
      MOUSE_MOVE: 'MOUSE_MOVE',
      MOUSE_MOVE_IN_VIEWPORT: 'MOUSE_MOVE_IN_VIEWPORT',
      MOUSE_OUT: 'MOUSE_OUT',
      MOUSE_OVER: 'MOUSE_OVER',
      MOUSE_SECOND_CLICK: 'MOUSE_SECOND_CLICK',
      MOUSE_UP: 'MOUSE_UP',
      NAVBAR_CLOSE: 'NAVBAR_CLOSE',
      NAVBAR_OPEN: 'NAVBAR_OPEN',
      PAGE_FINISH: 'PAGE_FINISH',
      PAGE_SCROLL: 'PAGE_SCROLL',
      PAGE_SCROLL_DOWN: 'PAGE_SCROLL_DOWN',
      PAGE_SCROLL_UP: 'PAGE_SCROLL_UP',
      PAGE_START: 'PAGE_START',
      SCROLL_INTO_VIEW: 'SCROLL_INTO_VIEW',
      SCROLL_OUT_OF_VIEW: 'SCROLL_OUT_OF_VIEW',
      SCROLLING_IN_VIEW: 'SCROLLING_IN_VIEW',
      SLIDER_ACTIVE: 'SLIDER_ACTIVE',
      SLIDER_INACTIVE: 'SLIDER_INACTIVE',
      TAB_ACTIVE: 'TAB_ACTIVE',
      TAB_INACTIVE: 'TAB_INACTIVE',
    }),
      (Ii = { CLASS: 'CLASS', ELEMENT: 'ELEMENT', PAGE: 'PAGE' }),
      (ae = { ELEMENT: 'ELEMENT', VIEWPORT: 'VIEWPORT' }),
      (dO = { X_AXIS: 'X_AXIS', Y_AXIS: 'Y_AXIS' }),
      (EO = {
        CHILDREN: 'CHILDREN',
        IMMEDIATE_CHILDREN: 'IMMEDIATE_CHILDREN',
        SIBLINGS: 'SIBLINGS',
      }),
      (st = {
        BLINK_EFFECT: 'BLINK_EFFECT',
        BOUNCE_EFFECT: 'BOUNCE_EFFECT',
        DROP_EFFECT: 'DROP_EFFECT',
        FADE_EFFECT: 'FADE_EFFECT',
        FLIP_EFFECT: 'FLIP_EFFECT',
        FLIP_LEFT_TO_RIGHT_EFFECT: 'FLIP_LEFT_TO_RIGHT_EFFECT',
        FLIP_RIGHT_TO_LEFT_EFFECT: 'FLIP_RIGHT_TO_LEFT_EFFECT',
        FLY_EFFECT: 'FLY_EFFECT',
        GROW_BIG_EFFECT: 'GROW_BIG_EFFECT',
        GROW_EFFECT: 'GROW_EFFECT',
        JELLO_EFFECT: 'JELLO_EFFECT',
        JIGGLE_EFFECT: 'JIGGLE_EFFECT',
        PLUGIN_LOTTIE_EFFECT: 'PLUGIN_LOTTIE_EFFECT',
        POP_EFFECT: 'POP_EFFECT',
        PULSE_EFFECT: 'PULSE_EFFECT',
        RUBBER_BAND_EFFECT: 'RUBBER_BAND_EFFECT',
        SHRINK_BIG_EFFECT: 'SHRINK_BIG_EFFECT',
        SHRINK_EFFECT: 'SHRINK_EFFECT',
        SLIDE_EFFECT: 'SLIDE_EFFECT',
        SPIN_EFFECT: 'SPIN_EFFECT',
      }),
      (gO = {
        BOTTOM: 'BOTTOM',
        BOTTOM_LEFT: 'BOTTOM_LEFT',
        BOTTOM_RIGHT: 'BOTTOM_RIGHT',
        CLOCKWISE: 'CLOCKWISE',
        COUNTER_CLOCKWISE: 'COUNTER_CLOCKWISE',
        LEFT: 'LEFT',
        RIGHT: 'RIGHT',
        TOP: 'TOP',
        TOP_LEFT: 'TOP_LEFT',
        TOP_RIGHT: 'TOP_RIGHT',
      });
  });

var Y,
  yO,
  ut = L(() => {
    'use strict';

    (Y = {
      GENERAL_COMBO_CLASS: 'GENERAL_COMBO_CLASS',
      GENERAL_CONTINUOUS_ACTION: 'GENERAL_CONTINUOUS_ACTION',
      GENERAL_DISPLAY: 'GENERAL_DISPLAY',
      GENERAL_LOOP: 'GENERAL_LOOP',
      GENERAL_START_ACTION: 'GENERAL_START_ACTION',
      GENERAL_STOP_ACTION: 'GENERAL_STOP_ACTION',
      OBJECT_VALUE: 'OBJECT_VALUE',
      PLUGIN_LOTTIE: 'PLUGIN_LOTTIE',
      PLUGIN_SPLINE: 'PLUGIN_SPLINE',
      PLUGIN_VARIABLE: 'PLUGIN_VARIABLE',
      STYLE_BACKGROUND_COLOR: 'STYLE_BACKGROUND_COLOR',
      STYLE_BORDER: 'STYLE_BORDER',
      STYLE_BOX_SHADOW: 'STYLE_BOX_SHADOW',
      STYLE_FILTER: 'STYLE_FILTER',
      STYLE_FONT_VARIATION: 'STYLE_FONT_VARIATION',
      STYLE_OPACITY: 'STYLE_OPACITY',
      STYLE_SIZE: 'STYLE_SIZE',
      STYLE_TEXT_COLOR: 'STYLE_TEXT_COLOR',
      TRANSFORM_MOVE: 'TRANSFORM_MOVE',
      TRANSFORM_ROTATE: 'TRANSFORM_ROTATE',
      TRANSFORM_SCALE: 'TRANSFORM_SCALE',
      TRANSFORM_SKEW: 'TRANSFORM_SKEW',
    }),
      (yO = {
        ELEMENT: 'ELEMENT',
        ELEMENT_CLASS: 'ELEMENT_CLASS',
        TRIGGER_ELEMENT: 'TRIGGER_ELEMENT',
      });
  });

var vO,
  Oc = L(() => {
    'use strict';

    vO = {
      DROPDOWN_INTERACTION: 'DROPDOWN_INTERACTION',
      ECOMMERCE_CART_INTERACTION: 'ECOMMERCE_CART_INTERACTION',
      MOUSE_CLICK_INTERACTION: 'MOUSE_CLICK_INTERACTION',
      MOUSE_HOVER_INTERACTION: 'MOUSE_HOVER_INTERACTION',
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: 'MOUSE_MOVE_IN_VIEWPORT_INTERACTION',
      MOUSE_MOVE_INTERACTION: 'MOUSE_MOVE_INTERACTION',
      NAVBAR_INTERACTION: 'NAVBAR_INTERACTION',
      PAGE_IS_SCROLLING_INTERACTION: 'PAGE_IS_SCROLLING_INTERACTION',
      PAGE_LOAD_INTERACTION: 'PAGE_LOAD_INTERACTION',
      PAGE_SCROLLED_INTERACTION: 'PAGE_SCROLLED_INTERACTION',
      SCROLL_INTO_VIEW_INTERACTION: 'SCROLL_INTO_VIEW_INTERACTION',
      SCROLLING_IN_VIEW_INTERACTION: 'SCROLLING_IN_VIEW_INTERACTION',
      SLIDER_INTERACTION: 'SLIDER_INTERACTION',
      TAB_INTERACTION: 'TAB_INTERACTION',
    };
  });

var _O,
  IO,
  TO,
  hO,
  mO,
  OO,
  AO,
  hi,
  Ac = L(() => {
    'use strict';
    ut();

    ({
      TRANSFORM_MOVE: _O,
      TRANSFORM_SCALE: IO,
      TRANSFORM_ROTATE: TO,
      TRANSFORM_SKEW: hO,
      STYLE_SIZE: mO,
      STYLE_FILTER: OO,
      STYLE_FONT_VARIATION: AO,
    } = Y),
      (hi = {
        [_O]: !0,
        [AO]: !0,
        [hO]: !0,
        [IO]: !0,
        [mO]: !0,
        [OO]: !0,
        [TO]: !0,
      });
  });

var F = {};

K(F, {
  IX2_ACTION_LIST_PLAYBACK_CHANGED: () => XO,
  IX2_ANIMATION_FRAME_CHANGED: () => wO,
  IX2_CLEAR_REQUESTED: () => qO,
  IX2_ELEMENT_STATE_CHANGED: () => UO,
  IX2_EVENT_LISTENER_ADDED: () => LO,
  IX2_EVENT_STATE_CHANGED: () => MO,
  IX2_INSTANCE_ADDED: () => FO,
  IX2_INSTANCE_REMOVED: () => VO,
  IX2_INSTANCE_STARTED: () => GO,
  IX2_MEDIA_QUERIES_DEFINED: () => BO,
  IX2_PARAMETER_CHANGED: () => DO,
  IX2_PLAYBACK_REQUESTED: () => NO,
  IX2_PREVIEW_REQUESTED: () => CO,
  IX2_RAW_DATA_IMPORTED: () => SO,
  IX2_SESSION_INITIALIZED: () => bO,
  IX2_SESSION_STARTED: () => xO,
  IX2_SESSION_STOPPED: () => RO,
  IX2_STOP_REQUESTED: () => PO,
  IX2_TEST_FRAME_RENDERED: () => jO,
  IX2_VIEWPORT_WIDTH_CHANGED: () => HO,
});

var SO,
  bO,
  xO,
  RO,
  CO,
  NO,
  PO,
  qO,
  LO,
  MO,
  wO,
  DO,
  FO,
  GO,
  VO,
  UO,
  XO,
  HO,
  BO,
  jO,
  Sc = L(() => {
    'use strict';

    (SO = 'IX2_RAW_DATA_IMPORTED'),
      (bO = 'IX2_SESSION_INITIALIZED'),
      (xO = 'IX2_SESSION_STARTED'),
      (RO = 'IX2_SESSION_STOPPED'),
      (CO = 'IX2_PREVIEW_REQUESTED'),
      (NO = 'IX2_PLAYBACK_REQUESTED'),
      (PO = 'IX2_STOP_REQUESTED'),
      (qO = 'IX2_CLEAR_REQUESTED'),
      (LO = 'IX2_EVENT_LISTENER_ADDED'),
      (MO = 'IX2_EVENT_STATE_CHANGED'),
      (wO = 'IX2_ANIMATION_FRAME_CHANGED'),
      (DO = 'IX2_PARAMETER_CHANGED'),
      (FO = 'IX2_INSTANCE_ADDED'),
      (GO = 'IX2_INSTANCE_STARTED'),
      (VO = 'IX2_INSTANCE_REMOVED'),
      (UO = 'IX2_ELEMENT_STATE_CHANGED'),
      (XO = 'IX2_ACTION_LIST_PLAYBACK_CHANGED'),
      (HO = 'IX2_VIEWPORT_WIDTH_CHANGED'),
      (BO = 'IX2_MEDIA_QUERIES_DEFINED'),
      (jO = 'IX2_TEST_FRAME_RENDERED');
  });

var H = {};

K(H, {
  ABSTRACT_NODE: () => HA,
  AUTO: () => PA,
  BACKGROUND: () => SA,
  BACKGROUND_COLOR: () => AA,
  BAR_DELIMITER: () => MA,
  BORDER_COLOR: () => bA,
  BOUNDARY_SELECTOR: () => kO,
  CHILDREN: () => wA,
  COLON_DELIMITER: () => LA,
  COLOR: () => xA,
  COMMA_DELIMITER: () => qA,
  CONFIG_UNIT: () => nA,
  CONFIG_VALUE: () => JO,
  CONFIG_X_UNIT: () => eA,
  CONFIG_X_VALUE: () => $O,
  CONFIG_Y_UNIT: () => rA,
  CONFIG_Y_VALUE: () => QO,
  CONFIG_Z_UNIT: () => tA,
  CONFIG_Z_VALUE: () => ZO,
  DISPLAY: () => RA,
  FILTER: () => TA,
  FLEX: () => CA,
  FONT_VARIATION_SETTINGS: () => hA,
  HEIGHT: () => OA,
  HTML_ELEMENT: () => UA,
  IMMEDIATE_CHILDREN: () => DA,
  IX2_ID_DELIMITER: () => WO,
  OPACITY: () => IA,
  PARENT: () => GA,
  PLAIN_OBJECT: () => XA,
  PRESERVE_3D: () => VA,
  RENDER_GENERAL: () => jA,
  RENDER_PLUGIN: () => KA,
  RENDER_STYLE: () => WA,
  RENDER_TRANSFORM: () => BA,
  ROTATE_X: () => dA,
  ROTATE_Y: () => EA,
  ROTATE_Z: () => gA,
  SCALE_3D: () => pA,
  SCALE_X: () => cA,
  SCALE_Y: () => lA,
  SCALE_Z: () => fA,
  SIBLINGS: () => FA,
  SKEW: () => yA,
  SKEW_X: () => vA,
  SKEW_Y: () => _A,
  TRANSFORM: () => iA,
  TRANSLATE_3D: () => uA,
  TRANSLATE_X: () => oA,
  TRANSLATE_Y: () => aA,
  TRANSLATE_Z: () => sA,
  W_MOD_IX: () => zO,
  W_MOD_JS: () => YO,
  WF_PAGE: () => KO,
  WIDTH: () => mA,
  WILL_CHANGE: () => NA,
});

var WO,
  KO,
  YO,
  zO,
  kO,
  $O,
  QO,
  ZO,
  JO,
  eA,
  rA,
  tA,
  nA,
  iA,
  oA,
  aA,
  sA,
  uA,
  cA,
  lA,
  fA,
  pA,
  dA,
  EA,
  gA,
  yA,
  vA,
  _A,
  IA,
  TA,
  hA,
  mA,
  OA,
  AA,
  SA,
  bA,
  xA,
  RA,
  CA,
  NA,
  PA,
  qA,
  LA,
  MA,
  wA,
  DA,
  FA,
  GA,
  VA,
  UA,
  XA,
  HA,
  BA,
  jA,
  WA,
  KA,
  bc = L(() => {
    'use strict';

    (WO = '|'),
      (KO = 'data-wf-page'),
      (YO = 'w-mod-js'),
      (zO = 'w-mod-ix'),
      (kO = '.w-dyn-item'),
      ($O = 'xValue'),
      (QO = 'yValue'),
      (ZO = 'zValue'),
      (JO = 'value'),
      (eA = 'xUnit'),
      (rA = 'yUnit'),
      (tA = 'zUnit'),
      (nA = 'unit'),
      (iA = 'transform'),
      (oA = 'translateX'),
      (aA = 'translateY'),
      (sA = 'translateZ'),
      (uA = 'translate3d'),
      (cA = 'scaleX'),
      (lA = 'scaleY'),
      (fA = 'scaleZ'),
      (pA = 'scale3d'),
      (dA = 'rotateX'),
      (EA = 'rotateY'),
      (gA = 'rotateZ'),
      (yA = 'skew'),
      (vA = 'skewX'),
      (_A = 'skewY'),
      (IA = 'opacity'),
      (TA = 'filter'),
      (hA = 'font-variation-settings'),
      (mA = 'width'),
      (OA = 'height'),
      (AA = 'backgroundColor'),
      (SA = 'background'),
      (bA = 'borderColor'),
      (xA = 'color'),
      (RA = 'display'),
      (CA = 'flex'),
      (NA = 'willChange'),
      (PA = 'AUTO'),
      (qA = ','),
      (LA = ':'),
      (MA = '|'),
      (wA = 'CHILDREN'),
      (DA = 'IMMEDIATE_CHILDREN'),
      (FA = 'SIBLINGS'),
      (GA = 'PARENT'),
      (VA = 'preserve-3d'),
      (UA = 'HTML_ELEMENT'),
      (XA = 'PLAIN_OBJECT'),
      (HA = 'ABSTRACT_NODE'),
      (BA = 'RENDER_TRANSFORM'),
      (jA = 'RENDER_GENERAL'),
      (WA = 'RENDER_STYLE'),
      (KA = 'RENDER_PLUGIN');
  });

var xc = {};

K(xc, {
  ActionAppliesTo: () => yO,
  ActionTypeConsts: () => Y,
  EventAppliesTo: () => Ii,
  EventBasedOn: () => ae,
  EventContinuousMouseAxes: () => dO,
  EventLimitAffectedElements: () => EO,
  EventTypeConsts: () => re,
  InteractionTypeConsts: () => vO,
  IX2EngineActionTypes: () => F,
  IX2EngineConstants: () => H,
  QuickEffectDirectionConsts: () => gO,
  QuickEffectIds: () => st,
  ReducedMotionTypes: () => hi,
});

var z = L(() => {
  'use strict';
  Ti();
  ut();
  Oc();
  Ac();
  Sc();
  bc();
  ut();
  Ti();
});

var YA,
  Rc,
  Cc = L(() => {
    'use strict';
    z();

    ({ IX2_RAW_DATA_IMPORTED: YA } = F),
      (Rc = (e = Object.freeze({}), r) => {
        switch (r.type) {
          case YA:
            return r.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      });
  });

var Xe = u((w) => {
  'use strict';
  Object.defineProperty(w, '__esModule', { value: !0 });

  var zA =
    typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        };

  w.clone = lt;
  w.addLast = qc;
  w.addFirst = Lc;
  w.removeLast = Mc;
  w.removeFirst = wc;
  w.insert = Dc;
  w.removeAt = Fc;
  w.replaceAt = Gc;
  w.getIn = ft;
  w.set = pt;
  w.setIn = dt;
  w.update = Uc;
  w.updateIn = Xc;
  w.merge = Hc;
  w.mergeDeep = Bc;
  w.mergeIn = jc;
  w.omit = Wc;
  w.addDefaults = Kc;

  var Nc = 'INVALID_ARGS';

  function Pc(e) {
    throw new Error(e);
  }

  function mi(e) {
    var r = Object.keys(e);

    return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r;
  }

  var kA = {}.hasOwnProperty;

  function lt(e) {
    if (Array.isArray(e)) return e.slice();

    for (var r = mi(e), t = {}, n = 0; n < r.length; n++) {
      var i = r[n];

      t[i] = e[i];
    }

    return t;
  }

  function k(e, r, t) {
    var n = t;

    n == null && Pc(Nc);
    for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++)
      a[s - 3] = arguments[s];

    for (var c = 0; c < a.length; c++) {
      var l = a[c];

      if (l != null) {
        var f = mi(l);

        if (f.length)
          for (var p = 0; p <= f.length; p++) {
            var d = f[p];

            if (!(e && n[d] !== void 0)) {
              var y = l[d];

              r && ct(n[d]) && ct(y) && (y = k(e, r, n[d], y)),
                !(y === void 0 || y === n[d]) && (i || ((i = !0), (n = lt(n))), (n[d] = y));
            }
          }
      }
    }

    return n;
  }

  function ct(e) {
    var r = typeof e > 'u' ? 'undefined' : zA(e);

    return e != null && (r === 'object' || r === 'function');
  }

  function qc(e, r) {
    return Array.isArray(r) ? e.concat(r) : e.concat([r]);
  }

  function Lc(e, r) {
    return Array.isArray(r) ? r.concat(e) : [r].concat(e);
  }

  function Mc(e) {
    return e.length ? e.slice(0, e.length - 1) : e;
  }

  function wc(e) {
    return e.length ? e.slice(1) : e;
  }

  function Dc(e, r, t) {
    return e
      .slice(0, r)
      .concat(Array.isArray(t) ? t : [t])
      .concat(e.slice(r));
  }

  function Fc(e, r) {
    return r >= e.length || r < 0 ? e : e.slice(0, r).concat(e.slice(r + 1));
  }

  function Gc(e, r, t) {
    if (e[r] === t) return e;
    for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
    return (i[r] = t), i;
  }

  function ft(e, r) {
    if ((!Array.isArray(r) && Pc(Nc), e != null)) {
      for (var t = e, n = 0; n < r.length; n++) {
        var i = r[n];

        if (((t = t?.[i]), t === void 0)) return t;
      }

      return t;
    }
  }

  function pt(e, r, t) {
    var n = typeof r === 'number' ? [] : {},
      i = e ?? n;

    if (i[r] === t) return i;

    var o = lt(i);

    return (o[r] = t), o;
  }

  function Vc(e, r, t, n) {
    var i = void 0,
      o = r[n];

    if (n === r.length - 1) i = t;
    else {
      var a = ct(e) && ct(e[o]) ? e[o] : typeof r[n + 1] === 'number' ? [] : {};

      i = Vc(a, r, t, n + 1);
    }

    return pt(e, o, i);
  }

  function dt(e, r, t) {
    return r.length ? Vc(e, r, t, 0) : t;
  }

  function Uc(e, r, t) {
    var n = e?.[r],
      i = t(n);

    return pt(e, r, i);
  }

  function Xc(e, r, t) {
    var n = ft(e, r),
      i = t(n);

    return dt(e, r, i);
  }

  function Hc(e, r, t, n, i, o) {
    for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
    return s.length
      ? k.call.apply(k, [null, !1, !1, e, r, t, n, i, o].concat(s))
      : k(!1, !1, e, r, t, n, i, o);
  }

  function Bc(e, r, t, n, i, o) {
    for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
    return s.length
      ? k.call.apply(k, [null, !1, !0, e, r, t, n, i, o].concat(s))
      : k(!1, !0, e, r, t, n, i, o);
  }

  function jc(e, r, t, n, i, o, a) {
    var s = ft(e, r);

    s == null && (s = {});
    for (var c = void 0, l = arguments.length, f = Array(l > 7 ? l - 7 : 0), p = 7; p < l; p++)
      f[p - 7] = arguments[p];
    return (
      f.length
        ? (c = k.call.apply(k, [null, !1, !1, s, t, n, i, o, a].concat(f)))
        : (c = k(!1, !1, s, t, n, i, o, a)),
      dt(e, r, c)
    );
  }

  function Wc(e, r) {
    for (var t = Array.isArray(r) ? r : [r], n = !1, i = 0; i < t.length; i++)
      if (kA.call(e, t[i])) {
        n = !0;
        break;
      }

    if (!n) return e;

    for (var o = {}, a = mi(e), s = 0; s < a.length; s++) {
      var c = a[s];

      t.indexOf(c) >= 0 || (o[c] = e[c]);
    }

    return o;
  }

  function Kc(e, r, t, n, i, o) {
    for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
    return s.length
      ? k.call.apply(k, [null, !0, !1, e, r, t, n, i, o].concat(s))
      : k(!0, !1, e, r, t, n, i, o);
  }

  var $A = {
    addDefaults: Kc,
    addFirst: Lc,
    addLast: qc,
    clone: lt,
    getIn: ft,
    insert: Dc,
    merge: Hc,
    mergeDeep: Bc,
    mergeIn: jc,
    omit: Wc,
    removeAt: Fc,
    removeFirst: wc,
    removeLast: Mc,
    replaceAt: Gc,
    set: pt,
    setIn: dt,
    update: Uc,
    updateIn: Xc,
  };

  w.default = $A;
});

var zc,
  QA,
  ZA,
  JA,
  eS,
  rS,
  Yc,
  kc,
  $c = L(() => {
    'use strict';
    z();

    (zc = C(Xe())),
      ({
        IX2_PREVIEW_REQUESTED: QA,
        IX2_PLAYBACK_REQUESTED: ZA,
        IX2_STOP_REQUESTED: JA,
        IX2_CLEAR_REQUESTED: eS,
      } = F),
      (rS = { clear: {}, playback: {}, preview: {}, stop: {} }),
      (Yc = Object.create(null, {
        [eS]: { value: 'clear' },
        [JA]: { value: 'stop' },
        [QA]: { value: 'preview' },
        [ZA]: { value: 'playback' },
      })),
      (kc = (e = rS, r) => {
        if (r.type in Yc) {
          let t = [Yc[r.type]];

          return (0, zc.setIn)(e, [t], { ...r.payload });
        }

        return e;
      });
  });

var B,
  tS,
  nS,
  iS,
  oS,
  aS,
  sS,
  uS,
  cS,
  lS,
  fS,
  Qc,
  pS,
  Zc,
  Jc = L(() => {
    'use strict';
    z();

    (B = C(Xe())),
      ({
        IX2_SESSION_INITIALIZED: tS,
        IX2_SESSION_STARTED: nS,
        IX2_TEST_FRAME_RENDERED: iS,
        IX2_SESSION_STOPPED: oS,
        IX2_EVENT_LISTENER_ADDED: aS,
        IX2_EVENT_STATE_CHANGED: sS,
        IX2_ANIMATION_FRAME_CHANGED: uS,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: cS,
        IX2_VIEWPORT_WIDTH_CHANGED: lS,
        IX2_MEDIA_QUERIES_DEFINED: fS,
      } = F),
      (Qc = {
        active: !1,
        eventListeners: [],
        eventState: {},
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        mediaQueryKey: null,
        playbackState: {},
        reducedMotion: !1,
        tick: 0,
        viewportWidth: 0,
      }),
      (pS = 20),
      (Zc = (e = Qc, r) => {
        switch (r.type) {
          case tS: {
            let { hasBoundaryNodes: t, reducedMotion: n } = r.payload;

            return (0, B.merge)(e, { hasBoundaryNodes: t, reducedMotion: n });
          }

          case nS:
            return (0, B.set)(e, 'active', !0);

          case iS: {
            let {
              payload: { step: t = pS },
            } = r;

            return (0, B.set)(e, 'tick', e.tick + t);
          }

          case oS:
            return Qc;

          case uS: {
            let {
              payload: { now: t },
            } = r;

            return (0, B.set)(e, 'tick', t);
          }

          case aS: {
            let t = (0, B.addLast)(e.eventListeners, r.payload);

            return (0, B.set)(e, 'eventListeners', t);
          }

          case sS: {
            let { stateKey: t, newState: n } = r.payload;

            return (0, B.setIn)(e, ['eventState', t], n);
          }

          case cS: {
            let { actionListId: t, isPlaying: n } = r.payload;

            return (0, B.setIn)(e, ['playbackState', t], n);
          }

          case lS: {
            let { width: t, mediaQueries: n } = r.payload,
              i = n.length,
              o = null;

            for (let a = 0; a < i; a++) {
              let { key: s, min: c, max: l } = n[a];

              if (t >= c && t <= l) {
                o = s;
                break;
              }
            }

            return (0, B.merge)(e, { mediaQueryKey: o, viewportWidth: t });
          }

          case fS:
            return (0, B.set)(e, 'hasDefinedMediaQueries', !0);
          default:
            return e;
        }
      });
  });

var rl = u((aX, el) => {
  function dS() {
    (this.__data__ = []), (this.size = 0);
  }

  el.exports = dS;
});

var Et = u((sX, tl) => {
  function ES(e, r) {
    return e === r || (e !== e && r !== r);
  }

  tl.exports = ES;
});

var hr = u((uX, nl) => {
  var gS = Et();

  function yS(e, r) {
    for (var t = e.length; t--; ) if (gS(e[t][0], r)) return t;
    return -1;
  }

  nl.exports = yS;
});

var ol = u((cX, il) => {
  var vS = hr(),
    _S = Array.prototype,
    IS = _S.splice;

  function TS(e) {
    var r = this.__data__,
      t = vS(r, e);

    if (t < 0) return !1;

    var n = r.length - 1;

    return t == n ? r.pop() : IS.call(r, t, 1), --this.size, !0;
  }

  il.exports = TS;
});

var sl = u((lX, al) => {
  var hS = hr();

  function mS(e) {
    var r = this.__data__,
      t = hS(r, e);

    return t < 0 ? void 0 : r[t][1];
  }

  al.exports = mS;
});

var cl = u((fX, ul) => {
  var OS = hr();

  function AS(e) {
    return OS(this.__data__, e) > -1;
  }

  ul.exports = AS;
});

var fl = u((pX, ll) => {
  var SS = hr();

  function bS(e, r) {
    var t = this.__data__,
      n = SS(t, e);

    return n < 0 ? (++this.size, t.push([e, r])) : (t[n][1] = r), this;
  }

  ll.exports = bS;
});

var mr = u((dX, pl) => {
  var xS = rl(),
    RS = ol(),
    CS = sl(),
    NS = cl(),
    PS = fl();

  function He(e) {
    var r = -1,
      t = e == null ? 0 : e.length;

    for (this.clear(); ++r < t; ) {
      var n = e[r];

      this.set(n[0], n[1]);
    }
  }

  He.prototype.clear = xS;
  He.prototype.delete = RS;
  He.prototype.get = CS;
  He.prototype.has = NS;
  He.prototype.set = PS;
  pl.exports = He;
});

var El = u((EX, dl) => {
  var qS = mr();

  function LS() {
    (this.__data__ = new qS()), (this.size = 0);
  }

  dl.exports = LS;
});

var yl = u((gX, gl) => {
  function MS(e) {
    var r = this.__data__,
      t = r.delete(e);

    return (this.size = r.size), t;
  }

  gl.exports = MS;
});

var _l = u((yX, vl) => {
  function wS(e) {
    return this.__data__.get(e);
  }

  vl.exports = wS;
});

var Tl = u((vX, Il) => {
  function DS(e) {
    return this.__data__.has(e);
  }

  Il.exports = DS;
});

var se = u((_X, hl) => {
  function FS(e) {
    var r = typeof e;

    return e != null && (r == 'object' || r == 'function');
  }

  hl.exports = FS;
});

var Oi = u((IX, ml) => {
  var GS = Te(),
    VS = se(),
    US = '[object AsyncFunction]',
    XS = '[object Function]',
    HS = '[object GeneratorFunction]',
    BS = '[object Proxy]';

  function jS(e) {
    if (!VS(e)) return !1;

    var r = GS(e);

    return r == XS || r == HS || r == US || r == BS;
  }

  ml.exports = jS;
});

var Al = u((TX, Ol) => {
  var WS = ee(),
    KS = WS['__core-js_shared__'];

  Ol.exports = KS;
});

var xl = u((hX, bl) => {
  var Ai = Al(),
    Sl = (function () {
      var e = /[^.]+$/.exec((Ai && Ai.keys && Ai.keys.IE_PROTO) || '');

      return e ? 'Symbol(src)_1.' + e : '';
    })();

  function YS(e) {
    return !!Sl && Sl in e;
  }

  bl.exports = YS;
});

var Si = u((mX, Rl) => {
  var zS = Function.prototype,
    kS = zS.toString;

  function $S(e) {
    if (e != null) {
      try {
        return kS.call(e);
      } catch {}

      try {
        return e + '';
      } catch {}
    }

    return '';
  }

  Rl.exports = $S;
});

var Nl = u((OX, Cl) => {
  var QS = Oi(),
    ZS = xl(),
    JS = se(),
    eb = Si(),
    rb = /[\\^$.*+?()[\]{}|]/g,
    tb = /^\[object .+?Constructor\]$/,
    nb = Function.prototype,
    ib = Object.prototype,
    ob = nb.toString,
    ab = ib.hasOwnProperty,
    sb = RegExp(
      '^' +
        ob
          .call(ab)
          .replace(rb, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$',
    );

  function ub(e) {
    if (!JS(e) || ZS(e)) return !1;

    var r = QS(e) ? sb : tb;

    return r.test(eb(e));
  }

  Cl.exports = ub;
});

var ql = u((AX, Pl) => {
  function cb(e, r) {
    return e?.[r];
  }

  Pl.exports = cb;
});

var he = u((SX, Ll) => {
  var lb = Nl(),
    fb = ql();

  function pb(e, r) {
    var t = fb(e, r);

    return lb(t) ? t : void 0;
  }

  Ll.exports = pb;
});

var gt = u((bX, Ml) => {
  var db = he(),
    Eb = ee(),
    gb = db(Eb, 'Map');

  Ml.exports = gb;
});

var Or = u((xX, wl) => {
  var yb = he(),
    vb = yb(Object, 'create');

  wl.exports = vb;
});

var Gl = u((RX, Fl) => {
  var Dl = Or();

  function _b() {
    (this.__data__ = Dl ? Dl(null) : {}), (this.size = 0);
  }

  Fl.exports = _b;
});

var Ul = u((CX, Vl) => {
  function Ib(e) {
    var r = this.has(e) && delete this.__data__[e];

    return (this.size -= r ? 1 : 0), r;
  }

  Vl.exports = Ib;
});

var Hl = u((NX, Xl) => {
  var Tb = Or(),
    hb = '__lodash_hash_undefined__',
    mb = Object.prototype,
    Ob = mb.hasOwnProperty;

  function Ab(e) {
    var r = this.__data__;

    if (Tb) {
      var t = r[e];

      return t === hb ? void 0 : t;
    }

    return Ob.call(r, e) ? r[e] : void 0;
  }

  Xl.exports = Ab;
});

var jl = u((PX, Bl) => {
  var Sb = Or(),
    bb = Object.prototype,
    xb = bb.hasOwnProperty;

  function Rb(e) {
    var r = this.__data__;

    return Sb ? r[e] !== void 0 : xb.call(r, e);
  }

  Bl.exports = Rb;
});

var Kl = u((qX, Wl) => {
  var Cb = Or(),
    Nb = '__lodash_hash_undefined__';

  function Pb(e, r) {
    var t = this.__data__;

    return (this.size += this.has(e) ? 0 : 1), (t[e] = Cb && r === void 0 ? Nb : r), this;
  }

  Wl.exports = Pb;
});

var zl = u((LX, Yl) => {
  var qb = Gl(),
    Lb = Ul(),
    Mb = Hl(),
    wb = jl(),
    Db = Kl();

  function Be(e) {
    var r = -1,
      t = e == null ? 0 : e.length;

    for (this.clear(); ++r < t; ) {
      var n = e[r];

      this.set(n[0], n[1]);
    }
  }

  Be.prototype.clear = qb;
  Be.prototype.delete = Lb;
  Be.prototype.get = Mb;
  Be.prototype.has = wb;
  Be.prototype.set = Db;
  Yl.exports = Be;
});

var Ql = u((MX, $l) => {
  var kl = zl(),
    Fb = mr(),
    Gb = gt();

  function Vb() {
    (this.size = 0),
      (this.__data__ = {
        hash: new kl(),
        map: new (Gb || Fb)(),
        string: new kl(),
      });
  }

  $l.exports = Vb;
});

var Jl = u((wX, Zl) => {
  function Ub(e) {
    var r = typeof e;

    return r == 'string' || r == 'number' || r == 'symbol' || r == 'boolean' ? e !== '__proto__' : e === null;
  }

  Zl.exports = Ub;
});

var Ar = u((DX, ef) => {
  var Xb = Jl();

  function Hb(e, r) {
    var t = e.__data__;

    return Xb(r) ? t[typeof r === 'string' ? 'string' : 'hash'] : t.map;
  }

  ef.exports = Hb;
});

var tf = u((FX, rf) => {
  var Bb = Ar();

  function jb(e) {
    var r = Bb(this, e).delete(e);

    return (this.size -= r ? 1 : 0), r;
  }

  rf.exports = jb;
});

var of = u((GX, nf) => {
  var Wb = Ar();

  function Kb(e) {
    return Wb(this, e).get(e);
  }

  nf.exports = Kb;
});

var sf = u((VX, af) => {
  var Yb = Ar();

  function zb(e) {
    return Yb(this, e).has(e);
  }

  af.exports = zb;
});

var cf = u((UX, uf) => {
  var kb = Ar();

  function $b(e, r) {
    var t = kb(this, e),
      n = t.size;

    return t.set(e, r), (this.size += t.size == n ? 0 : 1), this;
  }

  uf.exports = $b;
});

var yt = u((XX, lf) => {
  var Qb = Ql(),
    Zb = tf(),
    Jb = of(),
    ex = sf(),
    rx = cf();

  function je(e) {
    var r = -1,
      t = e == null ? 0 : e.length;

    for (this.clear(); ++r < t; ) {
      var n = e[r];

      this.set(n[0], n[1]);
    }
  }

  je.prototype.clear = Qb;
  je.prototype.delete = Zb;
  je.prototype.get = Jb;
  je.prototype.has = ex;
  je.prototype.set = rx;
  lf.exports = je;
});

var pf = u((HX, ff) => {
  var tx = mr(),
    nx = gt(),
    ix = yt(),
    ox = 200;

  function ax(e, r) {
    var t = this.__data__;

    if (t instanceof tx) {
      var n = t.__data__;

      if (!nx || n.length < ox - 1) return n.push([e, r]), (this.size = ++t.size), this;
      t = this.__data__ = new ix(n);
    }

    return t.set(e, r), (this.size = t.size), this;
  }

  ff.exports = ax;
});

var bi = u((BX, df) => {
  var sx = mr(),
    ux = El(),
    cx = yl(),
    lx = _l(),
    fx = Tl(),
    px = pf();

  function We(e) {
    var r = (this.__data__ = new sx(e));

    this.size = r.size;
  }

  We.prototype.clear = ux;
  We.prototype.delete = cx;
  We.prototype.get = lx;
  We.prototype.has = fx;
  We.prototype.set = px;
  df.exports = We;
});

var gf = u((jX, Ef) => {
  var dx = '__lodash_hash_undefined__';

  function Ex(e) {
    return this.__data__.set(e, dx), this;
  }

  Ef.exports = Ex;
});

var vf = u((WX, yf) => {
  function gx(e) {
    return this.__data__.has(e);
  }

  yf.exports = gx;
});

var If = u((KX, _f) => {
  var yx = yt(),
    vx = gf(),
    _x = vf();

  function vt(e) {
    var r = -1,
      t = e == null ? 0 : e.length;

    for (this.__data__ = new yx(); ++r < t; ) this.add(e[r]);
  }

  vt.prototype.add = vt.prototype.push = vx;
  vt.prototype.has = _x;
  _f.exports = vt;
});

var hf = u((YX, Tf) => {
  function Ix(e, r) {
    for (var t = -1, n = e == null ? 0 : e.length; ++t < n; ) if (r(e[t], t, e)) return !0;
    return !1;
  }

  Tf.exports = Ix;
});

var Of = u((zX, mf) => {
  function Tx(e, r) {
    return e.has(r);
  }

  mf.exports = Tx;
});

var xi = u((kX, Af) => {
  var hx = If(),
    mx = hf(),
    Ox = Of(),
    Ax = 1,
    Sx = 2;

  function bx(e, r, t, n, i, o) {
    var a = t & Ax,
      s = e.length,
      c = r.length;

    if (s != c && !(a && c > s)) return !1;

    var l = o.get(e),
      f = o.get(r);

    if (l && f) return l == r && f == e;

    var p = -1,
      d = !0,
      y = t & Sx ? new hx() : void 0;

    for (o.set(e, r), o.set(r, e); ++p < s; ) {
      var g = e[p],
        E = r[p];

      if (n) var I = a ? n(E, g, p, r, e, o) : n(g, E, p, e, r, o);

      if (I !== void 0) {
        if (I) continue;
        d = !1;
        break;
      }

      if (y) {
        if (
          !mx(r, function (v, T) {
            if (!Ox(y, T) && (g === v || i(g, v, t, n, o))) return y.push(T);
          })
        ) {
          d = !1;
          break;
        }
      } else if (!(g === E || i(g, E, t, n, o))) {
        d = !1;
        break;
      }
    }

    return o.delete(e), o.delete(r), d;
  }

  Af.exports = bx;
});

var bf = u(($X, Sf) => {
  var xx = ee(),
    Rx = xx.Uint8Array;

  Sf.exports = Rx;
});

var Rf = u((QX, xf) => {
  function Cx(e) {
    var r = -1,
      t = Array(e.size);

    return (
      e.forEach(function (n, i) {
        t[++r] = [i, n];
      }),
      t
    );
  }

  xf.exports = Cx;
});

var Nf = u((ZX, Cf) => {
  function Nx(e) {
    var r = -1,
      t = Array(e.size);

    return (
      e.forEach(function (n) {
        t[++r] = n;
      }),
      t
    );
  }

  Cf.exports = Nx;
});

var wf = u((JX, Mf) => {
  var Pf = Ge(),
    qf = bf(),
    Px = Et(),
    qx = xi(),
    Lx = Rf(),
    Mx = Nf(),
    wx = 1,
    Dx = 2,
    Fx = '[object Boolean]',
    Gx = '[object Date]',
    Vx = '[object Error]',
    Ux = '[object Map]',
    Xx = '[object Number]',
    Hx = '[object RegExp]',
    Bx = '[object Set]',
    jx = '[object String]',
    Wx = '[object Symbol]',
    Kx = '[object ArrayBuffer]',
    Yx = '[object DataView]',
    Lf = Pf ? Pf.prototype : void 0,
    Ri = Lf ? Lf.valueOf : void 0;

  function zx(e, r, t, n, i, o, a) {
    switch (t) {
      case Yx:
        if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset) return !1;
        (e = e.buffer), (r = r.buffer);
      case Kx:
        return !(e.byteLength != r.byteLength || !o(new qf(e), new qf(r)));
      case Fx:
      case Gx:
      case Xx:
        return Px(+e, +r);
      case Vx:
        return e.name == r.name && e.message == r.message;
      case Hx:
      case jx:
        return e == r + '';
      case Ux:
        var s = Lx;
      case Bx:
        var c = n & wx;

        if ((s || (s = Mx), e.size != r.size && !c)) return !1;

        var l = a.get(e);

        if (l) return l == r;
        (n |= Dx), a.set(e, r);

        var f = qx(s(e), s(r), n, i, o, a);

        return a.delete(e), f;
      case Wx:
        if (Ri) return Ri.call(e) == Ri.call(r);
    }

    return !1;
  }

  Mf.exports = zx;
});

var _t = u((eH, Df) => {
  function kx(e, r) {
    for (var t = -1, n = r.length, i = e.length; ++t < n; ) e[i + t] = r[t];
    return e;
  }

  Df.exports = kx;
});

var V = u((rH, Ff) => {
  var $x = Array.isArray;

  Ff.exports = $x;
});

var Ci = u((tH, Gf) => {
  var Qx = _t(),
    Zx = V();

  function Jx(e, r, t) {
    var n = r(e);

    return Zx(e) ? n : Qx(n, t(e));
  }

  Gf.exports = Jx;
});

var Uf = u((nH, Vf) => {
  function eR(e, r) {
    for (var t = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++t < n; ) {
      var a = e[t];

      r(a, t, e) && (o[i++] = a);
    }

    return o;
  }

  Vf.exports = eR;
});

var Ni = u((iH, Xf) => {
  function rR() {
    return [];
  }

  Xf.exports = rR;
});

var Pi = u((oH, Bf) => {
  var tR = Uf(),
    nR = Ni(),
    iR = Object.prototype,
    oR = iR.propertyIsEnumerable,
    Hf = Object.getOwnPropertySymbols,
    aR = Hf
      ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              tR(Hf(e), function (r) {
                return oR.call(e, r);
              }));
        }
      : nR;

  Bf.exports = aR;
});

var Wf = u((aH, jf) => {
  function sR(e, r) {
    for (var t = -1, n = Array(e); ++t < e; ) n[t] = r(t);
    return n;
  }

  jf.exports = sR;
});

var Yf = u((sH, Kf) => {
  var uR = Te(),
    cR = pe(),
    lR = '[object Arguments]';

  function fR(e) {
    return cR(e) && uR(e) == lR;
  }

  Kf.exports = fR;
});

var Sr = u((uH, $f) => {
  var zf = Yf(),
    pR = pe(),
    kf = Object.prototype,
    dR = kf.hasOwnProperty,
    ER = kf.propertyIsEnumerable,
    gR = zf(
      (function () {
        return arguments;
      })(),
    )
      ? zf
      : function (e) {
          return pR(e) && dR.call(e, 'callee') && !ER.call(e, 'callee');
        };

  $f.exports = gR;
});

var Zf = u((cH, Qf) => {
  function yR() {
    return !1;
  }

  Qf.exports = yR;
});

var It = u((br, Ke) => {
  var vR = ee(),
    _R = Zf(),
    rp = typeof br === 'object' && br && !br.nodeType && br,
    Jf = rp && typeof Ke === 'object' && Ke && !Ke.nodeType && Ke,
    IR = Jf && Jf.exports === rp,
    ep = IR ? vR.Buffer : void 0,
    TR = ep ? ep.isBuffer : void 0,
    hR = TR || _R;

  Ke.exports = hR;
});

var Tt = u((lH, tp) => {
  var mR = 9007199254740991,
    OR = /^(?:0|[1-9]\d*)$/;

  function AR(e, r) {
    var t = typeof e;

    return (
      (r = r ?? mR), !!r && (t == 'number' || (t != 'symbol' && OR.test(e))) && e > -1 && e % 1 == 0 && e < r
    );
  }

  tp.exports = AR;
});

var ht = u((fH, np) => {
  var SR = 9007199254740991;

  function bR(e) {
    return typeof e === 'number' && e > -1 && e % 1 == 0 && e <= SR;
  }

  np.exports = bR;
});

var op = u((pH, ip) => {
  var xR = Te(),
    RR = ht(),
    CR = pe(),
    NR = '[object Arguments]',
    PR = '[object Array]',
    qR = '[object Boolean]',
    LR = '[object Date]',
    MR = '[object Error]',
    wR = '[object Function]',
    DR = '[object Map]',
    FR = '[object Number]',
    GR = '[object Object]',
    VR = '[object RegExp]',
    UR = '[object Set]',
    XR = '[object String]',
    HR = '[object WeakMap]',
    BR = '[object ArrayBuffer]',
    jR = '[object DataView]',
    WR = '[object Float32Array]',
    KR = '[object Float64Array]',
    YR = '[object Int8Array]',
    zR = '[object Int16Array]',
    kR = '[object Int32Array]',
    $R = '[object Uint8Array]',
    QR = '[object Uint8ClampedArray]',
    ZR = '[object Uint16Array]',
    JR = '[object Uint32Array]',
    q = {};

  q[WR] = q[KR] = q[YR] = q[zR] = q[kR] = q[$R] = q[QR] = q[ZR] = q[JR] = !0;

  q[NR] =
    q[PR] =
    q[BR] =
    q[qR] =
    q[jR] =
    q[LR] =
    q[MR] =
    q[wR] =
    q[DR] =
    q[FR] =
    q[GR] =
    q[VR] =
    q[UR] =
    q[XR] =
    q[HR] =
      !1;

  function eC(e) {
    return CR(e) && RR(e.length) && !!q[xR(e)];
  }

  ip.exports = eC;
});

var sp = u((dH, ap) => {
  function rC(e) {
    return function (r) {
      return e(r);
    };
  }

  ap.exports = rC;
});

var cp = u((xr, Ye) => {
  var tC = ni(),
    up = typeof xr === 'object' && xr && !xr.nodeType && xr,
    Rr = up && typeof Ye === 'object' && Ye && !Ye.nodeType && Ye,
    nC = Rr && Rr.exports === up,
    qi = nC && tC.process,
    iC = (function () {
      try {
        var e = Rr && Rr.require && Rr.require('util').types;

        return e || (qi && qi.binding && qi.binding('util'));
      } catch {}
    })();

  Ye.exports = iC;
});

var mt = u((EH, pp) => {
  var oC = op(),
    aC = sp(),
    lp = cp(),
    fp = lp && lp.isTypedArray,
    sC = fp ? aC(fp) : oC;

  pp.exports = sC;
});

var Li = u((gH, dp) => {
  var uC = Wf(),
    cC = Sr(),
    lC = V(),
    fC = It(),
    pC = Tt(),
    dC = mt(),
    EC = Object.prototype,
    gC = EC.hasOwnProperty;

  function yC(e, r) {
    var t = lC(e),
      n = !t && cC(e),
      i = !t && !n && fC(e),
      o = !t && !n && !i && dC(e),
      a = t || n || i || o,
      s = a ? uC(e.length, String) : [],
      c = s.length;

    for (var l in e)
      (r || gC.call(e, l)) &&
        !(
          a &&
          (l == 'length' ||
            (i && (l == 'offset' || l == 'parent')) ||
            (o && (l == 'buffer' || l == 'byteLength' || l == 'byteOffset')) ||
            pC(l, c))
        ) &&
        s.push(l);
    return s;
  }

  dp.exports = yC;
});

var Ot = u((yH, Ep) => {
  var vC = Object.prototype;

  function _C(e) {
    var r = e && e.constructor,
      t = (typeof r === 'function' && r.prototype) || vC;

    return e === t;
  }

  Ep.exports = _C;
});

var yp = u((vH, gp) => {
  var IC = ii(),
    TC = IC(Object.keys, Object);

  gp.exports = TC;
});

var At = u((_H, vp) => {
  var hC = Ot(),
    mC = yp(),
    OC = Object.prototype,
    AC = OC.hasOwnProperty;

  function SC(e) {
    if (!hC(e)) return mC(e);

    var r = [];

    for (var t in Object(e)) AC.call(e, t) && t != 'constructor' && r.push(t);
    return r;
  }

  vp.exports = SC;
});

var Re = u((IH, _p) => {
  var bC = Oi(),
    xC = ht();

  function RC(e) {
    return e != null && xC(e.length) && !bC(e);
  }

  _p.exports = RC;
});

var Cr = u((TH, Ip) => {
  var CC = Li(),
    NC = At(),
    PC = Re();

  function qC(e) {
    return PC(e) ? CC(e) : NC(e);
  }

  Ip.exports = qC;
});

var hp = u((hH, Tp) => {
  var LC = Ci(),
    MC = Pi(),
    wC = Cr();

  function DC(e) {
    return LC(e, wC, MC);
  }

  Tp.exports = DC;
});

var Ap = u((mH, Op) => {
  var mp = hp(),
    FC = 1,
    GC = Object.prototype,
    VC = GC.hasOwnProperty;

  function UC(e, r, t, n, i, o) {
    var a = t & FC,
      s = mp(e),
      c = s.length,
      l = mp(r),
      f = l.length;

    if (c != f && !a) return !1;

    for (var p = c; p--; ) {
      var d = s[p];

      if (!(a ? d in r : VC.call(r, d))) return !1;
    }

    var y = o.get(e),
      g = o.get(r);

    if (y && g) return y == r && g == e;

    var E = !0;

    o.set(e, r), o.set(r, e);

    for (var I = a; ++p < c; ) {
      d = s[p];

      var v = e[d],
        T = r[d];

      if (n) var m = a ? n(T, v, d, r, e, o) : n(v, T, d, e, r, o);

      if (!(m === void 0 ? v === T || i(v, T, t, n, o) : m)) {
        E = !1;
        break;
      }

      I || (I = d == 'constructor');
    }

    if (E && !I) {
      var h = e.constructor,
        b = r.constructor;

      h != b &&
        'constructor' in e &&
        'constructor' in r &&
        !(typeof h === 'function' && h instanceof h && typeof b === 'function' && b instanceof b) &&
        (E = !1);
    }

    return o.delete(e), o.delete(r), E;
  }

  Op.exports = UC;
});

var bp = u((OH, Sp) => {
  var XC = he(),
    HC = ee(),
    BC = XC(HC, 'DataView');

  Sp.exports = BC;
});

var Rp = u((AH, xp) => {
  var jC = he(),
    WC = ee(),
    KC = jC(WC, 'Promise');

  xp.exports = KC;
});

var Np = u((SH, Cp) => {
  var YC = he(),
    zC = ee(),
    kC = YC(zC, 'Set');

  Cp.exports = kC;
});

var Mi = u((bH, Pp) => {
  var $C = he(),
    QC = ee(),
    ZC = $C(QC, 'WeakMap');

  Pp.exports = ZC;
});

var St = u((xH, Gp) => {
  var wi = bp(),
    Di = gt(),
    Fi = Rp(),
    Gi = Np(),
    Vi = Mi(),
    Fp = Te(),
    ze = Si(),
    qp = '[object Map]',
    JC = '[object Object]',
    Lp = '[object Promise]',
    Mp = '[object Set]',
    wp = '[object WeakMap]',
    Dp = '[object DataView]',
    eN = ze(wi),
    rN = ze(Di),
    tN = ze(Fi),
    nN = ze(Gi),
    iN = ze(Vi),
    Ce = Fp;

  ((wi && Ce(new wi(new ArrayBuffer(1))) != Dp) ||
    (Di && Ce(new Di()) != qp) ||
    (Fi && Ce(Fi.resolve()) != Lp) ||
    (Gi && Ce(new Gi()) != Mp) ||
    (Vi && Ce(new Vi()) != wp)) &&
    (Ce = function (e) {
      var r = Fp(e),
        t = r == JC ? e.constructor : void 0,
        n = t ? ze(t) : '';

      if (n)
        switch (n) {
          case eN:
            return Dp;
          case rN:
            return qp;
          case tN:
            return Lp;
          case nN:
            return Mp;
          case iN:
            return wp;
        }

      return r;
    });

  Gp.exports = Ce;
});

var Kp = u((RH, Wp) => {
  var Ui = bi(),
    oN = xi(),
    aN = wf(),
    sN = Ap(),
    Vp = St(),
    Up = V(),
    Xp = It(),
    uN = mt(),
    cN = 1,
    Hp = '[object Arguments]',
    Bp = '[object Array]',
    bt = '[object Object]',
    lN = Object.prototype,
    jp = lN.hasOwnProperty;

  function fN(e, r, t, n, i, o) {
    var a = Up(e),
      s = Up(r),
      c = a ? Bp : Vp(e),
      l = s ? Bp : Vp(r);

    (c = c == Hp ? bt : c), (l = l == Hp ? bt : l);

    var f = c == bt,
      p = l == bt,
      d = c == l;

    if (d && Xp(e)) {
      if (!Xp(r)) return !1;
      (a = !0), (f = !1);
    }

    if (d && !f) return o || (o = new Ui()), a || uN(e) ? oN(e, r, t, n, i, o) : aN(e, r, c, t, n, i, o);

    if (!(t & cN)) {
      var y = f && jp.call(e, '__wrapped__'),
        g = p && jp.call(r, '__wrapped__');

      if (y || g) {
        var E = y ? e.value() : e,
          I = g ? r.value() : r;

        return o || (o = new Ui()), i(E, I, t, n, o);
      }
    }

    return d ? (o || (o = new Ui()), sN(e, r, t, n, i, o)) : !1;
  }

  Wp.exports = fN;
});

var Xi = u((CH, kp) => {
  var pN = Kp(),
    Yp = pe();

  function zp(e, r, t, n, i) {
    return e === r
      ? !0
      : e == null || r == null || (!Yp(e) && !Yp(r))
        ? e !== e && r !== r
        : pN(e, r, t, n, zp, i);
  }

  kp.exports = zp;
});

var Qp = u((NH, $p) => {
  var dN = bi(),
    EN = Xi(),
    gN = 1,
    yN = 2;

  function vN(e, r, t, n) {
    var i = t.length,
      o = i,
      a = !n;

    if (e == null) return !o;

    for (e = Object(e); i--; ) {
      var s = t[i];

      if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
    }

    for (; ++i < o; ) {
      s = t[i];

      var c = s[0],
        l = e[c],
        f = s[1];

      if (a && s[2]) {
        if (l === void 0 && !(c in e)) return !1;
      } else {
        var p = new dN();

        if (n) var d = n(l, f, c, e, r, p);
        if (!(d === void 0 ? EN(f, l, gN | yN, n, p) : d)) return !1;
      }
    }

    return !0;
  }

  $p.exports = vN;
});

var Hi = u((PH, Zp) => {
  var _N = se();

  function IN(e) {
    return e === e && !_N(e);
  }

  Zp.exports = IN;
});

var ed = u((qH, Jp) => {
  var TN = Hi(),
    hN = Cr();

  function mN(e) {
    for (var r = hN(e), t = r.length; t--; ) {
      var n = r[t],
        i = e[n];

      r[t] = [n, i, TN(i)];
    }

    return r;
  }

  Jp.exports = mN;
});

var Bi = u((LH, rd) => {
  function ON(e, r) {
    return function (t) {
      return t == null ? !1 : t[e] === r && (r !== void 0 || e in Object(t));
    };
  }

  rd.exports = ON;
});

var nd = u((MH, td) => {
  var AN = Qp(),
    SN = ed(),
    bN = Bi();

  function xN(e) {
    var r = SN(e);

    return r.length == 1 && r[0][2]
      ? bN(r[0][0], r[0][1])
      : function (t) {
          return t === e || AN(t, e, r);
        };
  }

  td.exports = xN;
});

var Nr = u((wH, id) => {
  var RN = Te(),
    CN = pe(),
    NN = '[object Symbol]';

  function PN(e) {
    return typeof e === 'symbol' || (CN(e) && RN(e) == NN);
  }

  id.exports = PN;
});

var xt = u((DH, od) => {
  var qN = V(),
    LN = Nr(),
    MN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    wN = /^\w*$/;

  function DN(e, r) {
    if (qN(e)) return !1;

    var t = typeof e;

    return t == 'number' || t == 'symbol' || t == 'boolean' || e == null || LN(e)
      ? !0
      : wN.test(e) || !MN.test(e) || (r != null && e in Object(r));
  }

  od.exports = DN;
});

var ud = u((FH, sd) => {
  var ad = yt(),
    FN = 'Expected a function';

  function ji(e, r) {
    if (typeof e !== 'function' || (r != null && typeof r !== 'function')) throw new TypeError(FN);

    var t = function () {
      var n = arguments,
        i = r ? r.apply(this, n) : n[0],
        o = t.cache;

      if (o.has(i)) return o.get(i);

      var a = e.apply(this, n);

      return (t.cache = o.set(i, a) || o), a;
    };

    return (t.cache = new (ji.Cache || ad)()), t;
  }

  ji.Cache = ad;
  sd.exports = ji;
});

var ld = u((GH, cd) => {
  var GN = ud(),
    VN = 500;

  function UN(e) {
    var r = GN(e, function (n) {
        return t.size === VN && t.clear(), n;
      }),
      t = r.cache;

    return r;
  }

  cd.exports = UN;
});

var pd = u((VH, fd) => {
  var XN = ld(),
    HN = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    BN = /\\(\\)?/g,
    jN = XN(function (e) {
      var r = [];

      return (
        e.charCodeAt(0) === 46 && r.push(''),
        e.replace(HN, function (t, n, i, o) {
          r.push(i ? o.replace(BN, '$1') : n || t);
        }),
        r
      );
    });

  fd.exports = jN;
});

var Wi = u((UH, dd) => {
  function WN(e, r) {
    for (var t = -1, n = e == null ? 0 : e.length, i = Array(n); ++t < n; ) i[t] = r(e[t], t, e);
    return i;
  }

  dd.exports = WN;
});

var Id = u((XH, _d) => {
  var Ed = Ge(),
    KN = Wi(),
    YN = V(),
    zN = Nr(),
    kN = 1 / 0,
    gd = Ed ? Ed.prototype : void 0,
    yd = gd ? gd.toString : void 0;

  function vd(e) {
    if (typeof e === 'string') return e;
    if (YN(e)) return KN(e, vd) + '';
    if (zN(e)) return yd ? yd.call(e) : '';

    var r = e + '';

    return r == '0' && 1 / e == -kN ? '-0' : r;
  }

  _d.exports = vd;
});

var hd = u((HH, Td) => {
  var $N = Id();

  function QN(e) {
    return e == null ? '' : $N(e);
  }

  Td.exports = QN;
});

var Pr = u((BH, md) => {
  var ZN = V(),
    JN = xt(),
    eP = pd(),
    rP = hd();

  function tP(e, r) {
    return ZN(e) ? e : JN(e, r) ? [e] : eP(rP(e));
  }

  md.exports = tP;
});

var ke = u((jH, Od) => {
  var nP = Nr(),
    iP = 1 / 0;

  function oP(e) {
    if (typeof e === 'string' || nP(e)) return e;

    var r = e + '';

    return r == '0' && 1 / e == -iP ? '-0' : r;
  }

  Od.exports = oP;
});

var Rt = u((WH, Ad) => {
  var aP = Pr(),
    sP = ke();

  function uP(e, r) {
    r = aP(r, e);
    for (var t = 0, n = r.length; e != null && t < n; ) e = e[sP(r[t++])];
    return t && t == n ? e : void 0;
  }

  Ad.exports = uP;
});

var Ct = u((KH, Sd) => {
  var cP = Rt();

  function lP(e, r, t) {
    var n = e == null ? void 0 : cP(e, r);

    return n === void 0 ? t : n;
  }

  Sd.exports = lP;
});

var xd = u((YH, bd) => {
  function fP(e, r) {
    return e != null && r in Object(e);
  }

  bd.exports = fP;
});

var Cd = u((zH, Rd) => {
  var pP = Pr(),
    dP = Sr(),
    EP = V(),
    gP = Tt(),
    yP = ht(),
    vP = ke();

  function _P(e, r, t) {
    r = pP(r, e);

    for (var n = -1, i = r.length, o = !1; ++n < i; ) {
      var a = vP(r[n]);

      if (!(o = e != null && t(e, a))) break;
      e = e[a];
    }

    return o || ++n != i ? o : ((i = e == null ? 0 : e.length), !!i && yP(i) && gP(a, i) && (EP(e) || dP(e)));
  }

  Rd.exports = _P;
});

var Pd = u((kH, Nd) => {
  var IP = xd(),
    TP = Cd();

  function hP(e, r) {
    return e != null && TP(e, r, IP);
  }

  Nd.exports = hP;
});

var Ld = u(($H, qd) => {
  var mP = Xi(),
    OP = Ct(),
    AP = Pd(),
    SP = xt(),
    bP = Hi(),
    xP = Bi(),
    RP = ke(),
    CP = 1,
    NP = 2;

  function PP(e, r) {
    return SP(e) && bP(r)
      ? xP(RP(e), r)
      : function (t) {
          var n = OP(t, e);

          return n === void 0 && n === r ? AP(t, e) : mP(r, n, CP | NP);
        };
  }

  qd.exports = PP;
});

var Nt = u((QH, Md) => {
  function qP(e) {
    return e;
  }

  Md.exports = qP;
});

var Ki = u((ZH, wd) => {
  function LP(e) {
    return function (r) {
      return r?.[e];
    };
  }

  wd.exports = LP;
});

var Fd = u((JH, Dd) => {
  var MP = Rt();

  function wP(e) {
    return function (r) {
      return MP(r, e);
    };
  }

  Dd.exports = wP;
});

var Vd = u((eB, Gd) => {
  var DP = Ki(),
    FP = Fd(),
    GP = xt(),
    VP = ke();

  function UP(e) {
    return GP(e) ? DP(VP(e)) : FP(e);
  }

  Gd.exports = UP;
});

var me = u((rB, Ud) => {
  var XP = nd(),
    HP = Ld(),
    BP = Nt(),
    jP = V(),
    WP = Vd();

  function KP(e) {
    return typeof e === 'function'
      ? e
      : e == null
        ? BP
        : typeof e === 'object'
          ? jP(e)
            ? HP(e[0], e[1])
            : XP(e)
          : WP(e);
  }

  Ud.exports = KP;
});

var Yi = u((tB, Xd) => {
  var YP = me(),
    zP = Re(),
    kP = Cr();

  function $P(e) {
    return function (r, t, n) {
      var i = Object(r);

      if (!zP(r)) {
        var o = YP(t, 3);

        (r = kP(r)),
          (t = function (s) {
            return o(i[s], s, i);
          });
      }

      var a = e(r, t, n);

      return a > -1 ? i[o ? r[a] : a] : void 0;
    };
  }

  Xd.exports = $P;
});

var zi = u((nB, Hd) => {
  function QP(e, r, t, n) {
    for (var i = e.length, o = t + (n ? 1 : -1); n ? o-- : ++o < i; ) if (r(e[o], o, e)) return o;
    return -1;
  }

  Hd.exports = QP;
});

var jd = u((iB, Bd) => {
  var ZP = /\s/;

  function JP(e) {
    for (var r = e.length; r-- && ZP.test(e.charAt(r)); );
    return r;
  }

  Bd.exports = JP;
});

var Kd = u((oB, Wd) => {
  var eq = jd(),
    rq = /^\s+/;

  function tq(e) {
    return e && e.slice(0, eq(e) + 1).replace(rq, '');
  }

  Wd.exports = tq;
});

var Pt = u((aB, kd) => {
  var nq = Kd(),
    Yd = se(),
    iq = Nr(),
    zd = 0 / 0,
    oq = /^[-+]0x[0-9a-f]+$/i,
    aq = /^0b[01]+$/i,
    sq = /^0o[0-7]+$/i,
    uq = parseInt;

  function cq(e) {
    if (typeof e === 'number') return e;
    if (iq(e)) return zd;

    if (Yd(e)) {
      var r = typeof e.valueOf === 'function' ? e.valueOf() : e;

      e = Yd(r) ? r + '' : r;
    }

    if (typeof e !== 'string') return e === 0 ? e : +e;
    e = nq(e);

    var t = aq.test(e);

    return t || sq.test(e) ? uq(e.slice(2), t ? 2 : 8) : oq.test(e) ? zd : +e;
  }

  kd.exports = cq;
});

var Zd = u((sB, Qd) => {
  var lq = Pt(),
    $d = 1 / 0,
    fq = 17976931348623157e292;

  function pq(e) {
    if (!e) return e === 0 ? e : 0;

    if (((e = lq(e)), e === $d || e === -$d)) {
      var r = e < 0 ? -1 : 1;

      return r * fq;
    }

    return e === e ? e : 0;
  }

  Qd.exports = pq;
});

var ki = u((uB, Jd) => {
  var dq = Zd();

  function Eq(e) {
    var r = dq(e),
      t = r % 1;

    return r === r ? (t ? r - t : r) : 0;
  }

  Jd.exports = Eq;
});

var rE = u((cB, eE) => {
  var gq = zi(),
    yq = me(),
    vq = ki(),
    _q = Math.max;

  function Iq(e, r, t) {
    var n = e == null ? 0 : e.length;

    if (!n) return -1;

    var i = t == null ? 0 : vq(t);

    return i < 0 && (i = _q(n + i, 0)), gq(e, yq(r, 3), i);
  }

  eE.exports = Iq;
});

var $i = u((lB, tE) => {
  var Tq = Yi(),
    hq = rE(),
    mq = Tq(hq);

  tE.exports = mq;
});

var oE = {};

K(oE, {
  ELEMENT_MATCHES: () => Oq,
  FLEX_PREFIXED: () => Qi,
  IS_BROWSER_ENV: () => te,
  TRANSFORM_PREFIXED: () => Oe,
  TRANSFORM_STYLE_PREFIXED: () => Lt,
  withBrowser: () => qt,
});

var iE,
  te,
  qt,
  Oq,
  Qi,
  Oe,
  nE,
  Lt,
  Mt = L(() => {
    'use strict';

    (iE = C($i())),
      (te = typeof window < 'u'),
      (qt = (e, r) => (te ? e() : r)),
      (Oq = qt(() =>
        (0, iE.default)(
          [
            'matches',
            'matchesSelector',
            'mozMatchesSelector',
            'msMatchesSelector',
            'oMatchesSelector',
            'webkitMatchesSelector',
          ],
          (e) => e in Element.prototype,
        ),
      )),
      (Qi = qt(() => {
        let e = document.createElement('i'),
          r = ['flex', '-webkit-flex', '-ms-flexbox', '-moz-box', '-webkit-box'],
          t = '';

        try {
          let { length: n } = r;

          for (let i = 0; i < n; i++) {
            let o = r[i];

            if (((e.style.display = o), e.style.display === o)) return o;
          }

          return t;
        } catch {
          return t;
        }
      }, 'flex')),
      (Oe = qt(() => {
        let e = document.createElement('i');

        if (e.style.transform == null) {
          let r = ['Webkit', 'Moz', 'ms'],
            t = 'Transform',
            { length: n } = r;

          for (let i = 0; i < n; i++) {
            let o = r[i] + t;

            if (e.style[o] !== void 0) return o;
          }
        }

        return 'transform';
      }, 'transform')),
      (nE = Oe.split('transform')[0]),
      (Lt = nE ? nE + 'TransformStyle' : 'transformStyle');
  });

var Zi = u((fB, lE) => {
  var Aq = 4,
    Sq = 0.001,
    bq = 1e-7,
    xq = 10,
    qr = 11,
    wt = 1 / (qr - 1),
    Rq = typeof Float32Array === 'function';

  function aE(e, r) {
    return 1 - 3 * r + 3 * e;
  }

  function sE(e, r) {
    return 3 * r - 6 * e;
  }

  function uE(e) {
    return 3 * e;
  }

  function Dt(e, r, t) {
    return ((aE(r, t) * e + sE(r, t)) * e + uE(r)) * e;
  }

  function cE(e, r, t) {
    return 3 * aE(r, t) * e * e + 2 * sE(r, t) * e + uE(r);
  }

  function Cq(e, r, t, n, i) {
    var o,
      a,
      s = 0;

    do (a = r + (t - r) / 2), (o = Dt(a, n, i) - e), o > 0 ? (t = a) : (r = a);
    while (Math.abs(o) > bq && ++s < xq);
    return a;
  }

  function Nq(e, r, t, n) {
    for (var i = 0; i < Aq; ++i) {
      var o = cE(r, t, n);

      if (o === 0) return r;

      var a = Dt(r, t, n) - e;

      r -= a / o;
    }

    return r;
  }

  lE.exports = function (r, t, n, i) {
    if (!(0 <= r && r <= 1 && 0 <= n && n <= 1)) throw new Error('bezier x values must be in [0, 1] range');

    var o = Rq ? new Float32Array(qr) : new Array(qr);

    if (r !== t || n !== i) for (var a = 0; a < qr; ++a) o[a] = Dt(a * wt, r, n);

    function s(c) {
      for (var l = 0, f = 1, p = qr - 1; f !== p && o[f] <= c; ++f) l += wt;
      --f;

      var d = (c - o[f]) / (o[f + 1] - o[f]),
        y = l + d * wt,
        g = cE(y, r, n);

      return g >= Sq ? Nq(c, y, r, n) : g === 0 ? y : Cq(c, l, l + wt, r, n);
    }

    return function (l) {
      return r === t && n === i ? l : l === 0 ? 0 : l === 1 ? 1 : Dt(s(l), t, i);
    };
  };
});

var Mr = {};

K(Mr, {
  bounce: () => pL,
  bouncePast: () => dL,
  ease: () => Pq,
  easeIn: () => qq,
  easeInOut: () => Mq,
  easeOut: () => Lq,
  inBack: () => nL,
  inCirc: () => Jq,
  inCubic: () => Gq,
  inElastic: () => aL,
  inExpo: () => $q,
  inOutBack: () => oL,
  inOutCirc: () => rL,
  inOutCubic: () => Uq,
  inOutElastic: () => uL,
  inOutExpo: () => Zq,
  inOutQuad: () => Fq,
  inOutQuart: () => Bq,
  inOutQuint: () => Kq,
  inOutSine: () => kq,
  inQuad: () => wq,
  inQuart: () => Xq,
  inQuint: () => jq,
  inSine: () => Yq,
  outBack: () => iL,
  outBounce: () => tL,
  outCirc: () => eL,
  outCubic: () => Vq,
  outElastic: () => sL,
  outExpo: () => Qq,
  outQuad: () => Dq,
  outQuart: () => Hq,
  outQuint: () => Wq,
  outSine: () => zq,
  swingFrom: () => lL,
  swingFromTo: () => cL,
  swingTo: () => fL,
});

function wq(e) {
  return Math.pow(e, 2);
}

function Dq(e) {
  return -(Math.pow(e - 1, 2) - 1);
}

function Fq(e) {
  return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
}

function Gq(e) {
  return Math.pow(e, 3);
}

function Vq(e) {
  return Math.pow(e - 1, 3) + 1;
}

function Uq(e) {
  return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 3) : 0.5 * (Math.pow(e - 2, 3) + 2);
}

function Xq(e) {
  return Math.pow(e, 4);
}

function Hq(e) {
  return -(Math.pow(e - 1, 4) - 1);
}

function Bq(e) {
  return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 4) : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
}

function jq(e) {
  return Math.pow(e, 5);
}

function Wq(e) {
  return Math.pow(e - 1, 5) + 1;
}

function Kq(e) {
  return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 5) : 0.5 * (Math.pow(e - 2, 5) + 2);
}

function Yq(e) {
  return -Math.cos(e * (Math.PI / 2)) + 1;
}

function zq(e) {
  return Math.sin(e * (Math.PI / 2));
}

function kq(e) {
  return -0.5 * (Math.cos(Math.PI * e) - 1);
}

function $q(e) {
  return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
}

function Qq(e) {
  return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
}

function Zq(e) {
  return e === 0
    ? 0
    : e === 1
      ? 1
      : (e /= 0.5) < 1
        ? 0.5 * Math.pow(2, 10 * (e - 1))
        : 0.5 * (-Math.pow(2, -10 * --e) + 2);
}

function Jq(e) {
  return -(Math.sqrt(1 - e * e) - 1);
}

function eL(e) {
  return Math.sqrt(1 - Math.pow(e - 1, 2));
}

function rL(e) {
  return (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
}

function tL(e) {
  return e < 1 / 2.75
    ? 7.5625 * e * e
    : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
}

function nL(e) {
  let r = de;

  return e * e * ((r + 1) * e - r);
}

function iL(e) {
  let r = de;

  return (e -= 1) * e * ((r + 1) * e + r) + 1;
}

function oL(e) {
  let r = de;

  return (e /= 0.5) < 1
    ? 0.5 * (e * e * (((r *= 1.525) + 1) * e - r))
    : 0.5 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2);
}

function aL(e) {
  let r = de,
    t = 0,
    n = 1;

  return e === 0
    ? 0
    : e === 1
      ? 1
      : (t || (t = 0.3),
        n < 1 ? ((n = 1), (r = t / 4)) : (r = (t / (2 * Math.PI)) * Math.asin(1 / n)),
        -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - r) * (2 * Math.PI)) / t)));
}

function sL(e) {
  let r = de,
    t = 0,
    n = 1;

  return e === 0
    ? 0
    : e === 1
      ? 1
      : (t || (t = 0.3),
        n < 1 ? ((n = 1), (r = t / 4)) : (r = (t / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - r) * (2 * Math.PI)) / t) + 1);
}

function uL(e) {
  let r = de,
    t = 0,
    n = 1;

  return e === 0
    ? 0
    : (e /= 1 / 2) === 2
      ? 1
      : (t || (t = 0.3 * 1.5),
        n < 1 ? ((n = 1), (r = t / 4)) : (r = (t / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - r) * (2 * Math.PI)) / t))
          : n * Math.pow(2, -10 * (e -= 1)) * Math.sin(((e - r) * (2 * Math.PI)) / t) * 0.5 + 1);
}

function cL(e) {
  let r = de;

  return (e /= 0.5) < 1
    ? 0.5 * (e * e * (((r *= 1.525) + 1) * e - r))
    : 0.5 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2);
}

function lL(e) {
  let r = de;

  return e * e * ((r + 1) * e - r);
}

function fL(e) {
  let r = de;

  return (e -= 1) * e * ((r + 1) * e + r) + 1;
}

function pL(e) {
  return e < 1 / 2.75
    ? 7.5625 * e * e
    : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
}

function dL(e) {
  return e < 1 / 2.75
    ? 7.5625 * e * e
    : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
}

var Lr,
  de,
  Pq,
  qq,
  Lq,
  Mq,
  Ji = L(() => {
    'use strict';

    (Lr = C(Zi())),
      (de = 1.70158),
      (Pq = (0, Lr.default)(0.25, 0.1, 0.25, 1)),
      (qq = (0, Lr.default)(0.42, 0, 1, 1)),
      (Lq = (0, Lr.default)(0, 0, 0.58, 1)),
      (Mq = (0, Lr.default)(0.42, 0, 0.58, 1));
  });

var pE = {};

K(pE, {
  applyEasing: () => gL,
  createBezierEasing: () => EL,
  optimizeFloat: () => wr,
});

function wr(e, r = 5, t = 10) {
  let n = Math.pow(t, r),
    i = Number(Math.round(e * n) / n);

  return Math.abs(i) > 1e-4 ? i : 0;
}

function EL(e) {
  return (0, fE.default)(...e);
}

function gL(e, r, t) {
  return r === 0 ? 0 : r === 1 ? 1 : wr(t ? (r > 0 ? t(r) : r) : r > 0 && e && Mr[e] ? Mr[e](r) : r);
}

var fE,
  eo = L(() => {
    'use strict';
    Ji();
    fE = C(Zi());
  });

var gE = {};

K(gE, {
  createElementState: () => EE,
  ixElements: () => CL,
  mergeActionState: () => ro,
});

function EE(e, r, t, n, i) {
  let o = t === yL ? (0, $e.getIn)(i, ['config', 'target', 'objectId']) : null;

  return (0, $e.mergeIn)(e, [n], { id: n, ref: r, refId: o, refType: t });
}

function ro(e, r, t, n, i) {
  let o = PL(i);

  return (0, $e.mergeIn)(e, [r, RL, t], n, o);
}

function PL(e) {
  let { config: r } = e;

  return NL.reduce((t, n) => {
    let i = n[0],
      o = n[1],
      a = r[i],
      s = r[o];

    return a != null && s != null && (t[o] = s), t;
  }, {});
}

var $e,
  dB,
  yL,
  EB,
  vL,
  _L,
  IL,
  TL,
  hL,
  mL,
  OL,
  AL,
  SL,
  bL,
  xL,
  dE,
  RL,
  CL,
  NL,
  yE = L(() => {
    'use strict';
    $e = C(Xe());
    z();

    ({
      HTML_ELEMENT: dB,
      PLAIN_OBJECT: yL,
      ABSTRACT_NODE: EB,
      CONFIG_X_VALUE: vL,
      CONFIG_Y_VALUE: _L,
      CONFIG_Z_VALUE: IL,
      CONFIG_VALUE: TL,
      CONFIG_X_UNIT: hL,
      CONFIG_Y_UNIT: mL,
      CONFIG_Z_UNIT: OL,
      CONFIG_UNIT: AL,
    } = H),
      ({ IX2_SESSION_STOPPED: SL, IX2_INSTANCE_ADDED: bL, IX2_ELEMENT_STATE_CHANGED: xL } = F),
      (dE = {}),
      (RL = 'refState'),
      (CL = (e = dE, r = {}) => {
        switch (r.type) {
          case SL:
            return dE;

          case bL: {
            let { elementId: t, element: n, origin: i, actionItem: o, refType: a } = r.payload,
              { actionTypeId: s } = o,
              c = e;

            return (0, $e.getIn)(c, [t, n]) !== n && (c = EE(c, n, a, t, o)), ro(c, t, s, i, o);
          }

          case xL: {
            let { elementId: t, actionTypeId: n, current: i, actionItem: o } = r.payload;

            return ro(e, t, n, i, o);
          }

          default:
            return e;
        }
      });

    NL = [
      [vL, hL],
      [_L, mL],
      [IL, OL],
      [TL, AL],
    ];
  });

var vE = u((U) => {
  'use strict';
  Object.defineProperty(U, '__esModule', { value: !0 });

  U.renderPlugin =
    U.getPluginOrigin =
    U.getPluginDuration =
    U.getPluginDestination =
    U.getPluginConfig =
    U.createPluginInstance =
    U.clearPlugin =
      void 0;

  var qL = (e) => e.value;

  U.getPluginConfig = qL;

  var LL = (e, r) => {
    if (r.config.duration !== 'auto') return null;

    let t = parseFloat(e.getAttribute('data-duration'));

    return t > 0 ? t * 1e3 : parseFloat(e.getAttribute('data-default-duration')) * 1e3;
  };

  U.getPluginDuration = LL;

  var ML = (e) => e || { value: 0 };

  U.getPluginOrigin = ML;

  var wL = (e) => ({ value: e.value });

  U.getPluginDestination = wL;

  var DL = (e) => {
    let r = window.Webflow.require('lottie').createInstance(e);

    return r.stop(), r.setSubframe(!0), r;
  };

  U.createPluginInstance = DL;

  var FL = (e, r, t) => {
    if (!e) return;

    let n = r[t.actionTypeId].value / 100;

    e.goToFrame(e.frames * n);
  };

  U.renderPlugin = FL;

  var GL = (e) => {
    window.Webflow.require('lottie').createInstance(e).stop();
  };

  U.clearPlugin = GL;
});

var IE = u((X) => {
  'use strict';
  Object.defineProperty(X, '__esModule', { value: !0 });

  X.renderPlugin =
    X.getPluginOrigin =
    X.getPluginDuration =
    X.getPluginDestination =
    X.getPluginConfig =
    X.createPluginInstance =
    X.clearPlugin =
      void 0;

  var VL = (e) => document.querySelector(`[data-w-id="${e}"]`),
    UL = () => window.Webflow.require('spline'),
    XL = (e, r) => e.filter((t) => !r.includes(t)),
    HL = (e, r) => e.value[r];

  X.getPluginConfig = HL;

  var BL = () => null;

  X.getPluginDuration = BL;

  var _E = Object.freeze({
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,
    }),
    jL = (e, r) => {
      let t = r.config.value,
        n = Object.keys(t);

      if (e) {
        let o = Object.keys(e),
          a = XL(n, o);

        return a.length ? a.reduce((c, l) => ((c[l] = _E[l]), c), e) : e;
      }

      return n.reduce((o, a) => ((o[a] = _E[a]), o), {});
    };

  X.getPluginOrigin = jL;

  var WL = (e) => e.value;

  X.getPluginDestination = WL;

  var KL = (e, r) => {
    var t, n;

    let i =
      r == null || (t = r.config) === null || t === void 0 || (n = t.target) === null || n === void 0
        ? void 0
        : n.pluginElement;

    return i ? VL(i) : null;
  };

  X.createPluginInstance = KL;

  var YL = (e, r, t) => {
    let n = UL(),
      i = n.getInstance(e),
      o = t.config.target.objectId,
      a = (s) => {
        if (!s) throw new Error('Invalid spline app passed to renderSpline');

        let c = o && s.findObjectById(o);

        if (!c) return;

        let { PLUGIN_SPLINE: l } = r;

        l.positionX != null && (c.position.x = l.positionX),
          l.positionY != null && (c.position.y = l.positionY),
          l.positionZ != null && (c.position.z = l.positionZ),
          l.rotationX != null && (c.rotation.x = l.rotationX),
          l.rotationY != null && (c.rotation.y = l.rotationY),
          l.rotationZ != null && (c.rotation.z = l.rotationZ),
          l.scaleX != null && (c.scale.x = l.scaleX),
          l.scaleY != null && (c.scale.y = l.scaleY),
          l.scaleZ != null && (c.scale.z = l.scaleZ);
      };

    i ? a(i.spline) : n.setLoadHandler(e, a);
  };

  X.renderPlugin = YL;

  var zL = () => null;

  X.clearPlugin = zL;
});

var hE = u((G) => {
  'use strict';
  Object.defineProperty(G, '__esModule', { value: !0 });

  G.getPluginOrigin =
    G.getPluginDuration =
    G.getPluginDestination =
    G.getPluginConfig =
    G.createPluginInstance =
    G.clearPlugin =
      void 0;

  G.normalizeColor = TE;
  G.renderPlugin = void 0;

  function TE(e) {
    let r,
      t,
      n,
      i = 1,
      o = e.replace(/\s/g, '').toLowerCase();

    if (o.startsWith('#')) {
      let a = o.substring(1);

      a.length === 3
        ? ((r = parseInt(a[0] + a[0], 16)), (t = parseInt(a[1] + a[1], 16)), (n = parseInt(a[2] + a[2], 16)))
        : a.length === 6 &&
          ((r = parseInt(a.substring(0, 2), 16)),
          (t = parseInt(a.substring(2, 4), 16)),
          (n = parseInt(a.substring(4, 6), 16)));
    } else if (o.startsWith('rgba')) {
      let a = o.match(/rgba\(([^)]+)\)/)[1].split(',');

      (r = parseInt(a[0], 10)), (t = parseInt(a[1], 10)), (n = parseInt(a[2], 10)), (i = parseFloat(a[3]));
    } else if (o.startsWith('rgb')) {
      let a = o.match(/rgb\(([^)]+)\)/)[1].split(',');

      (r = parseInt(a[0], 10)), (t = parseInt(a[1], 10)), (n = parseInt(a[2], 10));
    } else if (o.startsWith('hsla')) {
      let a = o.match(/hsla\(([^)]+)\)/)[1].split(','),
        s = parseFloat(a[0]),
        c = parseFloat(a[1].replace('%', '')) / 100,
        l = parseFloat(a[2].replace('%', '')) / 100;

      i = parseFloat(a[3]);

      let f = (1 - Math.abs(2 * l - 1)) * c,
        p = f * (1 - Math.abs(((s / 60) % 2) - 1)),
        d = l - f / 2,
        y,
        g,
        E;

      s >= 0 && s < 60
        ? ((y = f), (g = p), (E = 0))
        : s >= 60 && s < 120
          ? ((y = p), (g = f), (E = 0))
          : s >= 120 && s < 180
            ? ((y = 0), (g = f), (E = p))
            : s >= 180 && s < 240
              ? ((y = 0), (g = p), (E = f))
              : s >= 240 && s < 300
                ? ((y = p), (g = 0), (E = f))
                : ((y = f), (g = 0), (E = p)),
        (r = Math.round((y + d) * 255)),
        (t = Math.round((g + d) * 255)),
        (n = Math.round((E + d) * 255));
    } else if (o.startsWith('hsl')) {
      let a = o.match(/hsl\(([^)]+)\)/)[1].split(','),
        s = parseFloat(a[0]),
        c = parseFloat(a[1].replace('%', '')) / 100,
        l = parseFloat(a[2].replace('%', '')) / 100,
        f = (1 - Math.abs(2 * l - 1)) * c,
        p = f * (1 - Math.abs(((s / 60) % 2) - 1)),
        d = l - f / 2,
        y,
        g,
        E;

      s >= 0 && s < 60
        ? ((y = f), (g = p), (E = 0))
        : s >= 60 && s < 120
          ? ((y = p), (g = f), (E = 0))
          : s >= 120 && s < 180
            ? ((y = 0), (g = f), (E = p))
            : s >= 180 && s < 240
              ? ((y = 0), (g = p), (E = f))
              : s >= 240 && s < 300
                ? ((y = p), (g = 0), (E = f))
                : ((y = f), (g = 0), (E = p)),
        (r = Math.round((y + d) * 255)),
        (t = Math.round((g + d) * 255)),
        (n = Math.round((E + d) * 255));
    }

    return (
      (Number.isNaN(r) || Number.isNaN(t) || Number.isNaN(n)) && `${e}`,
      { alpha: i, blue: n, green: t, red: r }
    );
  }

  var kL = (e, r) => e.value[r];

  G.getPluginConfig = kL;

  var $L = () => null;

  G.getPluginDuration = $L;

  var QL = (e, r) => {
    if (e) return e;

    let t = r.config.value,
      n = r.config.target.objectId,
      i = getComputedStyle(document.documentElement).getPropertyValue(n);

    if (t.size != null) return { size: parseInt(i, 10) };
    if (t.red != null && t.green != null && t.blue != null) return TE(i);
  };

  G.getPluginOrigin = QL;

  var ZL = (e) => e.value;

  G.getPluginDestination = ZL;

  var JL = () => null;

  G.createPluginInstance = JL;

  var eM = (e, r, t) => {
    let n = t.config.target.objectId,
      i = t.config.value.unit,
      { PLUGIN_VARIABLE: o } = r,
      { size: a, red: s, green: c, blue: l, alpha: f } = o,
      p;

    a != null && (p = a + i),
      s != null && l != null && c != null && f != null && (p = `rgba(${s}, ${c}, ${l}, ${f})`),
      p != null && document.documentElement.style.setProperty(n, p);
  };

  G.renderPlugin = eM;

  var rM = (e, r) => {
    let t = r.config.target.objectId;

    document.documentElement.style.removeProperty(t);
  };

  G.clearPlugin = rM;
});

var mE = u((Ft) => {
  'use strict';

  var no = zr().default;

  Object.defineProperty(Ft, '__esModule', { value: !0 });
  Ft.pluginMethodMap = void 0;

  var to = (z(), ie(xc)),
    tM = no(vE()),
    nM = no(IE()),
    iM = no(hE()),
    _B = (Ft.pluginMethodMap = new Map([
      [to.ActionTypeConsts.PLUGIN_LOTTIE, { ...tM }],
      [to.ActionTypeConsts.PLUGIN_SPLINE, { ...nM }],
      [to.ActionTypeConsts.PLUGIN_VARIABLE, { ...iM }],
    ]));
});

var OE = {};

K(OE, {
  clearPlugin: () => co,
  createPluginInstance: () => aM,
  getPluginConfig: () => oo,
  getPluginDestination: () => so,
  getPluginDuration: () => oM,
  getPluginOrigin: () => ao,
  isPluginType: () => Ne,
  renderPlugin: () => uo,
});

function Ne(e) {
  return io.pluginMethodMap.has(e);
}

var io,
  Pe,
  oo,
  ao,
  oM,
  so,
  aM,
  uo,
  co,
  lo = L(() => {
    'use strict';
    Mt();
    io = C(mE());

    (Pe = (e) => (r) => {
      if (!te) return () => null;

      let t = io.pluginMethodMap.get(r);

      if (!t) throw new Error(`IX2 no plugin configured for: ${r}`);

      let n = t[e];

      if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
      return n;
    }),
      (oo = Pe('getPluginConfig')),
      (ao = Pe('getPluginOrigin')),
      (oM = Pe('getPluginDuration')),
      (so = Pe('getPluginDestination')),
      (aM = Pe('createPluginInstance')),
      (uo = Pe('renderPlugin')),
      (co = Pe('clearPlugin'));
  });

var SE = u((hB, AE) => {
  function sM(e, r) {
    return e == null || e !== e ? r : e;
  }

  AE.exports = sM;
});

var xE = u((mB, bE) => {
  function uM(e, r, t, n) {
    var i = -1,
      o = e == null ? 0 : e.length;

    for (n && o && (t = e[++i]); ++i < o; ) t = r(t, e[i], i, e);
    return t;
  }

  bE.exports = uM;
});

var CE = u((OB, RE) => {
  function cM(e) {
    return function (r, t, n) {
      for (var i = -1, o = Object(r), a = n(r), s = a.length; s--; ) {
        var c = a[e ? s : ++i];

        if (t(o[c], c, o) === !1) break;
      }

      return r;
    };
  }

  RE.exports = cM;
});

var PE = u((AB, NE) => {
  var lM = CE(),
    fM = lM();

  NE.exports = fM;
});

var fo = u((SB, qE) => {
  var pM = PE(),
    dM = Cr();

  function EM(e, r) {
    return e && pM(e, r, dM);
  }

  qE.exports = EM;
});

var ME = u((bB, LE) => {
  var gM = Re();

  function yM(e, r) {
    return function (t, n) {
      if (t == null) return t;
      if (!gM(t)) return e(t, n);
      for (var i = t.length, o = r ? i : -1, a = Object(t); (r ? o-- : ++o < i) && n(a[o], o, a) !== !1; );
      return t;
    };
  }

  LE.exports = yM;
});

var po = u((xB, wE) => {
  var vM = fo(),
    _M = ME(),
    IM = _M(vM);

  wE.exports = IM;
});

var FE = u((RB, DE) => {
  function TM(e, r, t, n, i) {
    return (
      i(e, function (o, a, s) {
        t = n ? ((n = !1), o) : r(t, o, a, s);
      }),
      t
    );
  }

  DE.exports = TM;
});

var VE = u((CB, GE) => {
  var hM = xE(),
    mM = po(),
    OM = me(),
    AM = FE(),
    SM = V();

  function bM(e, r, t) {
    var n = SM(e) ? hM : AM,
      i = arguments.length < 3;

    return n(e, OM(r, 4), t, i, mM);
  }

  GE.exports = bM;
});

var XE = u((NB, UE) => {
  var xM = zi(),
    RM = me(),
    CM = ki(),
    NM = Math.max,
    PM = Math.min;

  function qM(e, r, t) {
    var n = e == null ? 0 : e.length;

    if (!n) return -1;

    var i = n - 1;

    return t !== void 0 && ((i = CM(t)), (i = t < 0 ? NM(n + i, 0) : PM(i, n - 1))), xM(e, RM(r, 3), i, !0);
  }

  UE.exports = qM;
});

var BE = u((PB, HE) => {
  var LM = Yi(),
    MM = XE(),
    wM = LM(MM);

  HE.exports = wM;
});

function jE(e, r) {
  return e === r ? e !== 0 || r !== 0 || 1 / e === 1 / r : e !== e && r !== r;
}

function FM(e, r) {
  if (jE(e, r)) return !0;
  if (typeof e !== 'object' || e === null || typeof r !== 'object' || r === null) return !1;

  let t = Object.keys(e),
    n = Object.keys(r);

  if (t.length !== n.length) return !1;
  for (let i = 0; i < t.length; i++) if (!DM.call(r, t[i]) || !jE(e[t[i]], r[t[i]])) return !1;
  return !0;
}

var DM,
  Eo,
  WE = L(() => {
    'use strict';
    DM = Object.prototype.hasOwnProperty;
    Eo = FM;
  });

var ug = {};

K(ug, {
  cleanupHTMLElement: () => M0,
  clearAllStyles: () => L0,
  clearObjectCache: () => e0,
  getActionListProgress: () => D0,
  getAffectedElements: () => Io,
  getComputedStyle: () => u0,
  getDestinationValues: () => g0,
  getElementId: () => i0,
  getInstanceId: () => t0,
  getInstanceOrigin: () => f0,
  getItemConfigByKey: () => E0,
  getMaxDurationItemIndex: () => sg,
  getNamespacedParameterId: () => V0,
  getRenderType: () => ig,
  getStyleProp: () => y0,
  mediaQueriesEqual: () => X0,
  observeStore: () => s0,
  reduceListToGroup: () => F0,
  reifyState: () => o0,
  renderHTMLElement: () => v0,
  shallowEqual: () => Eo,
  shouldAllowMediaQuery: () => U0,
  shouldNamespaceEventParameter: () => G0,
  stringifyTarget: () => H0,
});

function e0() {
  Gt.clear();
}

function t0() {
  return 'i' + r0++;
}

function i0(e, r) {
  for (let t in e) {
    let n = e[t];

    if (n && n.ref === r) return n.id;
  }

  return 'e' + n0++;
}

function o0({ events: e, actionLists: r, site: t } = {}) {
  let n = (0, Ht.default)(
      e,
      (a, s) => {
        let { eventTypeId: c } = s;

        return a[c] || (a[c] = {}), (a[c][s.id] = s), a;
      },
      {},
    ),
    i = t && t.mediaQueries,
    o = [];

  return (
    i ? (o = i.map((a) => a.key)) : ((i = []), console.warn('IX2 missing mediaQueries in site data')),
    {
      ixData: {
        actionLists: r,
        events: e,
        eventTypeMap: n,
        mediaQueries: i,
        mediaQueryKeys: o,
      },
    }
  );
}

function s0({ store: e, select: r, onChange: t, comparator: n = a0 }) {
  let { getState: i, subscribe: o } = e,
    a = o(c),
    s = r(i());

  function c() {
    let l = r(i());

    if (l == null) {
      a();
      return;
    }

    n(l, s) || ((s = l), t(s, e));
  }

  return a;
}

function zE(e) {
  let r = typeof e;

  if (r === 'string') return { id: e };

  if (e != null && r === 'object') {
    let { id: t, objectId: n, selector: i, selectorGuids: o, appliesTo: a, useEventTarget: s } = e;

    return {
      appliesTo: a,
      id: t,
      objectId: n,
      selector: i,
      selectorGuids: o,
      useEventTarget: s,
    };
  }

  return {};
}

function Io({ config: e, event: r, eventTarget: t, elementRoot: n, elementApi: i }) {
  if (!i) throw new Error('IX2 missing elementApi');

  let { targets: o } = e;

  if (Array.isArray(o) && o.length > 0)
    return o.reduce(
      (N, P) =>
        N.concat(
          Io({
            config: { target: P },
            elementApi: i,
            elementRoot: n,
            event: r,
            eventTarget: t,
          }),
        ),
      [],
    );

  let {
      getValidDocument: a,
      getQuerySelector: s,
      queryDocument: c,
      getChildElements: l,
      getSiblingElements: f,
      matchSelector: p,
      elementContains: d,
      isSiblingNode: y,
    } = i,
    { target: g } = e;

  if (!g) return [];

  let { id: E, objectId: I, selector: v, selectorGuids: T, appliesTo: m, useEventTarget: h } = zE(g);

  if (I) return [Gt.has(I) ? Gt.get(I) : Gt.set(I, {}).get(I)];

  if (m === Ii.PAGE) {
    let N = a(E);

    return N ? [N] : [];
  }

  let _ = (r?.action?.config?.affectedElements ?? {})[E || v] || {},
    S = !!(_.id || _.selector),
    O,
    A,
    x,
    R = r && s(zE(r.target));

  if (
    (S
      ? ((O = _.limitAffectedElements), (A = R), (x = s(_)))
      : (A = x = s({ id: E, selector: v, selectorGuids: T })),
    r && h)
  ) {
    let N = t && (x || h === !0) ? [t] : c(R);

    if (x) {
      if (h === QM) return c(x).filter((P) => N.some((D) => d(P, D)));
      if (h === KE) return c(x).filter((P) => N.some((D) => d(D, P)));
      if (h === YE) return c(x).filter((P) => N.some((D) => y(D, P)));
    }

    return N;
  }

  return A == null || x == null
    ? []
    : te && n
      ? c(x).filter((N) => n.contains(N))
      : O === KE
        ? c(A, x)
        : O === $M
          ? l(c(A)).filter(p(x))
          : O === YE
            ? f(c(A)).filter(p(x))
            : c(x);
}

function u0({ element: e, actionItem: r }) {
  if (!te) return {};

  let { actionTypeId: t } = r;

  switch (t) {
    case rr:
    case tr:
    case nr:
    case ir:
    case jt:
      return window.getComputedStyle(e);
    default:
      return {};
  }
}

function f0(e, r = {}, t = {}, n, i) {
  let { getStyle: o } = i,
    { actionTypeId: a } = n;

  if (Ne(a)) return ao(a)(r[a], n);

  switch (n.actionTypeId) {
    case Ze:
    case Je:
    case er:
    case Vr:
      return r[n.actionTypeId] || To[n.actionTypeId];
    case Ur:
      return c0(r[n.actionTypeId], n.config.filters);
    case Xr:
      return l0(r[n.actionTypeId], n.config.fontVariations);
    case rg:
      return { value: (0, Ee.default)(parseFloat(o(e, Ut)), 1) };

    case rr: {
      let s = o(e, ue),
        c = o(e, ce),
        l,
        f;

      return (
        n.config.widthUnit === Ae
          ? (l = kE.test(s) ? parseFloat(s) : parseFloat(t.width))
          : (l = (0, Ee.default)(parseFloat(s), parseFloat(t.width))),
        n.config.heightUnit === Ae
          ? (f = kE.test(c) ? parseFloat(c) : parseFloat(t.height))
          : (f = (0, Ee.default)(parseFloat(c), parseFloat(t.height))),
        { heightValue: f, widthValue: l }
      );
    }

    case tr:
    case nr:
    case ir:
      return N0({
        actionTypeId: n.actionTypeId,
        computedStyle: t,
        element: e,
        getStyle: o,
      });
    case jt:
      return { value: (0, Ee.default)(o(e, Xt), t.display) };
    case JM:
      return r[n.actionTypeId] || { value: 0 };
    default:
      return;
  }
}

function g0({ element: e, actionItem: r, elementApi: t }) {
  if (Ne(r.actionTypeId)) return so(r.actionTypeId)(r.config);

  switch (r.actionTypeId) {
    case Ze:
    case Je:
    case er:

    case Vr: {
      let { xValue: n, yValue: i, zValue: o } = r.config;

      return { xValue: n, yValue: i, zValue: o };
    }

    case rr: {
      let { getStyle: n, setStyle: i, getProperty: o } = t,
        { widthUnit: a, heightUnit: s } = r.config,
        { widthValue: c, heightValue: l } = r.config;

      if (!te) return { heightValue: l, widthValue: c };

      if (a === Ae) {
        let f = n(e, ue);

        i(e, ue, ''), (c = o(e, 'offsetWidth')), i(e, ue, f);
      }

      if (s === Ae) {
        let f = n(e, ce);

        i(e, ce, ''), (l = o(e, 'offsetHeight')), i(e, ce, f);
      }

      return { heightValue: l, widthValue: c };
    }

    case tr:
    case nr:

    case ir: {
      let { rValue: n, gValue: i, bValue: o, aValue: a } = r.config;

      return { aValue: a, bValue: o, gValue: i, rValue: n };
    }

    case Ur:
      return r.config.filters.reduce(p0, {});
    case Xr:
      return r.config.fontVariations.reduce(d0, {});

    default: {
      let { value: n } = r.config;

      return { value: n };
    }
  }
}

function ig(e) {
  if (/^TRANSFORM_/.test(e)) return JE;
  if (/^STYLE_/.test(e)) return vo;
  if (/^GENERAL_/.test(e)) return yo;
  if (/^PLUGIN_/.test(e)) return eg;
}

function y0(e, r) {
  return e === vo ? r.replace('STYLE_', '').toLowerCase() : null;
}

function v0(e, r, t, n, i, o, a, s, c) {
  switch (s) {
    case JE:
      return m0(e, r, t, i, a);
    case vo:
      return P0(e, r, t, i, o, a);
    case yo:
      return q0(e, i, a);

    case eg: {
      let { actionTypeId: l } = i;

      if (Ne(l)) return uo(l)(c, r, i);
    }
  }
}

function m0(e, r, t, n, i) {
  let o = h0
      .map((s) => {
        let c = To[s],
          {
            xValue: l = c.xValue,
            yValue: f = c.yValue,
            zValue: p = c.zValue,
            xUnit: d = '',
            yUnit: y = '',
            zUnit: g = '',
          } = r[s] || {};

        switch (s) {
          case Ze:
            return `${UM}(${l}${d}, ${f}${y}, ${p}${g})`;
          case Je:
            return `${XM}(${l}${d}, ${f}${y}, ${p}${g})`;
          case er:
            return `${HM}(${l}${d}) ${BM}(${f}${y}) ${jM}(${p}${g})`;
          case Vr:
            return `${WM}(${l}${d}, ${f}${y})`;
          default:
            return '';
        }
      })
      .join(' '),
    { setStyle: a } = i;

  qe(e, Oe, i), a(e, Oe, o), S0(n, t) && a(e, Lt, KM);
}

function O0(e, r, t, n) {
  let i = (0, Ht.default)(r, (a, s, c) => `${a} ${c}(${s}${T0(c, t)})`, ''),
    { setStyle: o } = n;

  qe(e, Dr, n), o(e, Dr, i);
}

function A0(e, r, t, n) {
  let i = (0, Ht.default)(r, (a, s, c) => (a.push(`"${c}" ${s}`), a), []).join(', '),
    { setStyle: o } = n;

  qe(e, Fr, n), o(e, Fr, i);
}

function S0({ actionTypeId: e }, { xValue: r, yValue: t, zValue: n }) {
  return (
    (e === Ze && n !== void 0) || (e === Je && n !== void 0) || (e === er && (r !== void 0 || t !== void 0))
  );
}

function C0(e, r) {
  let t = e.exec(r);

  return t ? t[1] : '';
}

function N0({ element: e, actionTypeId: r, computedStyle: t, getStyle: n }) {
  let i = _o[r],
    o = n(e, i),
    a = x0.test(o) ? o : t[i],
    s = C0(R0, a).split(Gr);

  return {
    aValue: (0, Ee.default)(parseFloat(s[3]), 1),
    bValue: (0, Ee.default)(parseInt(s[2], 10), 255),
    gValue: (0, Ee.default)(parseInt(s[1], 10), 255),
    rValue: (0, Ee.default)(parseInt(s[0], 10), 255),
  };
}

function P0(e, r, t, n, i, o) {
  let { setStyle: a } = o;

  switch (n.actionTypeId) {
    case rr: {
      let { widthUnit: s = '', heightUnit: c = '' } = n.config,
        { widthValue: l, heightValue: f } = t;

      l !== void 0 && (s === Ae && (s = 'px'), qe(e, ue, o), a(e, ue, l + s)),
        f !== void 0 && (c === Ae && (c = 'px'), qe(e, ce, o), a(e, ce, f + c));

      break;
    }

    case Ur: {
      O0(e, t, n.config, o);
      break;
    }

    case Xr: {
      A0(e, t, n.config, o);
      break;
    }

    case tr:
    case nr:

    case ir: {
      let s = _o[n.actionTypeId],
        c = Math.round(t.rValue),
        l = Math.round(t.gValue),
        f = Math.round(t.bValue),
        p = t.aValue;

      qe(e, s, o), a(e, s, p >= 1 ? `rgb(${c},${l},${f})` : `rgba(${c},${l},${f},${p})`);

      break;
    }

    default: {
      let { unit: s = '' } = n.config;

      qe(e, i, o), a(e, i, t.value + s);
      break;
    }
  }
}

function q0(e, r, t) {
  let { setStyle: n } = t;

  switch (r.actionTypeId) {
    case jt: {
      let { value: i } = r.config;

      i === YM && te ? n(e, Xt, Qi) : n(e, Xt, i);
      return;
    }
  }
}

function qe(e, r, t) {
  if (!te) return;

  let n = ng[r];

  if (!n) return;

  let { getStyle: i, setStyle: o } = t,
    a = i(e, Qe);

  if (!a) {
    o(e, Qe, n);
    return;
  }

  let s = a.split(Gr).map(tg);

  s.indexOf(n) === -1 && o(e, Qe, s.concat(n).join(Gr));
}

function og(e, r, t) {
  if (!te) return;

  let n = ng[r];

  if (!n) return;

  let { getStyle: i, setStyle: o } = t,
    a = i(e, Qe);

  !a ||
    a.indexOf(n) === -1 ||
    o(
      e,
      Qe,
      a
        .split(Gr)
        .map(tg)
        .filter((s) => s !== n)
        .join(Gr),
    );
}

function L0({ store: e, elementApi: r }) {
  let { ixData: t } = e.getState(),
    { events: n = {}, actionLists: i = {} } = t;

  Object.keys(n).forEach((o) => {
    let a = n[o],
      { config: s } = a.action,
      { actionListId: c } = s,
      l = i[c];

    l && $E({ actionList: l, elementApi: r, event: a });
  }),
    Object.keys(i).forEach((o) => {
      $E({ actionList: i[o], elementApi: r });
    });
}

function $E({ actionList: e = {}, event: r, elementApi: t }) {
  let { actionItemGroups: n, continuousParameterGroups: i } = e;

  n &&
    n.forEach((o) => {
      QE({ actionGroup: o, elementApi: t, event: r });
    }),
    i &&
      i.forEach((o) => {
        let { continuousActionGroups: a } = o;

        a.forEach((s) => {
          QE({ actionGroup: s, elementApi: t, event: r });
        });
      });
}

function QE({ actionGroup: e, event: r, elementApi: t }) {
  let { actionItems: n } = e;

  n.forEach((i) => {
    let { actionTypeId: o, config: a } = i,
      s;

    Ne(o) ? (s = (c) => co(o)(c, i)) : (s = ag({ actionTypeId: o, effect: w0, elementApi: t })),
      Io({ config: a, elementApi: t, event: r }).forEach(s);
  });
}

function M0(e, r, t) {
  let { setStyle: n, getStyle: i } = t,
    { actionTypeId: o } = r;

  if (o === rr) {
    let { config: a } = r;

    a.widthUnit === Ae && n(e, ue, ''), a.heightUnit === Ae && n(e, ce, '');
  }

  i(e, Qe) && ag({ actionTypeId: o, effect: og, elementApi: t })(e);
}

function w0(e, r, t) {
  let { setStyle: n } = t;

  og(e, r, t), n(e, r, ''), r === Oe && n(e, Lt, '');
}

function sg(e) {
  let r = 0,
    t = 0;

  return (
    e.forEach((n, i) => {
      let { config: o } = n,
        a = o.delay + o.duration;

      a >= r && ((r = a), (t = i));
    }),
    t
  );
}

function D0(e, r) {
  let { actionItemGroups: t, useFirstGroupAsInitialState: n } = e,
    { actionItem: i, verboseTimeElapsed: o = 0 } = r,
    a = 0,
    s = 0;

  return (
    t.forEach((c, l) => {
      if (n && l === 0) return;

      let { actionItems: f } = c,
        p = f[sg(f)],
        { config: d, actionTypeId: y } = p;

      i.id === p.id && (s = a + o);

      let g = ig(y) === yo ? 0 : d.duration;

      a += d.delay + g;
    }),
    a > 0 ? wr(s / a) : 0
  );
}

function F0({ actionList: e, actionItemId: r, rawData: t }) {
  let { actionItemGroups: n, continuousParameterGroups: i } = e,
    o = [],
    a = (s) => (o.push((0, Bt.mergeIn)(s, ['config'], { delay: 0, duration: 0 })), s.id === r);

  return (
    n && n.some(({ actionItems: s }) => s.some(a)),
    i &&
      i.some((s) => {
        let { continuousActionGroups: c } = s;

        return c.some(({ actionItems: l }) => l.some(a));
      }),
    (0, Bt.setIn)(t, ['actionLists'], {
      [e.id]: { actionItemGroups: [{ actionItems: o }], id: e.id },
    })
  );
}

function G0(e, { basedOn: r }) {
  return (
    (e === re.SCROLLING_IN_VIEW && (r === ae.ELEMENT || r == null)) ||
    (e === re.MOUSE_MOVE && r === ae.ELEMENT)
  );
}

function V0(e, r) {
  return e + ZM + r;
}

function U0(e, r) {
  return r == null ? !0 : e.indexOf(r) !== -1;
}

function X0(e, r) {
  return Eo(e && e.sort(), r && r.sort());
}

function H0(e) {
  if (typeof e === 'string') return e;
  if (e.pluginElement && e.objectId) return e.pluginElement + go + e.objectId;
  if (e.objectId) return e.objectId;

  let { id: r = '', selector: t = '', useEventTarget: n = '' } = e;

  return r + go + t + go + n;
}

var Ee,
  Ht,
  Vt,
  Bt,
  GM,
  VM,
  UM,
  XM,
  HM,
  BM,
  jM,
  WM,
  KM,
  YM,
  Ut,
  Dr,
  Fr,
  ue,
  ce,
  ZE,
  zM,
  kM,
  KE,
  $M,
  YE,
  QM,
  Xt,
  Qe,
  Ae,
  Gr,
  ZM,
  go,
  JE,
  yo,
  vo,
  eg,
  Ze,
  Je,
  er,
  Vr,
  rg,
  Ur,
  Xr,
  rr,
  tr,
  nr,
  ir,
  jt,
  JM,
  tg,
  _o,
  ng,
  Gt,
  r0,
  n0,
  a0,
  kE,
  c0,
  l0,
  p0,
  d0,
  E0,
  To,
  _0,
  I0,
  T0,
  h0,
  b0,
  x0,
  R0,
  ag,
  cg = L(() => {
    'use strict';
    (Ee = C(SE())), (Ht = C(VE())), (Vt = C(BE())), (Bt = C(Xe()));
    z();
    WE();
    eo();
    lo();
    Mt();

    ({
      BACKGROUND: GM,
      TRANSFORM: VM,
      TRANSLATE_3D: UM,
      SCALE_3D: XM,
      ROTATE_X: HM,
      ROTATE_Y: BM,
      ROTATE_Z: jM,
      SKEW: WM,
      PRESERVE_3D: KM,
      FLEX: YM,
      OPACITY: Ut,
      FILTER: Dr,
      FONT_VARIATION_SETTINGS: Fr,
      WIDTH: ue,
      HEIGHT: ce,
      BACKGROUND_COLOR: ZE,
      BORDER_COLOR: zM,
      COLOR: kM,
      CHILDREN: KE,
      IMMEDIATE_CHILDREN: $M,
      SIBLINGS: YE,
      PARENT: QM,
      DISPLAY: Xt,
      WILL_CHANGE: Qe,
      AUTO: Ae,
      COMMA_DELIMITER: Gr,
      COLON_DELIMITER: ZM,
      BAR_DELIMITER: go,
      RENDER_TRANSFORM: JE,
      RENDER_GENERAL: yo,
      RENDER_STYLE: vo,
      RENDER_PLUGIN: eg,
    } = H),
      ({
        TRANSFORM_MOVE: Ze,
        TRANSFORM_SCALE: Je,
        TRANSFORM_ROTATE: er,
        TRANSFORM_SKEW: Vr,
        STYLE_OPACITY: rg,
        STYLE_FILTER: Ur,
        STYLE_FONT_VARIATION: Xr,
        STYLE_SIZE: rr,
        STYLE_BACKGROUND_COLOR: tr,
        STYLE_BORDER: nr,
        STYLE_TEXT_COLOR: ir,
        GENERAL_DISPLAY: jt,
        OBJECT_VALUE: JM,
      } = Y),
      (tg = (e) => e.trim()),
      (_o = Object.freeze({ [ir]: kM, [nr]: zM, [tr]: ZE })),
      (ng = Object.freeze({
        [ce]: ce,
        [Dr]: Dr,
        [Fr]: Fr,
        [Oe]: VM,
        [ue]: ue,
        [Ut]: Ut,
        [ZE]: GM,
      })),
      (Gt = new Map());

    r0 = 1;
    n0 = 1;
    a0 = (e, r) => e === r;

    (kE = /px/),
      (c0 = (e, r) => r.reduce((t, n) => (t[n.type] == null && (t[n.type] = _0[n.type]), t), e || {})),
      (l0 = (e, r) =>
        r.reduce(
          (t, n) => (t[n.type] == null && (t[n.type] = I0[n.type] || n.defaultValue || 0), t),
          e || {},
        ));

    (p0 = (e, r) => (r && (e[r.type] = r.value || 0), e)),
      (d0 = (e, r) => (r && (e[r.type] = r.value || 0), e)),
      (E0 = (e, r, t) => {
        if (Ne(e)) return oo(e)(t, r);

        switch (e) {
          case Ur: {
            let n = (0, Vt.default)(t.filters, ({ type: i }) => i === r);

            return n ? n.value : 0;
          }

          case Xr: {
            let n = (0, Vt.default)(t.fontVariations, ({ type: i }) => i === r);

            return n ? n.value : 0;
          }

          default:
            return t[r];
        }
      });

    (To = {
      [er]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
      [Je]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
      [Vr]: Object.freeze({ xValue: 0, yValue: 0 }),
      [Ze]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
    }),
      (_0 = Object.freeze({
        blur: 0,
        brightness: 100,
        contrast: 100,
        grayscale: 0,
        'hue-rotate': 0,
        invert: 0,
        saturate: 100,
        sepia: 0,
      })),
      (I0 = Object.freeze({ opsz: 0, slnt: 0, wdth: 0, wght: 0 })),
      (T0 = (e, r) => {
        let t = (0, Vt.default)(r.filters, ({ type: n }) => n === e);

        if (t && t.unit) return t.unit;

        switch (e) {
          case 'blur':
            return 'px';
          case 'hue-rotate':
            return 'deg';
          default:
            return '%';
        }
      }),
      (h0 = Object.keys(To));

    (b0 = '\\(([^)]+)\\)'), (x0 = /^rgb/), (R0 = RegExp(`rgba?${b0}`));

    ag =
      ({ effect: e, actionTypeId: r, elementApi: t }) =>
      (n) => {
        switch (r) {
          case Ze:
          case Je:
          case er:
          case Vr:
            e(n, Oe, t);
            break;
          case Ur:
            e(n, Dr, t);
            break;
          case Xr:
            e(n, Fr, t);
            break;
          case rg:
            e(n, Ut, t);
            break;
          case rr:
            e(n, ue, t), e(n, ce, t);
            break;
          case tr:
          case nr:
          case ir:
            e(n, _o[r], t);
            break;
          case jt:
            e(n, Xt, t);
            break;
        }
      };
  });

var Le = u((j) => {
  'use strict';

  var or = zr().default;

  Object.defineProperty(j, '__esModule', { value: !0 });

  j.IX2VanillaUtils =
    j.IX2VanillaPlugins =
    j.IX2ElementsReducer =
    j.IX2Easings =
    j.IX2EasingUtils =
    j.IX2BrowserSupport =
      void 0;

  var B0 = or((Mt(), ie(oE)));

  j.IX2BrowserSupport = B0;

  var j0 = or((Ji(), ie(Mr)));

  j.IX2Easings = j0;

  var W0 = or((eo(), ie(pE)));

  j.IX2EasingUtils = W0;

  var K0 = or((yE(), ie(gE)));

  j.IX2ElementsReducer = K0;

  var Y0 = or((lo(), ie(OE)));

  j.IX2VanillaPlugins = Y0;

  var z0 = or((cg(), ie(ug)));

  j.IX2VanillaUtils = z0;
});

var Kt,
  ge,
  k0,
  $0,
  Q0,
  Z0,
  J0,
  ew,
  Wt,
  lg,
  rw,
  tw,
  ho,
  nw,
  iw,
  ow,
  aw,
  fg,
  pg = L(() => {
    'use strict';
    z();

    (Kt = C(Le())),
      (ge = C(Xe())),
      ({
        IX2_RAW_DATA_IMPORTED: k0,
        IX2_SESSION_STOPPED: $0,
        IX2_INSTANCE_ADDED: Q0,
        IX2_INSTANCE_STARTED: Z0,
        IX2_INSTANCE_REMOVED: J0,
        IX2_ANIMATION_FRAME_CHANGED: ew,
      } = F),
      ({ optimizeFloat: Wt, applyEasing: lg, createBezierEasing: rw } = Kt.IX2EasingUtils),
      ({ RENDER_GENERAL: tw } = H),
      ({ getItemConfigByKey: ho, getRenderType: nw, getStyleProp: iw } = Kt.IX2VanillaUtils),
      (ow = (e, r) => {
        let {
            position: t,
            parameterId: n,
            actionGroups: i,
            destinationKeys: o,
            smoothing: a,
            restingValue: s,
            actionTypeId: c,
            customEasingFn: l,
            skipMotion: f,
            skipToValue: p,
          } = e,
          { parameters: d } = r.payload,
          y = Math.max(1 - a, 0.01),
          g = d[n];

        g == null && ((y = 1), (g = s));

        let E = Math.max(g, 0) || 0,
          I = Wt(E - t),
          v = f ? p : Wt(t + I * y),
          T = v * 100;

        if (v === t && e.current) return e;

        let m, h, b, _;

        for (let O = 0, { length: A } = i; O < A; O++) {
          let { keyframe: x, actionItems: R } = i[O];

          if ((O === 0 && (m = R[0]), T >= x)) {
            m = R[0];

            let N = i[O + 1],
              P = N && T !== x;

            (h = P ? N.actionItems[0] : null), P && ((b = x / 100), (_ = (N.keyframe - x) / 100));
          }
        }

        let S = {};

        if (m && !h)
          for (let O = 0, { length: A } = o; O < A; O++) {
            let x = o[O];

            S[x] = ho(c, x, m.config);
          }
        else if (m && h && b !== void 0 && _ !== void 0) {
          let O = (v - b) / _,
            A = m.config.easing,
            x = lg(A, O, l);

          for (let R = 0, { length: N } = o; R < N; R++) {
            let P = o[R],
              D = ho(c, P, m.config),
              En = (ho(c, P, h.config) - D) * x + D;

            S[P] = En;
          }
        }

        return (0, ge.merge)(e, { current: S, position: v });
      }),
      (aw = (e, r) => {
        let {
            active: t,
            origin: n,
            start: i,
            immediate: o,
            renderType: a,
            verbose: s,
            actionItem: c,
            destination: l,
            destinationKeys: f,
            pluginDuration: p,
            instanceDelay: d,
            customEasingFn: y,
            skipMotion: g,
          } = e,
          E = c.config.easing,
          { duration: I, delay: v } = c.config;

        p != null && (I = p), (v = d ?? v), a === tw ? (I = 0) : (o || g) && (I = v = 0);

        let { now: T } = r.payload;

        if (t && n) {
          let m = T - (i + v);

          if (s) {
            let O = T - i,
              A = I + v,
              x = Wt(Math.min(Math.max(0, O / A), 1));

            e = (0, ge.set)(e, 'verboseTimeElapsed', A * x);
          }

          if (m < 0) return e;

          let h = Wt(Math.min(Math.max(0, m / I), 1)),
            b = lg(E, h, y),
            _ = {},
            S = null;

          return (
            f.length &&
              (S = f.reduce((O, A) => {
                let x = l[A],
                  R = parseFloat(n[A]) || 0,
                  P = (parseFloat(x) - R) * b + R;

                return (O[A] = P), O;
              }, {})),
            (_.current = S),
            (_.position = h),
            h === 1 && ((_.active = !1), (_.complete = !0)),
            (0, ge.merge)(e, _)
          );
        }

        return e;
      }),
      (fg = (e = Object.freeze({}), r) => {
        switch (r.type) {
          case k0:
            return r.payload.ixInstances || Object.freeze({});
          case $0:
            return Object.freeze({});

          case Q0: {
            let {
                instanceId: t,
                elementId: n,
                actionItem: i,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: c,
                groupIndex: l,
                isCarrier: f,
                origin: p,
                destination: d,
                immediate: y,
                verbose: g,
                continuous: E,
                parameterId: I,
                actionGroups: v,
                smoothing: T,
                restingValue: m,
                pluginInstance: h,
                pluginDuration: b,
                instanceDelay: _,
                skipMotion: S,
                skipToValue: O,
              } = r.payload,
              { actionTypeId: A } = i,
              x = nw(A),
              R = iw(x, A),
              N = Object.keys(d).filter((D) => d[D] != null && typeof d[D] !== 'string'),
              { easing: P } = i.config;

            return (0, ge.set)(e, t, {
              actionGroups: v,
              actionItem: i,
              actionListId: c,
              actionTypeId: A,
              active: !1,
              continuous: E,
              current: null,
              customEasingFn: Array.isArray(P) && P.length === 4 ? rw(P) : void 0,
              destination: d,
              destinationKeys: N,
              elementId: n,
              eventId: o,
              eventStateKey: s,
              eventTarget: a,
              groupIndex: l,
              id: t,
              immediate: y,
              instanceDelay: _,
              isCarrier: f,
              origin: p,
              parameterId: I,
              pluginDuration: b,
              pluginInstance: h,
              position: 0,
              renderType: x,
              restingValue: m,
              skipMotion: S,
              skipToValue: O,
              smoothing: T,
              start: 0,
              styleProp: R,
              verbose: g,
            });
          }

          case Z0: {
            let { instanceId: t, time: n } = r.payload;

            return (0, ge.mergeIn)(e, [t], {
              active: !0,
              complete: !1,
              start: n,
            });
          }

          case J0: {
            let { instanceId: t } = r.payload;

            if (!e[t]) return e;

            let n = {},
              i = Object.keys(e),
              { length: o } = i;

            for (let a = 0; a < o; a++) {
              let s = i[a];

              s !== t && (n[s] = e[s]);
            }

            return n;
          }

          case ew: {
            let t = e,
              n = Object.keys(e),
              { length: i } = n;

            for (let o = 0; o < i; o++) {
              let a = n[o],
                s = e[a],
                c = s.continuous ? ow : aw;

              t = (0, ge.set)(t, a, c(s, r));
            }

            return t;
          }

          default:
            return e;
        }
      });
  });

var sw,
  uw,
  cw,
  dg,
  Eg = L(() => {
    'use strict';
    z();

    ({ IX2_RAW_DATA_IMPORTED: sw, IX2_SESSION_STOPPED: uw, IX2_PARAMETER_CHANGED: cw } = F),
      (dg = (e = {}, r) => {
        switch (r.type) {
          case sw:
            return r.payload.ixParameters || {};
          case uw:
            return {};

          case cw: {
            let { key: t, value: n } = r.payload;

            return (e[t] = n), e;
          }

          default:
            return e;
        }
      });
  });

var vg = {};

K(vg, { default: () => fw });

var gg,
  yg,
  lw,
  fw,
  _g = L(() => {
    'use strict';
    gg = C(_i());
    Cc();
    $c();
    Jc();
    yg = C(Le());
    pg();
    Eg();

    ({ ixElements: lw } = yg.IX2ElementsReducer),
      (fw = (0, gg.combineReducers)({
        ixData: Rc,
        ixElements: lw,
        ixInstances: fg,
        ixParameters: dg,
        ixRequest: kc,
        ixSession: Zc,
      }));
  });

var Tg = u((zB, Ig) => {
  var pw = Te(),
    dw = V(),
    Ew = pe(),
    gw = '[object String]';

  function yw(e) {
    return typeof e === 'string' || (!dw(e) && Ew(e) && pw(e) == gw);
  }

  Ig.exports = yw;
});

var mg = u((kB, hg) => {
  var vw = Ki(),
    _w = vw('length');

  hg.exports = _w;
});

var Ag = u(($B, Og) => {
  var Iw = '\\ud800-\\udfff',
    Tw = '\\u0300-\\u036f',
    hw = '\\ufe20-\\ufe2f',
    mw = '\\u20d0-\\u20ff',
    Ow = Tw + hw + mw,
    Aw = '\\ufe0e\\ufe0f',
    Sw = '\\u200d',
    bw = RegExp('[' + Sw + Iw + Ow + Aw + ']');

  function xw(e) {
    return bw.test(e);
  }

  Og.exports = xw;
});

var Lg = u((QB, qg) => {
  var bg = '\\ud800-\\udfff',
    Rw = '\\u0300-\\u036f',
    Cw = '\\ufe20-\\ufe2f',
    Nw = '\\u20d0-\\u20ff',
    Pw = Rw + Cw + Nw,
    qw = '\\ufe0e\\ufe0f',
    Lw = '[' + bg + ']',
    mo = '[' + Pw + ']',
    Oo = '\\ud83c[\\udffb-\\udfff]',
    Mw = '(?:' + mo + '|' + Oo + ')',
    xg = '[^' + bg + ']',
    Rg = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    Cg = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    ww = '\\u200d',
    Ng = Mw + '?',
    Pg = '[' + qw + ']?',
    Dw = '(?:' + ww + '(?:' + [xg, Rg, Cg].join('|') + ')' + Pg + Ng + ')*',
    Fw = Pg + Ng + Dw,
    Gw = '(?:' + [xg + mo + '?', mo, Rg, Cg, Lw].join('|') + ')',
    Sg = RegExp(Oo + '(?=' + Oo + ')|' + Gw + Fw, 'g');

  function Vw(e) {
    for (var r = (Sg.lastIndex = 0); Sg.test(e); ) ++r;
    return r;
  }

  qg.exports = Vw;
});

var wg = u((ZB, Mg) => {
  var Uw = mg(),
    Xw = Ag(),
    Hw = Lg();

  function Bw(e) {
    return Xw(e) ? Hw(e) : Uw(e);
  }

  Mg.exports = Bw;
});

var Fg = u((JB, Dg) => {
  var jw = At(),
    Ww = St(),
    Kw = Re(),
    Yw = Tg(),
    zw = wg(),
    kw = '[object Map]',
    $w = '[object Set]';

  function Qw(e) {
    if (e == null) return 0;
    if (Kw(e)) return Yw(e) ? zw(e) : e.length;

    var r = Ww(e);

    return r == kw || r == $w ? e.size : jw(e).length;
  }

  Dg.exports = Qw;
});

var Vg = u((ej, Gg) => {
  var Zw = 'Expected a function';

  function Jw(e) {
    if (typeof e !== 'function') throw new TypeError(Zw);

    return function () {
      var r = arguments;

      switch (r.length) {
        case 0:
          return !e.call(this);
        case 1:
          return !e.call(this, r[0]);
        case 2:
          return !e.call(this, r[0], r[1]);
        case 3:
          return !e.call(this, r[0], r[1], r[2]);
      }

      return !e.apply(this, r);
    };
  }

  Gg.exports = Jw;
});

var Ao = u((rj, Ug) => {
  var eD = he(),
    rD = (function () {
      try {
        var e = eD(Object, 'defineProperty');

        return e({}, '', {}), e;
      } catch {}
    })();

  Ug.exports = rD;
});

var So = u((tj, Hg) => {
  var Xg = Ao();

  function tD(e, r, t) {
    r == '__proto__' && Xg
      ? Xg(e, r, { configurable: !0, enumerable: !0, value: t, writable: !0 })
      : (e[r] = t);
  }

  Hg.exports = tD;
});

var jg = u((nj, Bg) => {
  var nD = So(),
    iD = Et(),
    oD = Object.prototype,
    aD = oD.hasOwnProperty;

  function sD(e, r, t) {
    var n = e[r];

    (!(aD.call(e, r) && iD(n, t)) || (t === void 0 && !(r in e))) && nD(e, r, t);
  }

  Bg.exports = sD;
});

var Yg = u((ij, Kg) => {
  var uD = jg(),
    cD = Pr(),
    lD = Tt(),
    Wg = se(),
    fD = ke();

  function pD(e, r, t, n) {
    if (!Wg(e)) return e;
    r = cD(r, e);

    for (var i = -1, o = r.length, a = o - 1, s = e; s != null && ++i < o; ) {
      var c = fD(r[i]),
        l = t;

      if (c === '__proto__' || c === 'constructor' || c === 'prototype') return e;

      if (i != a) {
        var f = s[c];

        (l = n ? n(f, c, s) : void 0), l === void 0 && (l = Wg(f) ? f : lD(r[i + 1]) ? [] : {});
      }

      uD(s, c, l), (s = s[c]);
    }

    return e;
  }

  Kg.exports = pD;
});

var kg = u((oj, zg) => {
  var dD = Rt(),
    ED = Yg(),
    gD = Pr();

  function yD(e, r, t) {
    for (var n = -1, i = r.length, o = {}; ++n < i; ) {
      var a = r[n],
        s = dD(e, a);

      t(s, a) && ED(o, gD(a, e), s);
    }

    return o;
  }

  zg.exports = yD;
});

var Qg = u((aj, $g) => {
  var vD = _t(),
    _D = oi(),
    ID = Pi(),
    TD = Ni(),
    hD = Object.getOwnPropertySymbols,
    mD = hD
      ? function (e) {
          for (var r = []; e; ) vD(r, ID(e)), (e = _D(e));
          return r;
        }
      : TD;

  $g.exports = mD;
});

var Jg = u((sj, Zg) => {
  function OD(e) {
    var r = [];

    if (e != null) for (var t in Object(e)) r.push(t);
    return r;
  }

  Zg.exports = OD;
});

var ry = u((uj, ey) => {
  var AD = se(),
    SD = Ot(),
    bD = Jg(),
    xD = Object.prototype,
    RD = xD.hasOwnProperty;

  function CD(e) {
    if (!AD(e)) return bD(e);

    var r = SD(e),
      t = [];

    for (var n in e) (n == 'constructor' && (r || !RD.call(e, n))) || t.push(n);
    return t;
  }

  ey.exports = CD;
});

var ny = u((cj, ty) => {
  var ND = Li(),
    PD = ry(),
    qD = Re();

  function LD(e) {
    return qD(e) ? ND(e, !0) : PD(e);
  }

  ty.exports = LD;
});

var oy = u((lj, iy) => {
  var MD = Ci(),
    wD = Qg(),
    DD = ny();

  function FD(e) {
    return MD(e, DD, wD);
  }

  iy.exports = FD;
});

var sy = u((fj, ay) => {
  var GD = Wi(),
    VD = me(),
    UD = kg(),
    XD = oy();

  function HD(e, r) {
    if (e == null) return {};

    var t = GD(XD(e), function (n) {
      return [n];
    });

    return (
      (r = VD(r)),
      UD(e, t, function (n, i) {
        return r(n, i[0]);
      })
    );
  }

  ay.exports = HD;
});

var cy = u((pj, uy) => {
  var BD = me(),
    jD = Vg(),
    WD = sy();

  function KD(e, r) {
    return WD(e, jD(BD(r)));
  }

  uy.exports = KD;
});

var fy = u((dj, ly) => {
  var YD = At(),
    zD = St(),
    kD = Sr(),
    $D = V(),
    QD = Re(),
    ZD = It(),
    JD = Ot(),
    eF = mt(),
    rF = '[object Map]',
    tF = '[object Set]',
    nF = Object.prototype,
    iF = nF.hasOwnProperty;

  function oF(e) {
    if (e == null) return !0;
    if (
      QD(e) &&
      ($D(e) || typeof e === 'string' || typeof e.splice === 'function' || ZD(e) || eF(e) || kD(e))
    )
      return !e.length;

    var r = zD(e);

    if (r == rF || r == tF) return !e.size;
    if (JD(e)) return !YD(e).length;
    for (var t in e) if (iF.call(e, t)) return !1;
    return !0;
  }

  ly.exports = oF;
});

var dy = u((Ej, py) => {
  var aF = So(),
    sF = fo(),
    uF = me();

  function cF(e, r) {
    var t = {};

    return (
      (r = uF(r, 3)),
      sF(e, function (n, i, o) {
        aF(t, i, r(n, i, o));
      }),
      t
    );
  }

  py.exports = cF;
});

var gy = u((gj, Ey) => {
  function lF(e, r) {
    for (var t = -1, n = e == null ? 0 : e.length; ++t < n && r(e[t], t, e) !== !1; );
    return e;
  }

  Ey.exports = lF;
});

var vy = u((yj, yy) => {
  var fF = Nt();

  function pF(e) {
    return typeof e === 'function' ? e : fF;
  }

  yy.exports = pF;
});

var Iy = u((vj, _y) => {
  var dF = gy(),
    EF = po(),
    gF = vy(),
    yF = V();

  function vF(e, r) {
    var t = yF(e) ? dF : EF;

    return t(e, gF(r));
  }

  _y.exports = vF;
});

var hy = u((_j, Ty) => {
  var _F = ee(),
    IF = function () {
      return _F.Date.now();
    };

  Ty.exports = IF;
});

var Ay = u((Ij, Oy) => {
  var TF = se(),
    bo = hy(),
    my = Pt(),
    hF = 'Expected a function',
    mF = Math.max,
    OF = Math.min;

  function AF(e, r, t) {
    var n,
      i,
      o,
      a,
      s,
      c,
      l = 0,
      f = !1,
      p = !1,
      d = !0;

    if (typeof e !== 'function') throw new TypeError(hF);

    (r = my(r) || 0),
      TF(t) &&
        ((f = !!t.leading),
        (p = 'maxWait' in t),
        (o = p ? mF(my(t.maxWait) || 0, r) : o),
        (d = 'trailing' in t ? !!t.trailing : d));

    function y(_) {
      var S = n,
        O = i;

      return (n = i = void 0), (l = _), (a = e.apply(O, S)), a;
    }

    function g(_) {
      return (l = _), (s = setTimeout(v, r)), f ? y(_) : a;
    }

    function E(_) {
      var S = _ - c,
        O = _ - l,
        A = r - S;

      return p ? OF(A, o - O) : A;
    }

    function I(_) {
      var S = _ - c,
        O = _ - l;

      return c === void 0 || S >= r || S < 0 || (p && O >= o);
    }

    function v() {
      var _ = bo();

      if (I(_)) return T(_);
      s = setTimeout(v, E(_));
    }

    function T(_) {
      return (s = void 0), d && n ? y(_) : ((n = i = void 0), a);
    }

    function m() {
      s !== void 0 && clearTimeout(s), (l = 0), (n = c = i = s = void 0);
    }

    function h() {
      return s === void 0 ? a : T(bo());
    }

    function b() {
      var _ = bo(),
        S = I(_);

      if (((n = arguments), (i = this), (c = _), S)) {
        if (s === void 0) return g(c);
        if (p) return clearTimeout(s), (s = setTimeout(v, r)), y(c);
      }

      return s === void 0 && (s = setTimeout(v, r)), a;
    }

    return (b.cancel = m), (b.flush = h), b;
  }

  Oy.exports = AF;
});

var by = u((Tj, Sy) => {
  var SF = Ay(),
    bF = se(),
    xF = 'Expected a function';

  function RF(e, r, t) {
    var n = !0,
      i = !0;

    if (typeof e !== 'function') throw new TypeError(xF);
    return (
      bF(t) && ((n = 'leading' in t ? !!t.leading : n), (i = 'trailing' in t ? !!t.trailing : i)),
      SF(e, r, { leading: n, maxWait: r, trailing: i })
    );
  }

  Sy.exports = RF;
});

var Ry = {};

K(Ry, {
  actionListPlaybackChanged: () => sr,
  animationFrameChanged: () => zt,
  clearRequested: () => JF,
  elementStateChanged: () => Mo,
  eventListenerAdded: () => Yt,
  eventStateChanged: () => Po,
  instanceAdded: () => qo,
  instanceRemoved: () => Lo,
  instanceStarted: () => kt,
  mediaQueriesDefined: () => Do,
  parameterChanged: () => ar,
  playbackRequested: () => QF,
  previewRequested: () => $F,
  rawDataImported: () => xo,
  sessionInitialized: () => Ro,
  sessionStarted: () => Co,
  sessionStopped: () => No,
  stopRequested: () => ZF,
  testFrameRendered: () => e1,
  viewportWidthChanged: () => wo,
});

var xy,
  CF,
  NF,
  PF,
  qF,
  LF,
  MF,
  wF,
  DF,
  FF,
  GF,
  VF,
  UF,
  XF,
  HF,
  BF,
  jF,
  WF,
  KF,
  YF,
  zF,
  kF,
  xo,
  Ro,
  Co,
  No,
  $F,
  QF,
  ZF,
  JF,
  Yt,
  e1,
  Po,
  zt,
  ar,
  qo,
  kt,
  Lo,
  Mo,
  sr,
  wo,
  Do,
  $t = L(() => {
    'use strict';
    z();

    (xy = C(Le())),
      ({
        IX2_RAW_DATA_IMPORTED: CF,
        IX2_SESSION_INITIALIZED: NF,
        IX2_SESSION_STARTED: PF,
        IX2_SESSION_STOPPED: qF,
        IX2_PREVIEW_REQUESTED: LF,
        IX2_PLAYBACK_REQUESTED: MF,
        IX2_STOP_REQUESTED: wF,
        IX2_CLEAR_REQUESTED: DF,
        IX2_EVENT_LISTENER_ADDED: FF,
        IX2_TEST_FRAME_RENDERED: GF,
        IX2_EVENT_STATE_CHANGED: VF,
        IX2_ANIMATION_FRAME_CHANGED: UF,
        IX2_PARAMETER_CHANGED: XF,
        IX2_INSTANCE_ADDED: HF,
        IX2_INSTANCE_STARTED: BF,
        IX2_INSTANCE_REMOVED: jF,
        IX2_ELEMENT_STATE_CHANGED: WF,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: KF,
        IX2_VIEWPORT_WIDTH_CHANGED: YF,
        IX2_MEDIA_QUERIES_DEFINED: zF,
      } = F),
      ({ reifyState: kF } = xy.IX2VanillaUtils),
      (xo = (e) => ({ payload: { ...kF(e) }, type: CF })),
      (Ro = ({ hasBoundaryNodes: e, reducedMotion: r }) => ({
        payload: { hasBoundaryNodes: e, reducedMotion: r },
        type: NF,
      })),
      (Co = () => ({ type: PF })),
      (No = () => ({ type: qF })),
      ($F = ({ rawData: e, defer: r }) => ({
        payload: { defer: r, rawData: e },
        type: LF,
      })),
      (QF = ({
        actionTypeId: e = Y.GENERAL_START_ACTION,
        actionListId: r,
        actionItemId: t,
        eventId: n,
        allowEvents: i,
        immediate: o,
        testManual: a,
        verbose: s,
        rawData: c,
      }) => ({
        payload: {
          actionItemId: t,
          actionListId: r,
          actionTypeId: e,
          allowEvents: i,
          eventId: n,
          immediate: o,
          rawData: c,
          testManual: a,
          verbose: s,
        },
        type: MF,
      })),
      (ZF = (e) => ({ payload: { actionListId: e }, type: wF })),
      (JF = () => ({ type: DF })),
      (Yt = (e, r) => ({
        payload: { listenerParams: r, target: e },
        type: FF,
      })),
      (e1 = (e = 1) => ({ payload: { step: e }, type: GF })),
      (Po = (e, r) => ({ payload: { newState: r, stateKey: e }, type: VF })),
      (zt = (e, r) => ({ payload: { now: e, parameters: r }, type: UF })),
      (ar = (e, r) => ({ payload: { key: e, value: r }, type: XF })),
      (qo = (e) => ({ payload: { ...e }, type: HF })),
      (kt = (e, r) => ({ payload: { instanceId: e, time: r }, type: BF })),
      (Lo = (e) => ({ payload: { instanceId: e }, type: jF })),
      (Mo = (e, r, t, n) => ({
        payload: { actionItem: n, actionTypeId: r, current: t, elementId: e },
        type: WF,
      })),
      (sr = ({ actionListId: e, isPlaying: r }) => ({
        payload: { actionListId: e, isPlaying: r },
        type: KF,
      })),
      (wo = ({ width: e, mediaQueries: r }) => ({
        payload: { mediaQueries: r, width: e },
        type: YF,
      })),
      (Do = () => ({ type: zF }));
  });

var W = {};

K(W, {
  elementContains: () => Vo,
  getChildElements: () => l1,
  getClosestElement: () => Hr,
  getProperty: () => o1,
  getQuerySelector: () => Go,
  getRefType: () => Uo,
  getSiblingElements: () => f1,
  getStyle: () => i1,
  getValidDocument: () => s1,
  isSiblingNode: () => c1,
  matchSelector: () => a1,
  queryDocument: () => u1,
  setStyle: () => n1,
});

function n1(e, r, t) {
  e.style[r] = t;
}

function i1(e, r) {
  return e.style[r];
}

function o1(e, r) {
  return e[r];
}

function a1(e) {
  return (r) => r[Fo](e);
}

function Go({ id: e, selector: r }) {
  if (e) {
    let t = e;

    if (e.indexOf(Cy) !== -1) {
      let n = e.split(Cy),
        i = n[0];

      if (((t = n[1]), i !== document.documentElement.getAttribute(Py))) return null;
    }

    return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
  }

  return r;
}

function s1(e) {
  return e == null || e === document.documentElement.getAttribute(Py) ? document : null;
}

function u1(e, r) {
  return Array.prototype.slice.call(document.querySelectorAll(r ? e + ' ' + r : e));
}

function Vo(e, r) {
  return e.contains(r);
}

function c1(e, r) {
  return e !== r && e.parentNode === r.parentNode;
}

function l1(e) {
  let r = [];

  for (let t = 0, { length: n } = e || []; t < n; t++) {
    let { children: i } = e[t],
      { length: o } = i;

    if (o) for (let a = 0; a < o; a++) r.push(i[a]);
  }

  return r;
}

function f1(e = []) {
  let r = [],
    t = [];

  for (let n = 0, { length: i } = e; n < i; n++) {
    let { parentNode: o } = e[n];

    if (!o || !o.children || !o.children.length || t.indexOf(o) !== -1) continue;
    t.push(o);

    let a = o.firstElementChild;

    for (; a != null; ) e.indexOf(a) === -1 && r.push(a), (a = a.nextElementSibling);
  }

  return r;
}

function Uo(e) {
  return e != null && typeof e === 'object' ? (e instanceof Element ? r1 : t1) : null;
}

var Ny,
  Fo,
  Cy,
  r1,
  t1,
  Py,
  Hr,
  qy = L(() => {
    'use strict';
    Ny = C(Le());
    z();

    ({ ELEMENT_MATCHES: Fo } = Ny.IX2BrowserSupport),
      ({ IX2_ID_DELIMITER: Cy, HTML_ELEMENT: r1, PLAIN_OBJECT: t1, WF_PAGE: Py } = H);

    Hr = Element.prototype.closest
      ? (e, r) => (document.documentElement.contains(e) ? e.closest(r) : null)
      : (e, r) => {
          if (!document.documentElement.contains(e)) return null;

          let t = e;

          do {
            if (t[Fo] && t[Fo](r)) return t;
            t = t.parentNode;
          } while (t != null);

          return null;
        };
  });

var Xo = u((Oj, My) => {
  var p1 = se(),
    Ly = Object.create,
    d1 = (function () {
      function e() {}

      return function (r) {
        if (!p1(r)) return {};
        if (Ly) return Ly(r);
        e.prototype = r;

        var t = new e();

        return (e.prototype = void 0), t;
      };
    })();

  My.exports = d1;
});

var Qt = u((Aj, wy) => {
  function E1() {}

  wy.exports = E1;
});

var Jt = u((Sj, Dy) => {
  var g1 = Xo(),
    y1 = Qt();

  function Zt(e, r) {
    (this.__wrapped__ = e),
      (this.__actions__ = []),
      (this.__chain__ = !!r),
      (this.__index__ = 0),
      (this.__values__ = void 0);
  }

  Zt.prototype = g1(y1.prototype);
  Zt.prototype.constructor = Zt;
  Dy.exports = Zt;
});

var Uy = u((bj, Vy) => {
  var Fy = Ge(),
    v1 = Sr(),
    _1 = V(),
    Gy = Fy ? Fy.isConcatSpreadable : void 0;

  function I1(e) {
    return _1(e) || v1(e) || !!(Gy && e && e[Gy]);
  }

  Vy.exports = I1;
});

var By = u((xj, Hy) => {
  var T1 = _t(),
    h1 = Uy();

  function Xy(e, r, t, n, i) {
    var o = -1,
      a = e.length;

    for (t || (t = h1), i || (i = []); ++o < a; ) {
      var s = e[o];

      r > 0 && t(s) ? (r > 1 ? Xy(s, r - 1, t, n, i) : T1(i, s)) : n || (i[i.length] = s);
    }

    return i;
  }

  Hy.exports = Xy;
});

var Wy = u((Rj, jy) => {
  var m1 = By();

  function O1(e) {
    var r = e == null ? 0 : e.length;

    return r ? m1(e, 1) : [];
  }

  jy.exports = O1;
});

var Yy = u((Cj, Ky) => {
  function A1(e, r, t) {
    switch (t.length) {
      case 0:
        return e.call(r);
      case 1:
        return e.call(r, t[0]);
      case 2:
        return e.call(r, t[0], t[1]);
      case 3:
        return e.call(r, t[0], t[1], t[2]);
    }

    return e.apply(r, t);
  }

  Ky.exports = A1;
});

var $y = u((Nj, ky) => {
  var S1 = Yy(),
    zy = Math.max;

  function b1(e, r, t) {
    return (
      (r = zy(r === void 0 ? e.length - 1 : r, 0)),
      function () {
        for (var n = arguments, i = -1, o = zy(n.length - r, 0), a = Array(o); ++i < o; ) a[i] = n[r + i];
        i = -1;
        for (var s = Array(r + 1); ++i < r; ) s[i] = n[i];
        return (s[r] = t(a)), S1(e, this, s);
      }
    );
  }

  ky.exports = b1;
});

var Zy = u((Pj, Qy) => {
  function x1(e) {
    return function () {
      return e;
    };
  }

  Qy.exports = x1;
});

var rv = u((qj, ev) => {
  var R1 = Zy(),
    Jy = Ao(),
    C1 = Nt(),
    N1 = Jy
      ? function (e, r) {
          return Jy(e, 'toString', {
            configurable: !0,
            enumerable: !1,
            value: R1(r),
            writable: !0,
          });
        }
      : C1;

  ev.exports = N1;
});

var nv = u((Lj, tv) => {
  var P1 = 800,
    q1 = 16,
    L1 = Date.now;

  function M1(e) {
    var r = 0,
      t = 0;

    return function () {
      var n = L1(),
        i = q1 - (n - t);

      if (((t = n), i > 0)) {
        if (++r >= P1) return arguments[0];
      } else r = 0;
      return e.apply(void 0, arguments);
    };
  }

  tv.exports = M1;
});

var ov = u((Mj, iv) => {
  var w1 = rv(),
    D1 = nv(),
    F1 = D1(w1);

  iv.exports = F1;
});

var sv = u((wj, av) => {
  var G1 = Wy(),
    V1 = $y(),
    U1 = ov();

  function X1(e) {
    return U1(V1(e, void 0, G1), e + '');
  }

  av.exports = X1;
});

var lv = u((Dj, cv) => {
  var uv = Mi(),
    H1 = uv && new uv();

  cv.exports = H1;
});

var pv = u((Fj, fv) => {
  function B1() {}

  fv.exports = B1;
});

var Ho = u((Gj, Ev) => {
  var dv = lv(),
    j1 = pv(),
    W1 = dv
      ? function (e) {
          return dv.get(e);
        }
      : j1;

  Ev.exports = W1;
});

var yv = u((Vj, gv) => {
  var K1 = {};

  gv.exports = K1;
});

var Bo = u((Uj, _v) => {
  var vv = yv(),
    Y1 = Object.prototype,
    z1 = Y1.hasOwnProperty;

  function k1(e) {
    for (var r = e.name + '', t = vv[r], n = z1.call(vv, r) ? t.length : 0; n--; ) {
      var i = t[n],
        o = i.func;

      if (o == null || o == e) return i.name;
    }

    return r;
  }

  _v.exports = k1;
});

var rn = u((Xj, Iv) => {
  var $1 = Xo(),
    Q1 = Qt(),
    Z1 = 4294967295;

  function en(e) {
    (this.__wrapped__ = e),
      (this.__actions__ = []),
      (this.__dir__ = 1),
      (this.__filtered__ = !1),
      (this.__iteratees__ = []),
      (this.__takeCount__ = Z1),
      (this.__views__ = []);
  }

  en.prototype = $1(Q1.prototype);
  en.prototype.constructor = en;
  Iv.exports = en;
});

var hv = u((Hj, Tv) => {
  function J1(e, r) {
    var t = -1,
      n = e.length;

    for (r || (r = Array(n)); ++t < n; ) r[t] = e[t];
    return r;
  }

  Tv.exports = J1;
});

var Ov = u((Bj, mv) => {
  var e2 = rn(),
    r2 = Jt(),
    t2 = hv();

  function n2(e) {
    if (e instanceof e2) return e.clone();

    var r = new r2(e.__wrapped__, e.__chain__);

    return (r.__actions__ = t2(e.__actions__)), (r.__index__ = e.__index__), (r.__values__ = e.__values__), r;
  }

  mv.exports = n2;
});

var bv = u((jj, Sv) => {
  var i2 = rn(),
    Av = Jt(),
    o2 = Qt(),
    a2 = V(),
    s2 = pe(),
    u2 = Ov(),
    c2 = Object.prototype,
    l2 = c2.hasOwnProperty;

  function tn(e) {
    if (s2(e) && !a2(e) && !(e instanceof i2)) {
      if (e instanceof Av) return e;
      if (l2.call(e, '__wrapped__')) return u2(e);
    }

    return new Av(e);
  }

  tn.prototype = o2.prototype;
  tn.prototype.constructor = tn;
  Sv.exports = tn;
});

var Rv = u((Wj, xv) => {
  var f2 = rn(),
    p2 = Ho(),
    d2 = Bo(),
    E2 = bv();

  function g2(e) {
    var r = d2(e),
      t = E2[r];

    if (typeof t !== 'function' || !(r in f2.prototype)) return !1;
    if (e === t) return !0;

    var n = p2(t);

    return !!n && e === n[0];
  }

  xv.exports = g2;
});

var qv = u((Kj, Pv) => {
  var Cv = Jt(),
    y2 = sv(),
    v2 = Ho(),
    jo = Bo(),
    _2 = V(),
    Nv = Rv(),
    I2 = 'Expected a function',
    T2 = 8,
    h2 = 32,
    m2 = 128,
    O2 = 256;

  function A2(e) {
    return y2(function (r) {
      var t = r.length,
        n = t,
        i = Cv.prototype.thru;

      for (e && r.reverse(); n--; ) {
        var o = r[n];

        if (typeof o !== 'function') throw new TypeError(I2);
        if (i && !a && jo(o) == 'wrapper') var a = new Cv([], !0);
      }

      for (n = a ? n : t; ++n < t; ) {
        o = r[n];

        var s = jo(o),
          c = s == 'wrapper' ? v2(o) : void 0;

        c && Nv(c[0]) && c[1] == (m2 | T2 | h2 | O2) && !c[4].length && c[9] == 1
          ? (a = a[jo(c[0])].apply(a, c[3]))
          : (a = o.length == 1 && Nv(o) ? a[s]() : a.thru(o));
      }

      return function () {
        var l = arguments,
          f = l[0];

        if (a && l.length == 1 && _2(f)) return a.plant(f).value();
        for (var p = 0, d = t ? r[p].apply(this, l) : f; ++p < t; ) d = r[p].call(this, d);
        return d;
      };
    });
  }

  Pv.exports = A2;
});

var Mv = u((Yj, Lv) => {
  var S2 = qv(),
    b2 = S2();

  Lv.exports = b2;
});

var Dv = u((zj, wv) => {
  function x2(e, r, t) {
    return e === e && (t !== void 0 && (e = e <= t ? e : t), r !== void 0 && (e = e >= r ? e : r)), e;
  }

  wv.exports = x2;
});

var Gv = u((kj, Fv) => {
  var R2 = Dv(),
    Wo = Pt();

  function C2(e, r, t) {
    return (
      t === void 0 && ((t = r), (r = void 0)),
      t !== void 0 && ((t = Wo(t)), (t = t === t ? t : 0)),
      r !== void 0 && ((r = Wo(r)), (r = r === r ? r : 0)),
      R2(Wo(e), r, t)
    );
  }

  Fv.exports = C2;
});

var Yv,
  zv,
  kv,
  $v,
  N2,
  P2,
  q2,
  L2,
  M2,
  w2,
  D2,
  F2,
  G2,
  V2,
  U2,
  X2,
  H2,
  B2,
  j2,
  Qv,
  Zv,
  W2,
  K2,
  Y2,
  Jv,
  z2,
  k2,
  e_,
  $2,
  Ko,
  r_,
  Vv,
  Uv,
  t_,
  jr,
  Q2,
  le,
  n_,
  Z2,
  $,
  ne,
  Wr,
  i_,
  Yo,
  Xv,
  zo,
  J2,
  Br,
  eG,
  rG,
  tG,
  o_,
  Hv,
  nG,
  Bv,
  iG,
  oG,
  aG,
  jv,
  nn,
  on,
  Wv,
  Kv,
  a_,
  s_ = L(() => {
    'use strict';
    (Yv = C(Mv())), (zv = C(Ct())), (kv = C(Gv()));
    z();
    ko();
    $t();

    ($v = C(Le())),
      ({
        MOUSE_CLICK: N2,
        MOUSE_SECOND_CLICK: P2,
        MOUSE_DOWN: q2,
        MOUSE_UP: L2,
        MOUSE_OVER: M2,
        MOUSE_OUT: w2,
        DROPDOWN_CLOSE: D2,
        DROPDOWN_OPEN: F2,
        SLIDER_ACTIVE: G2,
        SLIDER_INACTIVE: V2,
        TAB_ACTIVE: U2,
        TAB_INACTIVE: X2,
        NAVBAR_CLOSE: H2,
        NAVBAR_OPEN: B2,
        MOUSE_MOVE: j2,
        PAGE_SCROLL_DOWN: Qv,
        SCROLL_INTO_VIEW: Zv,
        SCROLL_OUT_OF_VIEW: W2,
        PAGE_SCROLL_UP: K2,
        SCROLLING_IN_VIEW: Y2,
        PAGE_FINISH: Jv,
        ECOMMERCE_CART_CLOSE: z2,
        ECOMMERCE_CART_OPEN: k2,
        PAGE_START: e_,
        PAGE_SCROLL: $2,
      } = re),
      (Ko = 'COMPONENT_ACTIVE'),
      (r_ = 'COMPONENT_INACTIVE'),
      ({ COLON_DELIMITER: Vv } = H),
      ({ getNamespacedParameterId: Uv } = $v.IX2VanillaUtils),
      (t_ = (e) => (r) => (typeof r === 'object' && e(r) ? !0 : r)),
      (jr = t_(({ element: e, nativeEvent: r }) => e === r.target)),
      (Q2 = t_(({ element: e, nativeEvent: r }) => e.contains(r.target))),
      (le = (0, Yv.default)([jr, Q2])),
      (n_ = (e, r) => {
        if (r) {
          let { ixData: t } = e.getState(),
            { events: n } = t,
            i = n[r];

          if (i && !J2[i.eventTypeId]) return i;
        }

        return null;
      }),
      (Z2 = ({ store: e, event: r }) => {
        let { action: t } = r,
          { autoStopEventId: n } = t.config;

        return !!n_(e, n);
      }),
      ($ = ({ store: e, event: r, element: t, eventStateKey: n }, i) => {
        let { action: o, id: a } = r,
          { actionListId: s, autoStopEventId: c } = o.config,
          l = n_(e, c);

        return (
          l &&
            ur({
              actionListId: (0, zv.default)(l, 'action.config.actionListId'),
              eventId: c,
              eventStateKey: c + Vv + n.split(Vv)[1],
              eventTarget: t,
              store: e,
            }),
          ur({
            actionListId: s,
            eventId: a,
            eventStateKey: n,
            eventTarget: t,
            store: e,
          }),
          Kr({
            actionListId: s,
            eventId: a,
            eventStateKey: n,
            eventTarget: t,
            store: e,
          }),
          i
        );
      }),
      (ne = (e, r) => (t, n) => (e(t, n) === !0 ? r(t, n) : n)),
      (Wr = { handler: ne(le, $) }),
      (i_ = { ...Wr, types: [Ko, r_].join(' ') }),
      (Yo = [
        { target: window, throttle: !0, types: 'resize orientationchange' },
        {
          target: document,
          throttle: !0,
          types: 'scroll wheel readystatechange IX2_PAGE_UPDATE',
        },
      ]),
      (Xv = 'mouseover mouseout'),
      (zo = { types: Yo }),
      (J2 = { PAGE_FINISH: Jv, PAGE_START: e_ }),
      (Br = (() => {
        let e = window.pageXOffset !== void 0,
          t = document.compatMode === 'CSS1Compat' ? document.documentElement : document.body;

        return () => ({
          clientHeight: t.clientHeight,
          clientWidth: t.clientWidth,
          innerHeight: window.innerHeight,
          innerWidth: window.innerWidth,
          scrollHeight: t.scrollHeight,
          scrollLeft: e ? window.pageXOffset : t.scrollLeft,
          scrollTop: e ? window.pageYOffset : t.scrollTop,
          scrollWidth: t.scrollWidth,
          stiffScrollTop: (0, kv.default)(
            e ? window.pageYOffset : t.scrollTop,
            0,
            t.scrollHeight - window.innerHeight,
          ),
        });
      })()),
      (eG = (e, r) => !(e.left > r.right || e.right < r.left || e.top > r.bottom || e.bottom < r.top)),
      (rG = ({ element: e, nativeEvent: r }) => {
        let { type: t, target: n, relatedTarget: i } = r,
          o = e.contains(n);

        if (t === 'mouseover' && o) return !0;

        let a = e.contains(i);

        return !!(t === 'mouseout' && o && a);
      }),
      (tG = (e) => {
        let {
            element: r,
            event: { config: t },
          } = e,
          { clientWidth: n, clientHeight: i } = Br(),
          o = t.scrollOffsetValue,
          c = t.scrollOffsetUnit === 'PX' ? o : (i * (o || 0)) / 100;

        return eG(r.getBoundingClientRect(), {
          bottom: i - c,
          left: 0,
          right: n,
          top: c,
        });
      }),
      (o_ = (e) => (r, t) => {
        let { type: n } = r.nativeEvent,
          i = [Ko, r_].indexOf(n) !== -1 ? n === Ko : t.isActive,
          o = { ...t, isActive: i };

        return ((!t || o.isActive !== t.isActive) && e(r, o)) || o;
      }),
      (Hv = (e) => (r, t) => {
        let n = { elementHovered: rG(r) };

        return ((t ? n.elementHovered !== t.elementHovered : n.elementHovered) && e(r, n)) || n;
      }),
      (nG = (e) => (r, t) => {
        let n = { ...t, elementVisible: tG(r) };

        return ((t ? n.elementVisible !== t.elementVisible : n.elementVisible) && e(r, n)) || n;
      }),
      (Bv =
        (e) =>
        (r, t = {}) => {
          let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = Br(),
            {
              event: { config: a, eventTypeId: s },
            } = r,
            { scrollOffsetValue: c, scrollOffsetUnit: l } = a,
            f = l === 'PX',
            p = i - o,
            d = Number((n / p).toFixed(2));

          if (t && t.percentTop === d) return t;

          let y = (f ? c : (o * (c || 0)) / 100) / p,
            g,
            E,
            I = 0;

          t && ((g = d > t.percentTop), (E = t.scrollingDown !== g), (I = E ? d : t.anchorTop));

          let v = s === Qv ? d >= I + y : d <= I - y,
            T = {
              ...t,
              anchorTop: I,
              inBounds: v,
              percentTop: d,
              scrollingDown: g,
            };

          return (t && v && (E || T.inBounds !== t.inBounds) && e(r, T)) || T;
        }),
      (iG = (e, r) => e.left > r.left && e.left < r.right && e.top > r.top && e.top < r.bottom),
      (oG = (e) => (r, t) => {
        let n = { finished: document.readyState === 'complete' };

        return n.finished && !(t && t.finshed) && e(r), n;
      }),
      (aG = (e) => (r, t) => {
        let n = { started: !0 };

        return t || e(r), n;
      }),
      (jv =
        (e) =>
        (r, t = { clickCount: 0 }) => {
          let n = { clickCount: (t.clickCount % 2) + 1 };

          return (n.clickCount !== t.clickCount && e(r, n)) || n;
        }),
      (nn = (e = !0) => ({
        ...i_,
        handler: ne(
          e ? le : jr,
          o_((r, t) => (t.isActive ? Wr.handler(r, t) : t)),
        ),
      })),
      (on = (e = !0) => ({
        ...i_,
        handler: ne(
          e ? le : jr,
          o_((r, t) => (t.isActive ? t : Wr.handler(r, t))),
        ),
      })),
      (Wv = {
        ...zo,
        handler: nG((e, r) => {
          let { elementVisible: t } = r,
            { event: n, store: i } = e,
            { ixData: o } = i.getState(),
            { events: a } = o;

          return !a[n.action.config.autoStopEventId] && r.triggered
            ? r
            : (n.eventTypeId === Zv) === t
              ? ($(e), { ...r, triggered: !0 })
              : r;
        }),
      }),
      (Kv = 0.05),
      (a_ = {
        [$2]: {
          handler: ({ store: e, eventConfig: r }) => {
            let { continuousParameterGroupId: t, reverse: n } = r,
              { scrollTop: i, scrollHeight: o, clientHeight: a } = Br(),
              s = i / (o - a);

            (s = n ? 1 - s : s), e.dispatch(ar(t, s));
          },
          types: Yo,
        },
        [B2]: nn(!1),
        [D2]: on(),
        [e_]: {
          handler: ne(jr, aG($)),
          types: 'readystatechange IX2_PAGE_UPDATE',
        },
        [F2]: nn(),
        [G2]: nn(),
        [H2]: on(!1),
        [j2]: {
          handler: (
            { store: e, element: r, eventConfig: t, nativeEvent: n, eventStateKey: i },
            o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
          ) => {
            let {
                basedOn: a,
                selectedAxis: s,
                continuousParameterGroupId: c,
                reverse: l,
                restingState: f = 0,
              } = t,
              { clientX: p = o.clientX, clientY: d = o.clientY, pageX: y = o.pageX, pageY: g = o.pageY } = n,
              E = s === 'X_AXIS',
              I = n.type === 'mouseout',
              v = f / 100,
              T = c,
              m = !1;

            switch (a) {
              case ae.VIEWPORT: {
                v = E
                  ? Math.min(p, window.innerWidth) / window.innerWidth
                  : Math.min(d, window.innerHeight) / window.innerHeight;

                break;
              }

              case ae.PAGE: {
                let { scrollLeft: h, scrollTop: b, scrollWidth: _, scrollHeight: S } = Br();

                v = E ? Math.min(h + y, _) / _ : Math.min(b + g, S) / S;
                break;
              }

              case ae.ELEMENT:

              default: {
                T = Uv(i, c);

                let h = n.type.indexOf('mouse') === 0;

                if (h && le({ element: r, nativeEvent: n }) !== !0) break;

                let b = r.getBoundingClientRect(),
                  { left: _, top: S, width: O, height: A } = b;

                if (!h && !iG({ left: p, top: d }, b)) break;
                (m = !0), (v = E ? (p - _) / O : (d - S) / A);
                break;
              }
            }

            return (
              I && (v > 1 - Kv || v < Kv) && (v = Math.round(v)),
              (a !== ae.ELEMENT || m || m !== o.elementHovered) &&
                ((v = l ? 1 - v : v), e.dispatch(ar(T, v))),
              { clientX: p, clientY: d, elementHovered: m, pageX: y, pageY: g }
            );
          },
          types: 'mousemove mouseout scroll',
        },
        [Jv]: {
          handler: ne(jr, oG($)),
          types: 'readystatechange IX2_PAGE_UPDATE',
        },
        [k2]: { handler: ne(le, $), types: 'ecommerce-cart-open' },
        [K2]: {
          ...zo,
          handler: Bv((e, r) => {
            r.scrollingDown || $(e);
          }),
        },
        [L2]: { ...Wr, types: 'mouseup' },
        [M2]: {
          handler: ne(
            le,
            Hv((e, r) => {
              r.elementHovered && $(e);
            }),
          ),
          types: Xv,
        },
        [N2]: {
          handler: ne(
            le,
            jv((e, { clickCount: r }) => {
              Z2(e) ? r === 1 && $(e) : $(e);
            }),
          ),
          types: 'click',
        },
        [P2]: {
          handler: ne(
            le,
            jv((e, { clickCount: r }) => {
              r === 2 && $(e);
            }),
          ),
          types: 'click',
        },
        [q2]: { ...Wr, types: 'mousedown' },
        [Qv]: {
          ...zo,
          handler: Bv((e, r) => {
            r.scrollingDown && $(e);
          }),
        },
        [U2]: nn(),
        [V2]: on(),
        [w2]: {
          handler: ne(
            le,
            Hv((e, r) => {
              r.elementHovered || $(e);
            }),
          ),
          types: Xv,
        },
        [W2]: Wv,
        [X2]: on(),
        [Y2]: {
          handler: ({ element: e, store: r, eventConfig: t, eventStateKey: n }, i = { scrollPercent: 0 }) => {
            let { scrollLeft: o, scrollTop: a, scrollWidth: s, scrollHeight: c, clientHeight: l } = Br(),
              {
                basedOn: f,
                selectedAxis: p,
                continuousParameterGroupId: d,
                startsEntering: y,
                startsExiting: g,
                addEndOffset: E,
                addStartOffset: I,
                addOffsetValue: v = 0,
                endOffsetValue: T = 0,
              } = t,
              m = p === 'X_AXIS';

            if (f === ae.VIEWPORT) {
              let h = m ? o / s : a / c;

              return h !== i.scrollPercent && r.dispatch(ar(d, h)), { scrollPercent: h };
            } else {
              let h = Uv(n, d),
                b = e.getBoundingClientRect(),
                _ = (I ? v : 0) / 100,
                S = (E ? T : 0) / 100;

              (_ = y ? _ : 1 - _), (S = g ? S : 1 - S);

              let O = b.top + Math.min(b.height * _, l),
                x = b.top + b.height * S - O,
                R = Math.min(l + x, c),
                P = Math.min(Math.max(0, l - O), R) / R;

              return P !== i.scrollPercent && r.dispatch(ar(h, P)), { scrollPercent: P };
            }
          },
          types: Yo,
        },
        [z2]: { handler: ne(le, $), types: 'ecommerce-cart-close' },
        [Zv]: Wv,
      });
  });

var A_ = {};

K(A_, {
  observeRequests: () => bG,
  startActionGroup: () => Kr,
  startEngine: () => fn,
  stopActionGroup: () => ur,
  stopAllActionGroups: () => h_,
  stopEngine: () => pn,
});

function bG(e) {
  Me({ onChange: CG, select: ({ ixRequest: r }) => r.preview, store: e }),
    Me({ onChange: NG, select: ({ ixRequest: r }) => r.playback, store: e }),
    Me({ onChange: PG, select: ({ ixRequest: r }) => r.stop, store: e }),
    Me({ onChange: qG, select: ({ ixRequest: r }) => r.clear, store: e });
}

function xG(e) {
  Me({
    onChange: () => {
      pn(e), v_({ elementApi: W, store: e }), fn({ allowEvents: !0, store: e }), __();
    },
    select: ({ ixSession: r }) => r.mediaQueryKey,
    store: e,
  });
}

function RG(e, r) {
  let t = Me({
    onChange: (n) => {
      r(n), t();
    },
    select: ({ ixSession: n }) => n.tick,
    store: e,
  });
}

function CG({ rawData: e, defer: r }, t) {
  let n = () => {
    fn({ allowEvents: !0, rawData: e, store: t }), __();
  };

  r ? setTimeout(n, 0) : n();
}

function __() {
  document.dispatchEvent(new CustomEvent('IX2_PAGE_UPDATE'));
}

function NG(e, r) {
  let {
      actionTypeId: t,
      actionListId: n,
      actionItemId: i,
      eventId: o,
      allowEvents: a,
      immediate: s,
      testManual: c,
      verbose: l = !0,
    } = e,
    { rawData: f } = e;

  if (n && i && f && s) {
    let p = f.actionLists[n];

    p && (f = gG({ actionItemId: i, actionList: p, rawData: f }));
  }

  if (
    (fn({ allowEvents: a, rawData: f, store: r, testManual: c }),
    (n && t === Y.GENERAL_START_ACTION) || $o(t))
  ) {
    ur({ actionListId: n, store: r }), T_({ actionListId: n, eventId: o, store: r });

    let p = Kr({
      actionListId: n,
      eventId: o,
      immediate: s,
      store: r,
      verbose: l,
    });

    l && p && r.dispatch(sr({ actionListId: n, isPlaying: !s }));
  }
}

function PG({ actionListId: e }, r) {
  e ? ur({ actionListId: e, store: r }) : h_({ store: r }), pn(r);
}

function qG(e, r) {
  pn(r), v_({ elementApi: W, store: r });
}

function fn({ store: e, rawData: r, allowEvents: t, testManual: n }) {
  let { ixSession: i } = e.getState();

  r && e.dispatch(xo(r)),
    i.active ||
      (e.dispatch(
        Ro({
          hasBoundaryNodes: !!document.querySelector(sn),
          reducedMotion:
            document.body.hasAttribute('data-wf-ix-vacation') &&
            window.matchMedia('(prefers-reduced-motion)').matches,
        }),
      ),
      t && (GG(e), LG(), e.getState().ixSession.hasDefinedMediaQueries && xG(e)),
      e.dispatch(Co()),
      MG(e, n));
}

function LG() {
  let { documentElement: e } = document;

  e.className.indexOf(u_) === -1 && (e.className += ` ${u_}`);
}

function MG(e, r) {
  let t = (n) => {
    let { ixSession: i, ixParameters: o } = e.getState();

    i.active && (e.dispatch(zt(n, o)), r ? RG(e, t) : requestAnimationFrame(t));
  };

  t(window.performance.now());
}

function pn(e) {
  let { ixSession: r } = e.getState();

  if (r.active) {
    let { eventListeners: t } = r;

    t.forEach(wG), IG(), e.dispatch(No());
  }
}

function wG({ target: e, listenerParams: r }) {
  e.removeEventListener.apply(e, r);
}

function DG({
  store: e,
  eventStateKey: r,
  eventTarget: t,
  eventId: n,
  eventConfig: i,
  actionListId: o,
  parameterGroup: a,
  smoothing: s,
  restingValue: c,
}) {
  let { ixData: l, ixSession: f } = e.getState(),
    { events: p } = l,
    d = p[n],
    { eventTypeId: y } = d,
    g = {},
    E = {},
    I = [],
    { continuousActionGroups: v } = a,
    { id: T } = a;

  yG(y, i) && (T = vG(r, T));

  let m = f.hasBoundaryNodes && t ? Hr(t, sn) : null;

  v.forEach((h) => {
    let { keyframe: b, actionItems: _ } = h;

    _.forEach((S) => {
      let { actionTypeId: O } = S,
        { target: A } = S.config;

      if (!A) return;

      let x = A.boundaryMode ? m : null,
        R = TG(A) + Qo + O;

      if (((E[R] = FG(E[R], b, S)), !g[R])) {
        g[R] = !0;

        let { config: N } = S;

        un({
          config: N,
          elementApi: W,
          elementRoot: x,
          event: d,
          eventTarget: t,
        }).forEach((P) => {
          I.push({ element: P, key: R });
        });
      }
    });
  }),
    I.forEach(({ element: h, key: b }) => {
      let _ = E[b],
        S = (0, ye.default)(_, '[0].actionItems[0]', {}),
        { actionTypeId: O } = S,
        A = ln(O) ? Jo(O)(h, S) : null,
        x = Zo({ actionItem: S, element: h, elementApi: W }, A);

      ea({
        actionGroups: _,
        actionItem: S,
        actionListId: o,
        continuous: !0,
        destination: x,
        element: h,
        eventId: n,
        parameterId: T,
        pluginInstance: A,
        restingValue: c,
        smoothing: s,
        store: e,
      });
    });
}

function FG(e = [], r, t) {
  let n = [...e],
    i;

  return (
    n.some((o, a) => (o.keyframe === r ? ((i = a), !0) : !1)),
    i == null && ((i = n.length), n.push({ actionItems: [], keyframe: r })),
    n[i].actionItems.push(t),
    n
  );
}

function GG(e) {
  let { ixData: r } = e.getState(),
    { eventTypeMap: t } = r;

  I_(e),
    (0, cr.default)(t, (i, o) => {
      let a = a_[o];

      if (!a) {
        console.warn(`IX2 event type not configured: ${o}`);
        return;
      }

      jG({ events: i, logic: a, store: e });
    });

  let { ixSession: n } = e.getState();

  n.eventListeners.length && UG(e);
}

function UG(e) {
  let r = () => {
    I_(e);
  };

  VG.forEach((t) => {
    window.addEventListener(t, r), e.dispatch(Yt(window, [t, r]));
  }),
    r();
}

function I_(e) {
  let { ixSession: r, ixData: t } = e.getState(),
    n = window.innerWidth;

  if (n !== r.viewportWidth) {
    let { mediaQueries: i } = t;

    e.dispatch(wo({ mediaQueries: i, width: n }));
  }
}

function jG({ logic: e, store: r, events: t }) {
  WG(t);

  let { types: n, handler: i } = e,
    { ixData: o } = r.getState(),
    { actionLists: a } = o,
    s = XG(t, BG);

  if (!(0, f_.default)(s)) return;

  (0, cr.default)(s, (p, d) => {
    let y = t[d],
      { action: g, id: E, mediaQueries: I = o.mediaQueryKeys } = y,
      { actionListId: v } = g.config;

    hG(I, o.mediaQueryKeys) || r.dispatch(Do()),
      g.actionTypeId === Y.GENERAL_CONTINUOUS_ACTION &&
        (Array.isArray(y.config) ? y.config : [y.config]).forEach((m) => {
          let { continuousParameterGroupId: h } = m,
            b = (0, ye.default)(a, `${v}.continuousParameterGroups`, []),
            _ = (0, l_.default)(b, ({ id: A }) => A === h),
            S = (m.smoothing || 0) / 100,
            O = (m.restingState || 0) / 100;

          _ &&
            p.forEach((A, x) => {
              let R = E + Qo + x;

              DG({
                actionListId: v,
                eventConfig: m,
                eventId: E,
                eventStateKey: R,
                eventTarget: A,
                parameterGroup: _,
                restingValue: O,
                smoothing: S,
                store: r,
              });
            });
        }),
      (g.actionTypeId === Y.GENERAL_START_ACTION || $o(g.actionTypeId)) &&
        T_({ actionListId: v, eventId: E, store: r });
  });

  let c = (p) => {
      let { ixSession: d } = r.getState();

      HG(s, (y, g, E) => {
        let I = t[g],
          v = d.eventState[E],
          { action: T, mediaQueries: m = o.mediaQueryKeys } = I;

        if (!cn(m, d.mediaQueryKey)) return;

        let h = (b = {}) => {
          let _ = i(
            {
              element: y,
              event: I,
              eventConfig: b,
              eventStateKey: E,
              nativeEvent: p,
              store: r,
            },
            v,
          );

          mG(_, v) || r.dispatch(Po(E, _));
        };

        T.actionTypeId === Y.GENERAL_CONTINUOUS_ACTION
          ? (Array.isArray(I.config) ? I.config : [I.config]).forEach(h)
          : h();
      });
    },
    l = (0, g_.default)(c, SG),
    f = ({ target: p = document, types: d, throttle: y }) => {
      d.split(' ')
        .filter(Boolean)
        .forEach((g) => {
          let E = y ? l : c;

          p.addEventListener(g, E), r.dispatch(Yt(p, [g, E]));
        });
    };

  Array.isArray(n) ? n.forEach(f) : typeof n === 'string' && f(e);
}

function WG(e) {
  if (!AG) return;

  let r = {},
    t = '';

  for (let n in e) {
    let { eventTypeId: i, target: o } = e[n],
      a = Go(o);

    r[a] ||
      ((i === re.MOUSE_CLICK || i === re.MOUSE_SECOND_CLICK) &&
        ((r[a] = !0), (t += a + '{cursor: pointer;touch-action: manipulation;}')));
  }

  if (t) {
    let n = document.createElement('style');

    (n.textContent = t), document.body.appendChild(n);
  }
}

function T_({ store: e, actionListId: r, eventId: t }) {
  let { ixData: n, ixSession: i } = e.getState(),
    { actionLists: o, events: a } = n,
    s = a[t],
    c = o[r];

  if (c && c.useFirstGroupAsInitialState) {
    let l = (0, ye.default)(c, 'actionItemGroups[0].actionItems', []),
      f = (0, ye.default)(s, 'mediaQueries', n.mediaQueryKeys);

    if (!cn(f, i.mediaQueryKey)) return;

    l.forEach((p) => {
      let { config: d, actionTypeId: y } = p,
        g =
          d?.target?.useEventTarget === !0 && d?.target?.objectId == null
            ? { target: s.target, targets: s.targets }
            : d,
        E = un({ config: g, elementApi: W, event: s }),
        I = ln(y);

      E.forEach((v) => {
        let T = I ? Jo(y)(v, p) : null;

        ea({
          actionItem: p,
          actionListId: r,
          destination: Zo({ actionItem: p, element: v, elementApi: W }, T),
          element: v,
          eventId: t,
          immediate: !0,
          pluginInstance: T,
          store: e,
        });
      });
    });
  }
}

function h_({ store: e }) {
  let { ixInstances: r } = e.getState();

  (0, cr.default)(r, (t) => {
    if (!t.continuous) {
      let { actionListId: n, verbose: i } = t;

      ra(t, e), i && e.dispatch(sr({ actionListId: n, isPlaying: !1 }));
    }
  });
}

function ur({ store: e, eventId: r, eventTarget: t, eventStateKey: n, actionListId: i }) {
  let { ixInstances: o, ixSession: a } = e.getState(),
    s = a.hasBoundaryNodes && t ? Hr(t, sn) : null;

  (0, cr.default)(o, (c) => {
    let l = (0, ye.default)(c, 'actionItem.config.target.boundaryMode'),
      f = n ? c.eventStateKey === n : !0;

    if (c.actionListId === i && c.eventId === r && f) {
      if (s && l && !Vo(s, c.element)) return;
      ra(c, e), c.verbose && e.dispatch(sr({ actionListId: i, isPlaying: !1 }));
    }
  });
}

function Kr({
  store: e,
  eventId: r,
  eventTarget: t,
  eventStateKey: n,
  actionListId: i,
  groupIndex: o = 0,
  immediate: a,
  verbose: s,
}) {
  let { ixData: c, ixSession: l } = e.getState(),
    { events: f } = c,
    p = f[r] || {},
    { mediaQueries: d = c.mediaQueryKeys } = p,
    y = (0, ye.default)(c, `actionLists.${i}`, {}),
    { actionItemGroups: g, useFirstGroupAsInitialState: E } = y;

  if (!g || !g.length) return !1;

  o >= g.length && (0, ye.default)(p, 'config.loop') && (o = 0), o === 0 && E && o++;

  let v = (o === 0 || (o === 1 && E)) && $o(p.action?.actionTypeId) ? p.config.delay : void 0,
    T = (0, ye.default)(g, [o, 'actionItems'], []);

  if (!T.length || !cn(d, l.mediaQueryKey)) return !1;

  let m = l.hasBoundaryNodes && t ? Hr(t, sn) : null,
    h = pG(T),
    b = !1;

  return (
    T.forEach((_, S) => {
      let { config: O, actionTypeId: A } = _,
        x = ln(A),
        { target: R } = O;

      if (!R) return;

      let N = R.boundaryMode ? m : null;

      un({
        config: O,
        elementApi: W,
        elementRoot: N,
        event: p,
        eventTarget: t,
      }).forEach((D, ia) => {
        let dn = x ? Jo(A)(D, _) : null,
          En = x ? OG(A)(D, _) : null;

        b = !0;

        let x_ = h === S && ia === 0,
          R_ = dG({ actionItem: _, element: D }),
          C_ = Zo({ actionItem: _, element: D, elementApi: W }, dn);

        ea({
          actionItem: _,
          actionListId: i,
          computedStyle: R_,
          destination: C_,
          element: D,
          eventId: r,
          eventStateKey: n,
          eventTarget: t,
          groupIndex: o,
          immediate: a,
          instanceDelay: v,
          isCarrier: x_,
          pluginDuration: En,
          pluginInstance: dn,
          store: e,
          verbose: s,
        });
      });
    }),
    b
  );
}

function ea(e) {
  let { store: r, computedStyle: t, ...n } = e,
    {
      element: i,
      actionItem: o,
      immediate: a,
      pluginInstance: s,
      continuous: c,
      restingValue: l,
      eventId: f,
    } = n,
    p = !c,
    d = lG(),
    { ixElements: y, ixSession: g, ixData: E } = r.getState(),
    I = cG(y, i),
    { refState: v } = y[I] || {},
    T = Uo(i),
    m = g.reducedMotion && hi[o.actionTypeId],
    h;

  if (m && c)
    switch (E.events[f]?.eventTypeId) {
      case re.MOUSE_MOVE:
      case re.MOUSE_MOVE_IN_VIEWPORT:
        h = l;
        break;
      default:
        h = 0.5;
        break;
    }

  let b = EG(i, v, t, o, W, s);

  if (
    (r.dispatch(
      qo({
        elementId: I,
        instanceId: d,
        origin: b,
        refType: T,
        skipMotion: m,
        skipToValue: h,
        ...n,
      }),
    ),
    m_(document.body, 'ix2-animation-started', d),
    a)
  ) {
    KG(r, d);
    return;
  }

  Me({ onChange: O_, select: ({ ixInstances: _ }) => _[d], store: r }), p && r.dispatch(kt(d, g.tick));
}

function ra(e, r) {
  m_(document.body, 'ix2-animation-stopping', {
    instanceId: e.id,
    state: r.getState(),
  });

  let { elementId: t, actionItem: n } = e,
    { ixElements: i } = r.getState(),
    { ref: o, refType: a } = i[t] || {};

  a === y_ && _G(o, n, W), r.dispatch(Lo(e.id));
}

function m_(e, r, t) {
  let n = document.createEvent('CustomEvent');

  n.initCustomEvent(r, !0, !0, t), e.dispatchEvent(n);
}

function KG(e, r) {
  let { ixParameters: t } = e.getState();

  e.dispatch(kt(r, 0)), e.dispatch(zt(performance.now(), t));

  let { ixInstances: n } = e.getState();

  O_(n[r], e);
}

function O_(e, r) {
  let {
      active: t,
      continuous: n,
      complete: i,
      elementId: o,
      actionItem: a,
      actionTypeId: s,
      renderType: c,
      current: l,
      groupIndex: f,
      eventId: p,
      eventTarget: d,
      eventStateKey: y,
      actionListId: g,
      isCarrier: E,
      styleProp: I,
      verbose: v,
      pluginInstance: T,
    } = e,
    { ixData: m, ixSession: h } = r.getState(),
    { events: b } = m,
    _ = b[p] || {},
    { mediaQueries: S = m.mediaQueryKeys } = _;

  if (cn(S, h.mediaQueryKey) && (n || t || i)) {
    if (l || (c === uG && i)) {
      r.dispatch(Mo(o, s, l, a));

      let { ixElements: O } = r.getState(),
        { ref: A, refType: x, refState: R } = O[o] || {},
        N = R && R[s];

      (x === y_ || ln(s)) && fG(A, R, N, p, a, I, W, c, T);
    }

    if (i) {
      if (E) {
        let O = Kr({
          actionListId: g,
          eventId: p,
          eventStateKey: y,
          eventTarget: d,
          groupIndex: f + 1,
          store: r,
          verbose: v,
        });

        v && !O && r.dispatch(sr({ actionListId: g, isPlaying: !1 }));
      }

      ra(e, r);
    }
  }
}

var l_,
  ye,
  f_,
  p_,
  d_,
  E_,
  cr,
  g_,
  an,
  sG,
  $o,
  Qo,
  sn,
  y_,
  uG,
  u_,
  un,
  cG,
  Zo,
  Me,
  lG,
  fG,
  v_,
  pG,
  dG,
  EG,
  gG,
  yG,
  vG,
  cn,
  _G,
  IG,
  TG,
  hG,
  mG,
  ln,
  Jo,
  OG,
  c_,
  AG,
  SG,
  VG,
  XG,
  HG,
  BG,
  ko = L(() => {
    'use strict';

    (l_ = C($i())),
      (ye = C(Ct())),
      (f_ = C(Fg())),
      (p_ = C(cy())),
      (d_ = C(fy())),
      (E_ = C(dy())),
      (cr = C(Iy())),
      (g_ = C(by()));

    z();
    an = C(Le());
    $t();
    qy();
    s_();

    (sG = Object.keys(st)),
      ($o = (e) => sG.includes(e)),
      ({
        COLON_DELIMITER: Qo,
        BOUNDARY_SELECTOR: sn,
        HTML_ELEMENT: y_,
        RENDER_GENERAL: uG,
        W_MOD_IX: u_,
      } = H),
      ({
        getAffectedElements: un,
        getElementId: cG,
        getDestinationValues: Zo,
        observeStore: Me,
        getInstanceId: lG,
        renderHTMLElement: fG,
        clearAllStyles: v_,
        getMaxDurationItemIndex: pG,
        getComputedStyle: dG,
        getInstanceOrigin: EG,
        reduceListToGroup: gG,
        shouldNamespaceEventParameter: yG,
        getNamespacedParameterId: vG,
        shouldAllowMediaQuery: cn,
        cleanupHTMLElement: _G,
        clearObjectCache: IG,
        stringifyTarget: TG,
        mediaQueriesEqual: hG,
        shallowEqual: mG,
      } = an.IX2VanillaUtils),
      ({ isPluginType: ln, createPluginInstance: Jo, getPluginDuration: OG } = an.IX2VanillaPlugins),
      (c_ = navigator.userAgent),
      (AG = c_.match(/iPad/i) || c_.match(/iPhone/)),
      (SG = 12);

    VG = ['resize', 'orientationchange'];

    (XG = (e, r) => (0, p_.default)((0, E_.default)(e, r), d_.default)),
      (HG = (e, r) => {
        (0, cr.default)(e, (t, n) => {
          t.forEach((i, o) => {
            let a = n + Qo + o;

            r(i, n, a);
          });
        });
      }),
      (BG = (e) => {
        let r = { target: e.target, targets: e.targets };

        return un({ config: r, elementApi: W });
      });
  });

var b_ = u((ve) => {
  'use strict';

  var YG = zr().default,
    zG = ua().default;

  Object.defineProperty(ve, '__esModule', { value: !0 });
  ve.actions = void 0;
  ve.destroy = S_;
  ve.init = JG;
  ve.setEnv = ZG;
  ve.store = void 0;
  Yu();

  var kG = _i(),
    $G = zG((_g(), ie(vg))),
    ta = (ko(), ie(A_)),
    QG = YG(($t(), ie(Ry)));

  ve.actions = QG;

  var na = (ve.store = (0, kG.createStore)($G.default));

  function ZG(e) {
    e() && (0, ta.observeRequests)(na);
  }

  function JG(e) {
    S_(), (0, ta.startEngine)({ allowEvents: !0, rawData: e, store: na });
  }

  function S_() {
    (0, ta.stopEngine)(na);
  }
});

function iW() {
  let e = b_();

  return e.setEnv(() => !0), e;
}

export { iW as createIX2Engine };
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
