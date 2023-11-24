! function (t, n) {
   "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.functionPlot = n() : t.functionPlot = n()
}(self, (() => (() => {
   var t = {
         5248: (t, n, e) => {
            "use strict";
            t.exports = e(9976)
         },
         517: t => {
            "use strict";
            t.exports = function () {
               var t = Object.create(Math);
               return t.factory = function (t) {
                  if ("number" != typeof t) throw new TypeError("built-in math factory only accepts numbers");
                  return Number(t)
               }, t.add = function (t, n) {
                  return t + n
               }, t.sub = function (t, n) {
                  return t - n
               }, t.mul = function (t, n) {
                  return t * n
               }, t.div = function (t, n) {
                  return t / n
               }, t.mod = function (t, n) {
                  return t % n
               }, t.factorial = function (t) {
                  for (var n = 1, e = 2; e <= t; e += 1) n *= e;
                  return n
               }, t.nthRoot = function (t, n) {
                  var e = n < 0;
                  if (e && (n = -n), 0 === n) throw new Error("Root must be non-zero");
                  if (t < 0 && Math.abs(n) % 2 != 1) throw new Error("Root must be odd when a is negative.");
                  if (0 === t) return 0;
                  if (!isFinite(t)) return e ? 0 : t;
                  var r = Math.pow(Math.abs(t), 1 / n);
                  return r = t < 0 ? -r : r, e ? 1 / r : r
               }, t.logicalOR = function (t, n) {
                  return t || n
               }, t.logicalXOR = function (t, n) {
                  return t != n
               }, t.logicalAND = function (t, n) {
                  return t && n
               }, t.bitwiseOR = function (t, n) {
                  return t | n
               }, t.bitwiseXOR = function (t, n) {
                  return t ^ n
               }, t.bitwiseAND = function (t, n) {
                  return t & n
               }, t.lessThan = function (t, n) {
                  return t < n
               }, t.lessEqualThan = function (t, n) {
                  return t <= n
               }, t.greaterThan = function (t, n) {
                  return t > n
               }, t.greaterEqualThan = function (t, n) {
                  return t >= n
               }, t.equal = function (t, n) {
                  return t == n
               }, t.strictlyEqual = function (t, n) {
                  return t === n
               }, t.notEqual = function (t, n) {
                  return t != n
               }, t.strictlyNotEqual = function (t, n) {
                  return t !== n
               }, t.shiftRight = function (t, n) {
                  return t >> n
               }, t.shiftLeft = function (t, n) {
                  return t << n
               }, t.unsignedRightShift = function (t, n) {
                  return t >>> n
               }, t.negative = function (t) {
                  return -t
               }, t.positive = function (t) {
                  return t
               }, t
            }
         },
         9976: (t, n, e) => {
            "use strict";
            var r = e(2223),
               i = e(517)();

            function o(t) {
               Object.keys(t).forEach((function (n) {
                  var e = t[n];
                  t[n] = i.factory(e)
               }))
            }
            t.exports = function (t) {
               return (new r).setDefs({
                  $$processScope: o
               }).parse(t).compile(i)
            }, t.exports.math = i
         },
         5627: t => {
            t.exports = function (t, n, e) {
               return n < e ? t < n ? n : t > e ? e : t : t < e ? e : t > n ? n : t
            }
         },
         4822: t => {
            var n = !1;
            if ("undefined" != typeof Float64Array) {
               var e = new Float64Array(1),
                  r = new Uint32Array(e.buffer);
               e[0] = 1, n = !0, 1072693248 === r[1] ? (t.exports = function (t) {
                  return e[0] = t, [r[0], r[1]]
               }, t.exports.pack = function (t, n) {
                  return r[0] = t, r[1] = n, e[0]
               }, t.exports.lo = function (t) {
                  return e[0] = t, r[0]
               }, t.exports.hi = function (t) {
                  return e[0] = t, r[1]
               }) : 1072693248 === r[0] ? (t.exports = function (t) {
                  return e[0] = t, [r[1], r[0]]
               }, t.exports.pack = function (t, n) {
                  return r[1] = t, r[0] = n, e[0]
               }, t.exports.lo = function (t) {
                  return e[0] = t, r[1]
               }, t.exports.hi = function (t) {
                  return e[0] = t, r[0]
               }) : n = !1
            }
            if (!n) {
               var i = new Buffer(8);
               t.exports = function (t) {
                  return i.writeDoubleLE(t, 0, !0), [i.readUInt32LE(0, !0), i.readUInt32LE(4, !0)]
               }, t.exports.pack = function (t, n) {
                  return i.writeUInt32LE(t, 0, !0), i.writeUInt32LE(n, 4, !0), i.readDoubleLE(0, !0)
               }, t.exports.lo = function (t) {
                  return i.writeDoubleLE(t, 0, !0), i.readUInt32LE(0, !0)
               }, t.exports.hi = function (t) {
                  return i.writeDoubleLE(t, 0, !0), i.readUInt32LE(4, !0)
               }
            }
            t.exports.sign = function (n) {
               return t.exports.hi(n) >>> 31
            }, t.exports.exponent = function (n) {
               return (t.exports.hi(n) << 1 >>> 21) - 1023
            }, t.exports.fraction = function (n) {
               var e = t.exports.lo(n),
                  r = t.exports.hi(n),
                  i = 1048575 & r;
               return 2146435072 & r && (i += 1 << 20), [e, i]
            }, t.exports.denormalized = function (n) {
               return !(2146435072 & t.exports.hi(n))
            }
         },
         7187: t => {
            "use strict";
            var n, e = "object" == typeof Reflect ? Reflect : null,
               r = e && "function" == typeof e.apply ? e.apply : function (t, n, e) {
                  return Function.prototype.apply.call(t, n, e)
               };
            n = e && "function" == typeof e.ownKeys ? e.ownKeys : Object.getOwnPropertySymbols ? function (t) {
               return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
            } : function (t) {
               return Object.getOwnPropertyNames(t)
            };
            var i = Number.isNaN || function (t) {
               return t != t
            };

            function o() {
               o.init.call(this)
            }
            t.exports = o, t.exports.once = function (t, n) {
               return new Promise((function (e, r) {
                  function i(e) {
                     t.removeListener(n, o), r(e)
                  }

                  function o() {
                     "function" == typeof t.removeListener && t.removeListener("error", i), e([].slice.call(arguments))
                  }
                  y(t, n, o, {
                     once: !0
                  }), "error" !== n && function (t, n, e) {
                     "function" == typeof t.on && y(t, "error", n, {
                        once: !0
                     })
                  }(t, i)
               }))
            }, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
            var s = 10;

            function a(t) {
               if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
            }

            function u(t) {
               return void 0 === t._maxListeners ? o.defaultMaxListeners : t._maxListeners
            }

            function c(t, n, e, r) {
               var i, o, s, c;
               if (a(e), void 0 === (o = t._events) ? (o = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== o.newListener && (t.emit("newListener", n, e.listener ? e.listener : e), o = t._events), s = o[n]), void 0 === s) s = o[n] = e, ++t._eventsCount;
               else if ("function" == typeof s ? s = o[n] = r ? [e, s] : [s, e] : r ? s.unshift(e) : s.push(e), (i = u(t)) > 0 && s.length > i && !s.warned) {
                  s.warned = !0;
                  var l = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(n) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                  l.name = "MaxListenersExceededWarning", l.emitter = t, l.type = n, l.count = s.length, c = l, console && console.warn && console.warn(c)
               }
               return t
            }

            function l() {
               if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }

            function h(t, n, e) {
               var r = {
                     fired: !1,
                     wrapFn: void 0,
                     target: t,
                     type: n,
                     listener: e
                  },
                  i = l.bind(r);
               return i.listener = e, r.wrapFn = i, i
            }

            function f(t, n, e) {
               var r = t._events;
               if (void 0 === r) return [];
               var i = r[n];
               return void 0 === i ? [] : "function" == typeof i ? e ? [i.listener || i] : [i] : e ? function (t) {
                  for (var n = new Array(t.length), e = 0; e < n.length; ++e) n[e] = t[e].listener || t[e];
                  return n
               }(i) : d(i, i.length)
            }

            function p(t) {
               var n = this._events;
               if (void 0 !== n) {
                  var e = n[t];
                  if ("function" == typeof e) return 1;
                  if (void 0 !== e) return e.length
               }
               return 0
            }

            function d(t, n) {
               for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t[r];
               return e
            }

            function y(t, n, e, r) {
               if ("function" == typeof t.on) r.once ? t.once(n, e) : t.on(n, e);
               else {
                  if ("function" != typeof t.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
                  t.addEventListener(n, (function i(o) {
                     r.once && t.removeEventListener(n, i), e(o)
                  }))
               }
            }
            Object.defineProperty(o, "defaultMaxListeners", {
               enumerable: !0,
               get: function () {
                  return s
               },
               set: function (t) {
                  if ("number" != typeof t || t < 0 || i(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                  s = t
               }
            }), o.init = function () {
               void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, o.prototype.setMaxListeners = function (t) {
               if ("number" != typeof t || t < 0 || i(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
               return this._maxListeners = t, this
            }, o.prototype.getMaxListeners = function () {
               return u(this)
            }, o.prototype.emit = function (t) {
               for (var n = [], e = 1; e < arguments.length; e++) n.push(arguments[e]);
               var i = "error" === t,
                  o = this._events;
               if (void 0 !== o) i = i && void 0 === o.error;
               else if (!i) return !1;
               if (i) {
                  var s;
                  if (n.length > 0 && (s = n[0]), s instanceof Error) throw s;
                  var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                  throw a.context = s, a
               }
               var u = o[t];
               if (void 0 === u) return !1;
               if ("function" == typeof u) r(u, this, n);
               else {
                  var c = u.length,
                     l = d(u, c);
                  for (e = 0; e < c; ++e) r(l[e], this, n)
               }
               return !0
            }, o.prototype.addListener = function (t, n) {
               return c(this, t, n, !1)
            }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function (t, n) {
               return c(this, t, n, !0)
            }, o.prototype.once = function (t, n) {
               return a(n), this.on(t, h(this, t, n)), this
            }, o.prototype.prependOnceListener = function (t, n) {
               return a(n), this.prependListener(t, h(this, t, n)), this
            }, o.prototype.removeListener = function (t, n) {
               var e, r, i, o, s;
               if (a(n), void 0 === (r = this._events)) return this;
               if (void 0 === (e = r[t])) return this;
               if (e === n || e.listener === n) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[t], r.removeListener && this.emit("removeListener", t, e.listener || n));
               else if ("function" != typeof e) {
                  for (i = -1, o = e.length - 1; o >= 0; o--)
                     if (e[o] === n || e[o].listener === n) {
                        s = e[o].listener, i = o;
                        break
                     } if (i < 0) return this;
                  0 === i ? e.shift() : function (t, n) {
                     for (; n + 1 < t.length; n++) t[n] = t[n + 1];
                     t.pop()
                  }(e, i), 1 === e.length && (r[t] = e[0]), void 0 !== r.removeListener && this.emit("removeListener", t, s || n)
               }
               return this
            }, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function (t) {
               var n, e, r;
               if (void 0 === (e = this._events)) return this;
               if (void 0 === e.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== e[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete e[t]), this;
               if (0 === arguments.length) {
                  var i, o = Object.keys(e);
                  for (r = 0; r < o.length; ++r) "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
                  return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
               }
               if ("function" == typeof (n = e[t])) this.removeListener(t, n);
               else if (void 0 !== n)
                  for (r = n.length - 1; r >= 0; r--) this.removeListener(t, n[r]);
               return this
            }, o.prototype.listeners = function (t) {
               return f(this, t, !0)
            }, o.prototype.rawListeners = function (t) {
               return f(this, t, !1)
            }, o.listenerCount = function (t, n) {
               return "function" == typeof t.listenerCount ? t.listenerCount(n) : p.call(t, n)
            }, o.prototype.listenerCount = p, o.prototype.eventNames = function () {
               return this._eventsCount > 0 ? n(this._events) : []
            }
         },
         4470: t => {
            "use strict";
            var n = Object.prototype.hasOwnProperty,
               e = Object.prototype.toString,
               r = Object.defineProperty,
               i = Object.getOwnPropertyDescriptor,
               o = function (t) {
                  return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === e.call(t)
               },
               s = function (t) {
                  if (!t || "[object Object]" !== e.call(t)) return !1;
                  var r, i = n.call(t, "constructor"),
                     o = t.constructor && t.constructor.prototype && n.call(t.constructor.prototype, "isPrototypeOf");
                  if (t.constructor && !i && !o) return !1;
                  for (r in t);
                  return void 0 === r || n.call(t, r)
               },
               a = function (t, n) {
                  r && "__proto__" === n.name ? r(t, n.name, {
                     enumerable: !0,
                     configurable: !0,
                     value: n.newValue,
                     writable: !0
                  }) : t[n.name] = n.newValue
               },
               u = function (t, e) {
                  if ("__proto__" === e) {
                     if (!n.call(t, e)) return;
                     if (i) return i(t, e).value
                  }
                  return t[e]
               };
            t.exports = function t() {
               var n, e, r, i, c, l, h = arguments[0],
                  f = 1,
                  p = arguments.length,
                  d = !1;
               for ("boolean" == typeof h && (d = h, h = arguments[1] || {}, f = 2), (null == h || "object" != typeof h && "function" != typeof h) && (h = {}); f < p; ++f)
                  if (null != (n = arguments[f]))
                     for (e in n) r = u(h, e), h !== (i = u(n, e)) && (d && i && (s(i) || (c = o(i))) ? (c ? (c = !1, l = r && o(r) ? r : []) : l = r && s(r) ? r : {}, a(h, {
                        name: e,
                        newValue: t(d, l, i)
                     })) : void 0 !== i && a(h, {
                        name: e,
                        newValue: i
                     }));
               return h
            }
         },
         8867: (t, n, e) => {
            "use strict";
            t.exports = e(2320)
         },
         3380: t => {
            "use strict";
            t.exports = function (t) {
               t.mod = t.fmod, t.lessThan = t.lt, t.lessEqualThan = t.leq, t.greaterThan = t.gt, t.greaterEqualThan = t.geq, t.strictlyEqual = t.equal, t.strictlyNotEqual = t.notEqual, t.logicalAND = function (t, n) {
                  return t && n
               }, t.logicalXOR = function (t, n) {
                  return t ^ n
               }, t.logicalOR = function (t, n) {
                  return t || n
               }
            }
         },
         2320: (t, n, e) => {
            "use strict";
            const r = e(813),
               i = e(9851).ZP;

            function o(t) {
               Object.keys(t).forEach((function (n) {
                  const e = t[n];
                  "number" == typeof e || Array.isArray(e) ? t[n] = i.factory(e) : "object" == typeof e && "lo" in e && "hi" in e && (t[n] = i.factory(e.lo, e.hi))
               }))
            }
            e(3380)(i), t.exports = function (t) {
               return (new r).setDefs({
                  $$processScope: o
               }).parse(t).compile(i)
            }, t.exports.policies = e(4186)(i), t.exports.Interval = i
         },
         4186: t => {
            "use strict";
            t.exports = function (t) {
               return {
                  disableRounding: function () {
                     t.round.disable()
                  },
                  enableRounding: function () {
                     t.round.enable()
                  }
               }
            }
         },
         813: (t, n, e) => {
            "use strict";
            t.exports = e(7076)
         },
         7076: (t, n, e) => {
            "use strict";
            var r = e(9213).Parser,
               i = e(1046),
               o = e(4470);

            function s(t, n) {
               this.statements = [], this.defs = n || {}, this.interpreter = new i(this, t)
            }
            s.prototype.setDefs = function (t) {
               return this.defs = o(this.defs, t), this
            }, s.prototype.compile = function (t) {
               var n = this;
               if (!t || "object" != typeof t && "function" != typeof t) throw TypeError("namespace must be an object");
               if ("function" != typeof t.factory) throw TypeError("namespace.factory must be a function");
               this.defs.ns = t, this.defs.$$mathCodegen = {
                  getProperty: function (t, e, r) {
                     function i(t) {
                        return n.interpreter.options.applyFactoryToScope && "function" != typeof t ? r.factory(t) : t
                     }
                     if (t in e) return i(e[t]);
                     if (t in r) return i(r[t]);
                     throw SyntaxError('symbol "' + t + '" is undefined')
                  },
                  functionProxy: function (t, n) {
                     if ("function" != typeof t) throw SyntaxError('symbol "' + n + '" must be a function');
                     return t
                  }
               }, this.defs.$$processScope = this.defs.$$processScope || function () {};
               var e = Object.keys(this.defs).map((function (t) {
                  return "var " + t + ' = defs["' + t + '"]'
               }));
               if (!this.statements.length) throw Error("there are no statements saved in this generator, make sure you parse an expression before compiling it");
               this.statements[this.statements.length - 1] = "return " + this.statements[this.statements.length - 1];
               var r = this.statements.join(";"),
                  i = e.join("\n") + "\n" + ["return {", "  eval: function (scope) {", "    scope = scope || {}", "    $$processScope(scope)", "    " + r, "  },", "  code: '" + r + "'", "}"].join("\n");
               return new Function("defs", i)(this.defs)
            }, s.prototype.parse = function (t) {
               var n = this,
                  e = (new r).parse(t);
               return this.statements = e.blocks.map((function (t) {
                  return n.interpreter.next(t)
               })), this
            }, t.exports = s
         },
         1046: (t, n, e) => {
            "use strict";
            var r = e(4470),
               i = {
                  ArrayNode: e(5483),
                  AssignmentNode: e(446),
                  ConditionalNode: e(3865),
                  ConstantNode: e(9094),
                  FunctionNode: e(73),
                  OperatorNode: e(1715),
                  SymbolNode: e(5835),
                  UnaryNode: e(74)
               },
               o = function (t, n) {
                  this.owner = t, this.options = r({
                     factory: "ns.factory",
                     raw: !1,
                     rawArrayExpressionElements: !0,
                     rawCallExpressionElements: !1,
                     applyFactoryToScope: !1
                  }, n)
               };
            r(o.prototype, i), o.prototype.next = function (t) {
               if (!(t.type in this)) throw new TypeError("the node type " + t.type + " is not implemented");
               return this[t.type](t)
            }, o.prototype.rawify = function (t, n) {
               var e = this.options.raw;
               t && (this.options.raw = !0), n(), t && (this.options.raw = e)
            }, t.exports = o
         },
         8684: t => {
            "use strict";
            t.exports = {
               "+": "add",
               "-": "sub",
               "*": "mul",
               "/": "div",
               "^": "pow",
               "%": "mod",
               "!": "factorial",
               "|": "bitwiseOR",
               "^|": "bitwiseXOR",
               "&": "bitwiseAND",
               "||": "logicalOR",
               xor: "logicalXOR",
               "&&": "logicalAND",
               "<": "lessThan",
               ">": "greaterThan",
               "<=": "lessEqualThan",
               ">=": "greaterEqualThan",
               "===": "strictlyEqual",
               "==": "equal",
               "!==": "strictlyNotEqual",
               "!=": "notEqual",
               ">>": "shiftRight",
               "<<": "shiftLeft",
               ">>>": "unsignedRightShift"
            }
         },
         1681: t => {
            "use strict";
            t.exports = {
               "+": "positive",
               "-": "negative",
               "~": "oneComplement"
            }
         },
         5483: t => {
            "use strict";
            t.exports = function (t) {
               var n = this,
                  e = [];
               this.rawify(this.options.rawArrayExpressionElements, (function () {
                  e = t.nodes.map((function (t) {
                     return n.next(t)
                  }))
               }));
               var r = "[" + e.join(",") + "]";
               return this.options.raw ? r : this.options.factory + "(" + r + ")"
            }
         },
         446: t => {
            "use strict";
            t.exports = function (t) {
               return 'scope["' + t.name + '"] = ' + this.next(t.expr)
            }
         },
         3865: t => {
            "use strict";
            t.exports = function (t) {
               return "(!!(" + this.next(t.condition) + ") ? (" + this.next(t.trueExpr) + ") : (" + this.next(t.falseExpr) + ") )"
            }
         },
         9094: t => {
            "use strict";
            t.exports = function (t) {
               return this.options.raw ? t.value : this.options.factory + "(" + t.value + ")"
            }
         },
         73: (t, n, e) => {
            "use strict";
            var r = e(9213).nodeTypes.SymbolNode,
               i = function (t) {
                  return "$$mathCodegen.functionProxy(" + this.next(new r(t.name)) + ', "' + t.name + '")'
               };
            t.exports = function (t) {
               var n = this,
                  e = i.call(this, t),
                  r = [];
               return this.rawify(this.options.rawCallExpressionElements, (function () {
                  r = t.args.map((function (t) {
                     return n.next(t)
                  }))
               })), e + "(" + r.join(", ") + ")"
            }, t.exports.functionProxy = i
         },
         1715: (t, n, e) => {
            "use strict";
            var r = e(8684);
            t.exports = function (t) {
               if (this.options.raw) return ["(" + this.next(t.args[0]), t.op, this.next(t.args[1]) + ")"].join(" ");
               var n = r[t.op];
               if (!n) throw TypeError("unidentified operator");
               return this.FunctionNode({
                  name: n,
                  args: t.args
               })
            }
         },
         5835: t => {
            "use strict";
            t.exports = function (t) {
               return '$$mathCodegen.getProperty("' + t.name + '", scope, ns)'
            }
         },
         74: (t, n, e) => {
            "use strict";
            var r = e(1681);
            t.exports = function (t) {
               if (this.options.raw) return t.op + this.next(t.argument);
               if (!(t.op in r)) throw new SyntaxError(t.op + " not implemented");
               var n = r[t.op];
               return this.FunctionNode({
                  name: n,
                  args: [t.argument]
               })
            }
         },
         9851: (t, n, e) => {
            "use strict";
            e.d(n, {
               ZP: () => Ct
            });
            var r = {};
            e.r(r), e.d(r, {
               hasInterval: () => y,
               hasValue: () => d,
               intervalsOverlap: () => m,
               isEmpty: () => l,
               isInterval: () => c,
               isSingleton: () => f,
               isWhole: () => h,
               zeroIn: () => p
            });
            var i = {};
            e.r(i), e.d(i, {
               almostEqual: () => D,
               assertIncludes: () => H,
               equal: () => L,
               geq: () => X,
               greaterEqualThan: () => q,
               greaterThan: () => Y,
               gt: () => z,
               leq: () => U,
               lessEqualThan: () => R,
               lessThan: () => j,
               lt: () => F,
               notEqual: () => $
            });
            var o = {};
            e.r(o), e.d(o, {
               add: () => B,
               div: () => K,
               divide: () => Q,
               mul: () => J,
               multiply: () => G,
               negative: () => nt,
               positive: () => tt,
               sub: () => W,
               subtract: () => V
            });
            var s = {};
            e.r(s), e.d(s, {
               fmod: () => et,
               multiplicativeInverse: () => rt,
               nthRoot: () => st,
               pow: () => it,
               sqrt: () => ot
            });
            var a = {};
            e.r(a), e.d(a, {
               LOG_EXP_10: () => lt,
               LOG_EXP_2: () => ft,
               abs: () => xt,
               clone: () => Mt,
               difference: () => _t,
               exp: () => at,
               hull: () => dt,
               intersection: () => yt,
               ln: () => ct,
               log: () => ut,
               log10: () => ht,
               log2: () => pt,
               max: () => wt,
               min: () => bt,
               union: () => mt,
               wid: () => gt,
               width: () => vt
            });
            var u = {};

            function c(t) {
               return "object" == typeof t && "number" == typeof t.lo && "number" == typeof t.hi
            }

            function l(t) {
               return t.lo > t.hi
            }

            function h(t) {
               return t.lo === -1 / 0 && t.hi === 1 / 0
            }

            function f(t) {
               return t.lo === t.hi
            }

            function p(t) {
               return d(t, 0)
            }

            function d(t, n) {
               return !l(t) && t.lo <= n && n <= t.hi
            }

            function y(t, n) {
               return !!l(t) || !l(n) && n.lo <= t.lo && t.hi <= n.hi
            }

            function m(t, n) {
               return !l(t) && !l(n) && (t.lo <= n.lo && n.lo <= t.hi || n.lo <= t.lo && t.lo <= n.hi)
            }
            e.r(u), e.d(u, {
               acos: () => Pt,
               asin: () => St,
               atan: () => Ot,
               cos: () => kt,
               cosh: () => It,
               sin: () => Nt,
               sinh: () => Lt,
               tan: () => At,
               tanh: () => Zt
            });
            var _ = e(3093),
               v = e.n(_);

            function g(t) {
               return t
            }

            function x(t) {
               return t === 1 / 0 ? t : v()(t, -1 / 0)
            }

            function w(t) {
               return t === -1 / 0 ? t : v()(t, 1 / 0)
            }

            function b(t) {
               return t < 0 ? Math.ceil(t) : Math.floor(t)
            }
            const M = {
                  prev: x,
                  next: w
               },
               T = {
                  safePrev: x,
                  safeNext: w,
                  prev: t => M.prev(t),
                  next: t => M.next(t),
                  addLo: (t, n) => T.prev(t + n),
                  addHi: (t, n) => T.next(t + n),
                  subLo: (t, n) => T.prev(t - n),
                  subHi: (t, n) => T.next(t - n),
                  mulLo: (t, n) => T.prev(t * n),
                  mulHi: (t, n) => T.next(t * n),
                  divLo: (t, n) => T.prev(t / n),
                  divHi: (t, n) => T.next(t / n),
                  intLo: t => b(T.prev(t)),
                  intHi: t => b(T.next(t)),
                  logLo: t => T.prev(Math.log(t)),
                  logHi: t => T.next(Math.log(t)),
                  expLo: t => T.prev(Math.exp(t)),
                  expHi: t => T.next(Math.exp(t)),
                  sinLo: t => T.prev(Math.sin(t)),
                  sinHi: t => T.next(Math.sin(t)),
                  cosLo: t => T.prev(Math.cos(t)),
                  cosHi: t => T.next(Math.cos(t)),
                  tanLo: t => T.prev(Math.tan(t)),
                  tanHi: t => T.next(Math.tan(t)),
                  asinLo: t => T.prev(Math.asin(t)),
                  asinHi: t => T.next(Math.asin(t)),
                  acosLo: t => T.prev(Math.acos(t)),
                  acosHi: t => T.next(Math.acos(t)),
                  atanLo: t => T.prev(Math.atan(t)),
                  atanHi: t => T.next(Math.atan(t)),
                  sinhLo: t => T.prev(Math.sinh(t)),
                  sinhHi: t => T.next(Math.sinh(t)),
                  coshLo: t => T.prev(Math.cosh(t)),
                  coshHi: t => T.next(Math.cosh(t)),
                  tanhLo: t => T.prev(Math.tanh(t)),
                  tanhHi: t => T.next(Math.tanh(t)),
                  powLo(t, n) {
                     if (n % 1 != 0) return T.prev(Math.pow(t, n));
                     let e = 1 == (1 & n) ? t : 1;
                     for (n >>= 1; n > 0;) t = T.mulLo(t, t), 1 == (1 & n) && (e = T.mulLo(t, e)), n >>= 1;
                     return e
                  },
                  powHi(t, n) {
                     if (n % 1 != 0) return T.next(Math.pow(t, n));
                     let e = 1 == (1 & n) ? t : 1;
                     for (n >>= 1; n > 0;) t = T.mulHi(t, t), 1 == (1 & n) && (e = T.mulHi(t, e)), n >>= 1;
                     return e
                  },
                  sqrtLo: t => T.prev(Math.sqrt(t)),
                  sqrtHi: t => T.next(Math.sqrt(t)),
                  disable() {
                     M.next = M.prev = g
                  },
                  enable() {
                     M.next = w, M.prev = x
                  }
               },
               E = T;
            class k {
               constructor(t, n) {
                  if (this.lo = 0, this.hi = 0, !(this instanceof k)) return console.log("calling with new"), console.log(t, n), new k(t, n);
                  if (void 0 !== t && void 0 !== n) {
                     if (c(t)) {
                        if (!f(t)) throw new TypeError("Interval: interval `lo` must be a singleton");
                        t = t.lo
                     }
                     if (c(n)) {
                        if (!f(n)) throw TypeError("Interval: interval `hi` must be a singleton");
                        n = n.hi
                     }
                  } else {
                     if (void 0 !== t) return Array.isArray(t) ? new N(t[0], t[1]) : new N(t, t);
                     t = n = 0
                  }
                  this.assign(t, n)
               }
               singleton(t) {
                  return this.set(t, t)
               }
               bounded(t, n) {
                  return this.set(E.prev(t), E.next(n))
               }
               boundedSingleton(t) {
                  return this.bounded(t, t)
               }
               set(t, n) {
                  return this.lo = t, this.hi = n, this
               }
               assign(t, n) {
                  if ("number" != typeof t || "number" != typeof n) throw TypeError("Interval#assign: arguments must be numbers");
                  return isNaN(t) || isNaN(n) || t > n ? this.setEmpty() : this.set(t, n)
               }
               setEmpty() {
                  return this.set(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)
               }
               setWhole() {
                  return this.set(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
               }
               open(t, n) {
                  return this.assign(E.safeNext(t), E.safePrev(n))
               }
               halfOpenLeft(t, n) {
                  return this.assign(E.safeNext(t), n)
               }
               halfOpenRight(t, n) {
                  return this.assign(t, E.safePrev(n))
               }
               toArray() {
                  return [this.lo, this.hi]
               }
               clone() {
                  return (new N).set(this.lo, this.hi)
               }
            }
            const N = function (t) {
               function n() {
                  for (var n = arguments.length, e = Array(n), r = 0; r < n; r++) e[r] = arguments[r];
                  return new(Function.prototype.bind.apply(t, [null].concat(e)))
               }
               return n.prototype = t.prototype, n
            }(k);
            N.factory = N;
            const A = 3.141592653589793,
               S = 3.1415926535897936,
               P = {
                  PI_LOW: A,
                  PI_HIGH: S,
                  PI_HALF_LOW: A / 2,
                  PI_HALF_HIGH: S / 2,
                  PI_TWICE_LOW: 2 * A,
                  PI_TWICE_HIGH: 2 * S,
                  get E() {
                     return new N(E.prev(Math.E), E.next(Math.E))
                  },
                  get PI() {
                     return new N(A, S)
                  },
                  get PI_HALF() {
                     return new N(P.PI_HALF_LOW, P.PI_HALF_HIGH)
                  },
                  get PI_TWICE() {
                     return new N(P.PI_TWICE_LOW, P.PI_TWICE_HIGH)
                  },
                  get ZERO() {
                     return new N(0)
                  },
                  get ONE() {
                     return new N(1)
                  },
                  get WHOLE() {
                     return (new N).setWhole()
                  },
                  get EMPTY() {
                     return (new N).setEmpty()
                  }
               },
               O = P;

            function L(t, n) {
               return l(t) ? l(n) : !l(n) && t.lo === n.lo && t.hi === n.hi
            }
            const I = 1e-7;

            function Z(t, n) {
               if (!t) throw new Error(n || "assertion failed")
            }

            function C(t, n) {
               if (!isFinite(t)) return Z(t === n, `[Infinity] expected ${t} to be ${n}`);
               Z(Math.abs(t - n) < I, `expected ${t} to be close to ${n}`)
            }

            function D(t, n) {
               t = Array.isArray(t) ? t : t.toArray(), n = Array.isArray(n) ? n : n.toArray(), C(t[0], n[0]), C(t[1], n[1])
            }

            function H(t, n) {
               D(t, n), t = Array.isArray(t) ? t : t.toArray(), n = Array.isArray(n) ? n : n.toArray(), Z(t[0] <= n[0], `${t[0]} should be less/equal than ${n[0]}`), Z(n[1] <= t[1], `${n[1]} should be less/equal than ${t[1]}`)
            }

            function $(t, n) {
               return l(t) ? !l(n) : l(n) || t.hi < n.lo || t.lo > n.hi
            }

            function j(t, n) {
               return !l(t) && !l(n) && t.hi < n.lo
            }
            const F = j;

            function Y(t, n) {
               return !l(t) && !l(n) && t.lo > n.hi
            }
            const z = Y;

            function R(t, n) {
               return !l(t) && !l(n) && t.hi <= n.lo
            }
            const U = R;

            function q(t, n) {
               return !l(t) && !l(n) && t.lo >= n.hi
            }
            const X = q;

            function B(t, n) {
               return new N(E.addLo(t.lo, n.lo), E.addHi(t.hi, n.hi))
            }

            function V(t, n) {
               return new N(E.subLo(t.lo, n.hi), E.subHi(t.hi, n.lo))
            }
            const W = V;

            function G(t, n) {
               if (l(t) || l(n)) return O.EMPTY;
               const e = t.lo,
                  r = t.hi,
                  i = n.lo,
                  o = n.hi,
                  s = new N;
               return e < 0 ? r > 0 ? i < 0 ? o > 0 ? (s.lo = Math.min(E.mulLo(e, o), E.mulLo(r, i)), s.hi = Math.max(E.mulHi(e, i), E.mulHi(r, o))) : (s.lo = E.mulLo(r, i), s.hi = E.mulHi(e, i)) : o > 0 ? (s.lo = E.mulLo(e, o), s.hi = E.mulHi(r, o)) : (s.lo = 0, s.hi = 0) : i < 0 ? o > 0 ? (s.lo = E.mulLo(e, o), s.hi = E.mulHi(e, i)) : (s.lo = E.mulLo(r, o), s.hi = E.mulHi(e, i)) : o > 0 ? (s.lo = E.mulLo(e, o), s.hi = E.mulHi(r, i)) : (s.lo = 0, s.hi = 0) : r > 0 ? i < 0 ? o > 0 ? (s.lo = E.mulLo(r, i), s.hi = E.mulHi(r, o)) : (s.lo = E.mulLo(r, i), s.hi = E.mulHi(e, o)) : o > 0 ? (s.lo = E.mulLo(e, i), s.hi = E.mulHi(r, o)) : (s.lo = 0, s.hi = 0) : (s.lo = 0, s.hi = 0), s
            }
            const J = G;

            function Q(t, n) {
               return l(t) || l(n) ? O.EMPTY : p(n) ? 0 !== n.lo ? 0 !== n.hi ? function (t) {
                  return 0 === t.lo && 0 === t.hi ? t : O.WHOLE
               }(t) : function (t, n) {
                  return 0 === t.lo && 0 === t.hi ? t : p(t) ? O.WHOLE : t.hi < 0 ? new N(E.divLo(t.hi, n), Number.POSITIVE_INFINITY) : new N(Number.NEGATIVE_INFINITY, E.divHi(t.lo, n))
               }(t, n.lo) : 0 !== n.hi ? function (t, n) {
                  return 0 === t.lo && 0 === t.hi ? t : p(t) ? O.WHOLE : t.hi < 0 ? new N(Number.NEGATIVE_INFINITY, E.divHi(t.hi, n)) : new N(E.divLo(t.lo, n), Number.POSITIVE_INFINITY)
               }(t, n.hi) : O.EMPTY : function (t, n) {
                  const e = t.lo,
                     r = t.hi,
                     i = n.lo,
                     o = n.hi,
                     s = new N;
                  return r < 0 ? o < 0 ? (s.lo = E.divLo(r, i), s.hi = E.divHi(e, o)) : (s.lo = E.divLo(e, i), s.hi = E.divHi(r, o)) : e < 0 ? o < 0 ? (s.lo = E.divLo(r, o), s.hi = E.divHi(e, o)) : (s.lo = E.divLo(e, i), s.hi = E.divHi(r, i)) : o < 0 ? (s.lo = E.divLo(r, o), s.hi = E.divHi(e, i)) : (s.lo = E.divLo(e, o), s.hi = E.divHi(r, i)), s
               }(t, n)
            }
            const K = Q;

            function tt(t) {
               return new N(t.lo, t.hi)
            }

            function nt(t) {
               return new N(-t.hi, -t.lo)
            }

            function et(t, n) {
               if (l(t) || l(n)) return O.EMPTY;
               const e = t.lo < 0 ? n.lo : n.hi;
               let r = t.lo / e;
               return r = r < 0 ? Math.ceil(r) : Math.floor(r), W(t, J(n, new N(r)))
            }

            function rt(t) {
               return l(t) ? O.EMPTY : p(t) ? 0 !== t.lo ? 0 !== t.hi ? O.WHOLE : new N(Number.NEGATIVE_INFINITY, E.divHi(1, t.lo)) : 0 !== t.hi ? new N(E.divLo(1, t.hi), Number.POSITIVE_INFINITY) : O.EMPTY : new N(E.divLo(1, t.hi), E.divHi(1, t.lo))
            }

            function it(t, n) {
               if (l(t)) return O.EMPTY;
               if ("object" == typeof n) {
                  if (!f(n)) return O.EMPTY;
                  n = n.lo
               }
               if (0 === n) return 0 === t.lo && 0 === t.hi ? O.EMPTY : O.ONE;
               if (n < 0) return it(rt(t), -n);
               if (Number.isSafeInteger(n)) {
                  if (t.hi < 0) {
                     const e = E.powLo(-t.hi, n),
                        r = E.powHi(-t.lo, n);
                     return 1 == (1 & n) ? new N(-r, -e) : new N(e, r)
                  }
                  return t.lo < 0 ? 1 == (1 & n) ? new N(-E.powLo(-t.lo, n), E.powHi(t.hi, n)) : new N(0, E.powHi(Math.max(-t.lo, t.hi), n)) : new N(E.powLo(t.lo, n), E.powHi(t.hi, n))
               }
               return console.warn("power is not an integer, you should use nth-root instead, returning an empty interval"), O.EMPTY
            }

            function ot(t) {
               return st(t, 2)
            }

            function st(t, n) {
               if (l(t) || n < 0) return O.EMPTY;
               if ("object" == typeof n) {
                  if (!f(n)) return O.EMPTY;
                  n = n.lo
               }
               const e = 1 / n;
               if (t.hi < 0) {
                  if (Number.isSafeInteger(n) && 1 == (1 & n)) {
                     const n = E.powHi(-t.lo, e),
                        r = E.powLo(-t.hi, e);
                     return new N(-n, -r)
                  }
                  return O.EMPTY
               }
               if (t.lo < 0) {
                  const r = E.powHi(t.hi, e);
                  if (Number.isSafeInteger(n) && 1 == (1 & n)) {
                     const n = -E.powHi(-t.lo, e);
                     return new N(n, r)
                  }
                  return new N(0, r)
               }
               return new N(E.powLo(t.lo, e), E.powHi(t.hi, e))
            }

            function at(t) {
               return l(t) ? O.EMPTY : new N(E.expLo(t.lo), E.expHi(t.hi))
            }

            function ut(t) {
               if (l(t)) return O.EMPTY;
               const n = t.lo <= 0 ? Number.NEGATIVE_INFINITY : E.logLo(t.lo);
               return new N(n, E.logHi(t.hi))
            }
            const ct = ut,
               lt = ut(new N(10, 10));

            function ht(t) {
               return l(t) ? O.EMPTY : K(ut(t), lt)
            }
            const ft = ut(new N(2, 2));

            function pt(t) {
               return l(t) ? O.EMPTY : K(ut(t), ft)
            }

            function dt(t, n) {
               const e = l(t),
                  r = l(n);
               return e && r ? O.EMPTY : e ? n.clone() : r ? t.clone() : new N(Math.min(t.lo, n.lo), Math.max(t.hi, n.hi))
            }

            function yt(t, n) {
               if (l(t) || l(n)) return O.EMPTY;
               const e = Math.max(t.lo, n.lo),
                  r = Math.min(t.hi, n.hi);
               return e <= r ? new N(e, r) : O.EMPTY
            }

            function mt(t, n) {
               if (!m(t, n)) throw Error("Interval#union: intervals do not overlap");
               return new N(Math.min(t.lo, n.lo), Math.max(t.hi, n.hi))
            }

            function _t(t, n) {
               if (l(t) || h(n)) return O.EMPTY;
               if (m(t, n)) {
                  if (t.lo < n.lo && n.hi < t.hi) throw Error("Interval.difference: difference creates multiple intervals");
                  return n.lo <= t.lo && n.hi === 1 / 0 || n.hi >= t.hi && n.lo === -1 / 0 ? O.EMPTY : n.lo <= t.lo ? (new N).halfOpenLeft(n.hi, t.hi) : (new N).halfOpenRight(t.lo, n.lo)
               }
               return t.clone()
            }

            function vt(t) {
               return l(t) ? 0 : E.subHi(t.hi, t.lo)
            }
            const gt = vt;

            function xt(t) {
               return l(t) || h(t) ? O.EMPTY : t.lo >= 0 ? t.clone() : t.hi <= 0 ? nt(t) : new N(0, Math.max(-t.lo, t.hi))
            }

            function wt(t, n) {
               const e = l(t),
                  r = l(n);
               return e && r ? O.EMPTY : e ? n.clone() : r ? t.clone() : new N(Math.max(t.lo, n.lo), Math.max(t.hi, n.hi))
            }

            function bt(t, n) {
               const e = l(t),
                  r = l(n);
               return e && r ? O.EMPTY : e ? n.clone() : r ? t.clone() : new N(Math.min(t.lo, n.lo), Math.min(t.hi, n.hi))
            }

            function Mt(t) {
               return (new N).set(t.lo, t.hi)
            }

            function Tt(t) {
               return !isFinite(t.lo) && t.lo === t.hi
            }

            function Et(t) {
               if (t.lo < 0)
                  if (t.lo === -1 / 0) t.lo = 0, t.hi = 1 / 0;
                  else {
                     const n = Math.ceil(-t.lo / O.PI_TWICE_LOW);
                     t.lo += O.PI_TWICE_LOW * n, t.hi += O.PI_TWICE_LOW * n
                  } return t
            }

            function kt(t) {
               if (l(t) || Tt(t)) return O.EMPTY;
               const n = (new N).set(t.lo, t.hi);
               Et(n);
               const e = O.PI_TWICE,
                  r = et(n, e);
               if (vt(r) >= e.lo) return new N(-1, 1);
               if (r.lo >= O.PI_HIGH) return nt(kt(W(r, O.PI)));
               const i = r.lo,
                  o = r.hi,
                  s = E.cosLo(o),
                  a = E.cosHi(i);
               return o <= O.PI_LOW ? new N(s, a) : o <= e.lo ? new N(-1, Math.max(s, a)) : new N(-1, 1)
            }

            function Nt(t) {
               return l(t) || Tt(t) ? O.EMPTY : kt(W(t, O.PI_HALF))
            }

            function At(t) {
               if (l(t) || Tt(t)) return O.EMPTY;
               const n = (new N).set(t.lo, t.hi);
               Et(n);
               const e = O.PI;
               let r = et(n, e);
               return r.lo >= O.PI_HALF_LOW && (r = W(r, e)), r.lo <= -O.PI_HALF_LOW || r.hi >= O.PI_HALF_LOW ? O.WHOLE : new N(E.tanLo(r.lo), E.tanHi(r.hi))
            }

            function St(t) {
               if (l(t) || t.hi < -1 || t.lo > 1) return O.EMPTY;
               const n = t.lo <= -1 ? -O.PI_HALF_HIGH : E.asinLo(t.lo),
                  e = t.hi >= 1 ? O.PI_HALF_HIGH : E.asinHi(t.hi);
               return new N(n, e)
            }

            function Pt(t) {
               if (l(t) || t.hi < -1 || t.lo > 1) return O.EMPTY;
               const n = t.hi >= 1 ? 0 : E.acosLo(t.hi),
                  e = t.lo <= -1 ? O.PI_HIGH : E.acosHi(t.lo);
               return new N(n, e)
            }

            function Ot(t) {
               return l(t) ? O.EMPTY : new N(E.atanLo(t.lo), E.atanHi(t.hi))
            }

            function Lt(t) {
               return l(t) ? O.EMPTY : new N(E.sinhLo(t.lo), E.sinhHi(t.hi))
            }

            function It(t) {
               return l(t) ? O.EMPTY : t.hi < 0 ? new N(E.coshLo(t.hi), E.coshHi(t.lo)) : t.lo >= 0 ? new N(E.coshLo(t.lo), E.coshHi(t.hi)) : new N(1, E.coshHi(-t.lo > t.hi ? t.lo : t.hi))
            }

            function Zt(t) {
               return l(t) ? O.EMPTY : new N(E.tanhLo(t.lo), E.tanhHi(t.hi))
            }
            const Ct = Object.assign(N, O, E, a, r, i, o, s, u, {
               round: E
            })
         },
         2223: (t, n, e) => {
            "use strict";
            t.exports = e(3829)
         },
         3829: (t, n, e) => {
            "use strict";
            var r = e(9213).Parser,
               i = e(6009),
               o = e(4470);

            function s(t, n) {
               this.statements = [], this.defs = n || {}, this.interpreter = new i(this, t)
            }
            s.prototype.setDefs = function (t) {
               return this.defs = o(this.defs, t), this
            }, s.prototype.compile = function (t) {
               if (!t || "object" != typeof t && "function" != typeof t) throw TypeError("namespace must be an object");
               if ("function" != typeof t.factory) throw TypeError("namespace.factory must be a function");
               this.defs.ns = t, this.defs.$$mathCodegen = {
                  getProperty: function (t, n, e) {
                     if (t in n) return n[t];
                     if (t in e) return e[t];
                     throw SyntaxError('symbol "' + t + '" is undefined')
                  },
                  functionProxy: function (t, n) {
                     if ("function" != typeof t) throw SyntaxError('symbol "' + n + '" must be a function');
                     return t
                  }
               }, this.defs.$$processScope = this.defs.$$processScope || function () {};
               var n = Object.keys(this.defs).map((function (t) {
                  return "var " + t + ' = defs["' + t + '"]'
               }));
               if (!this.statements.length) throw Error("there are no statements saved in this generator, make sure you parse an expression before compiling it");
               this.statements[this.statements.length - 1] = "return " + this.statements[this.statements.length - 1];
               var e = this.statements.join(";"),
                  r = n.join("\n") + "\n" + ["return {", "  eval: function (scope) {", "    scope = scope || {}", "    $$processScope(scope)", "    " + e, "  },", "  code: '" + e + "'", "}"].join("\n");
               return new Function("defs", r)(this.defs)
            }, s.prototype.parse = function (t) {
               var n = this,
                  e = (new r).parse(t);
               return this.statements = e.blocks.map((function (t) {
                  return n.interpreter.next(t)
               })), this
            }, t.exports = s
         },
         6009: (t, n, e) => {
            "use strict";
            var r = e(4470),
               i = {
                  ArrayNode: e(5476),
                  AssignmentNode: e(6408),
                  ConditionalNode: e(9907),
                  ConstantNode: e(2341),
                  FunctionNode: e(7850),
                  OperatorNode: e(305),
                  SymbolNode: e(6656),
                  UnaryNode: e(2386)
               },
               o = function (t, n) {
                  this.owner = t, this.options = r({
                     factory: "ns.factory",
                     raw: !1,
                     rawArrayExpressionElements: !0,
                     rawCallExpressionElements: !1
                  }, n)
               };
            r(o.prototype, i), o.prototype.next = function (t) {
               if (!(t.type in this)) throw new TypeError("the node type " + t.type + " is not implemented");
               return this[t.type](t)
            }, o.prototype.rawify = function (t, n) {
               var e = this.options.raw;
               t && (this.options.raw = !0), n(), t && (this.options.raw = e)
            }, t.exports = o
         },
         2576: t => {
            "use strict";
            t.exports = {
               "+": "add",
               "-": "sub",
               "*": "mul",
               "/": "div",
               "^": "pow",
               "%": "mod",
               "!": "factorial",
               "|": "bitwiseOR",
               "^|": "bitwiseXOR",
               "&": "bitwiseAND",
               "||": "logicalOR",
               xor: "logicalXOR",
               "&&": "logicalAND",
               "<": "lessThan",
               ">": "greaterThan",
               "<=": "lessEqualThan",
               ">=": "greaterEqualThan",
               "===": "strictlyEqual",
               "==": "equal",
               "!==": "strictlyNotEqual",
               "!=": "notEqual",
               ">>": "shiftRight",
               "<<": "shiftLeft",
               ">>>": "unsignedRightShift"
            }
         },
         6104: t => {
            "use strict";
            t.exports = {
               "+": "positive",
               "-": "negative",
               "~": "oneComplement"
            }
         },
         5476: t => {
            "use strict";
            t.exports = function (t) {
               var n = this,
                  e = [];
               this.rawify(this.options.rawArrayExpressionElements, (function () {
                  e = t.nodes.map((function (t) {
                     return n.next(t)
                  }))
               }));
               var r = "[" + e.join(",") + "]";
               return this.options.raw ? r : this.options.factory + "(" + r + ")"
            }
         },
         6408: t => {
            "use strict";
            t.exports = function (t) {
               return 'scope["' + t.name + '"] = ' + this.next(t.expr)
            }
         },
         9907: t => {
            "use strict";
            t.exports = function (t) {
               return "(!!(" + this.next(t.condition) + ") ? (" + this.next(t.trueExpr) + ") : (" + this.next(t.falseExpr) + ") )"
            }
         },
         2341: t => {
            "use strict";
            t.exports = function (t) {
               return this.options.raw ? t.value : this.options.factory + "(" + t.value + ")"
            }
         },
         7850: (t, n, e) => {
            "use strict";
            var r = e(9213).nodeTypes.SymbolNode,
               i = function (t) {
                  return "$$mathCodegen.functionProxy(" + this.next(new r(t.name)) + ', "' + t.name + '")'
               };
            t.exports = function (t) {
               var n = this,
                  e = i.call(this, t),
                  r = [];
               return this.rawify(this.options.rawCallExpressionElements, (function () {
                  r = t.args.map((function (t) {
                     return n.next(t)
                  }))
               })), e + "(" + r.join(", ") + ")"
            }, t.exports.functionProxy = i
         },
         305: (t, n, e) => {
            "use strict";
            var r = e(2576);
            t.exports = function (t) {
               if (this.options.raw) return ["(" + this.next(t.args[0]), t.op, this.next(t.args[1]) + ")"].join(" ");
               var n = r[t.op];
               if (!n) throw TypeError("unidentified operator");
               return this.FunctionNode({
                  name: n,
                  args: t.args
               })
            }
         },
         6656: t => {
            "use strict";
            t.exports = function (t) {
               return '$$mathCodegen.getProperty("' + t.name + '", scope, ns)'
            }
         },
         2386: (t, n, e) => {
            "use strict";
            var r = e(6104);
            t.exports = function (t) {
               if (this.options.raw) return t.op + this.next(t.argument);
               if (!(t.op in r)) throw new SyntaxError(t.op + " not implemented");
               var n = r[t.op];
               return this.FunctionNode({
                  name: n,
                  args: [t.argument]
               })
            }
         },
         9213: (t, n, e) => {
            "use strict";
            e(1668), t.exports.Parser = e(5438), t.exports.nodeTypes = e(3450)
         },
         1668: (t, n, e) => {
            var r = e(5054),
               i = {
                  n: "\n",
                  f: "\f",
                  r: "\r",
                  t: "\t",
                  v: "\v",
                  "'": "'",
                  '"': '"'
               },
               o = {
                  ",": !0,
                  "(": !0,
                  ")": !0,
                  "[": !0,
                  "]": !0,
                  ";": !0,
                  "~": !0,
                  "!": !0,
                  "+": !0,
                  "-": !0,
                  "*": !0,
                  "/": !0,
                  "%": !0,
                  "^": !0,
                  "**": !0,
                  "|": !0,
                  "&": !0,
                  "^|": !0,
                  "=": !0,
                  ":": !0,
                  "?": !0,
                  "||": !0,
                  "&&": !0,
                  xor: !0,
                  "==": !0,
                  "!=": !0,
                  "===": !0,
                  "!==": !0,
                  "<": !0,
                  ">": !0,
                  ">=": !0,
                  "<=": !0,
                  ">>>": !0,
                  "<<": !0,
                  ">>": !0
               };

            function s(t) {
               return t >= "0" && t <= "9"
            }

            function a(t) {
               return t >= "a" && t <= "z" || t >= "A" && t <= "Z" || "$" === t || "_" === t
            }

            function u(t) {
               return " " === t || "\r" === t || "\t" === t || "\n" === t || "\v" === t || " " === t
            }

            function c(t) {
               return o[t]
            }

            function l(t) {
               return "'" === t || '"' === t
            }

            function h() {}
            h.prototype.throwError = function (t, n) {
               n = void 0 === n ? this.index : n;
               var e = new Error(t + " at index " + n);
               throw e.index = n, e.description = t, e
            }, h.prototype.lex = function (t) {
               for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                  for (; u(this.peek());) this.consume();
                  var n = this.peek(),
                     e = n + this.peek(1),
                     i = e + this.peek(2);
                  c(i) ? (this.tokens.push({
                     type: r.DELIMITER,
                     value: i
                  }), this.consume(), this.consume(), this.consume()) : c(e) ? (this.tokens.push({
                     type: r.DELIMITER,
                     value: e
                  }), this.consume(), this.consume()) : c(n) ? (this.tokens.push({
                     type: r.DELIMITER,
                     value: n
                  }), this.consume()) : s(n) || "." === n && s(this.peek(1)) ? this.tokens.push({
                     type: r.NUMBER,
                     value: this.readNumber()
                  }) : l(n) ? this.tokens.push({
                     type: r.STRING,
                     value: this.readString()
                  }) : a(n) ? this.tokens.push({
                     type: r.SYMBOL,
                     value: this.readIdentifier()
                  }) : this.throwError("unexpected character " + n)
               }
               return this.tokens.push({
                  type: r.EOF
               }), this.tokens
            }, h.prototype.peek = function (t) {
               if (t = t || 0, !(this.index + t >= this.text.length)) return this.text.charAt(this.index + t)
            }, h.prototype.consume = function () {
               var t = this.peek();
               return this.index += 1, t
            }, h.prototype.readNumber = function () {
               var t = "";
               if ("." === this.peek()) t += this.consume(), s(this.peek()) || this.throwError("number expected");
               else {
                  for (; s(this.peek());) t += this.consume();
                  "." === this.peek() && (t += this.consume())
               }
               for (; s(this.peek());) t += this.consume();
               if ("e" === this.peek() || "E" === this.peek())
                  for (t += this.consume(), s(this.peek()) || "+" === this.peek() || "-" === this.peek() || this.throwError(), "+" !== this.peek() && "-" !== this.peek() || (t += this.consume()), s(this.peek()) || this.throwError("number expected"); s(this.peek());) t += this.consume();
               return t
            }, h.prototype.readIdentifier = function () {
               for (var t = ""; a(this.peek()) || s(this.peek());) t += this.consume();
               return t
            }, h.prototype.readString = function () {
               for (var t, n = this.consume(), e = "";;) {
                  var r = this.consume();
                  if (r || this.throwError("string is not closed"), t) {
                     if ("u" === r) {
                        var o = this.text.substring(this.index + 1, this.index + 5);
                        o.match(/[\da-f]{4}/i) || this.throwError("invalid unicode escape"), this.index += 4, e += String.fromCharCode(parseInt(o, 16))
                     } else {
                        e += i[r] || r
                     }
                     t = !1
                  } else {
                     if (r === n) break;
                     "\\" === r ? t = !0 : e += r
                  }
               }
               return e
            }, t.exports = h
         },
         5438: (t, n, e) => {
            var r = e(5054),
               i = e(1668),
               o = e(6311),
               s = e(6565),
               a = e(5543),
               u = e(2514),
               c = e(8935),
               l = e(3862),
               h = e(9322),
               f = e(3262),
               p = e(2962);

            function d() {
               this.lexer = new i, this.tokens = null
            }
            d.prototype.current = function () {
               return this.tokens[0]
            }, d.prototype.next = function () {
               return this.tokens[1]
            }, d.prototype.peek = function () {
               if (this.tokens.length)
                  for (var t = this.tokens[0], n = 0; n < arguments.length; n += 1)
                     if (t.value === arguments[n]) return !0
            }, d.prototype.consume = function (t) {
               return this.tokens.shift()
            }, d.prototype.expect = function (t) {
               if (!this.peek(t)) throw Error("expected " + t);
               return this.consume()
            }, d.prototype.isEOF = function () {
               return this.current().type === r.EOF
            }, d.prototype.parse = function (t) {
               return this.tokens = this.lexer.lex(t), this.program()
            }, d.prototype.program = function () {
               for (var t = []; !this.isEOF();) t.push(this.assignment()), this.peek(";") && this.consume();
               return this.end(), new p(t)
            }, d.prototype.assignment = function () {
               var t = this.ternary();
               return t instanceof u && this.peek("=") ? (this.consume(), new f(t.name, this.assignment())) : t
            }, d.prototype.ternary = function () {
               var t = this.logicalOR();
               if (this.peek("?")) {
                  this.consume();
                  var n = this.ternary();
                  this.expect(":");
                  var e = this.ternary();
                  return new h(t, n, e)
               }
               return t
            }, d.prototype.logicalOR = function () {
               var t = this.logicalXOR();
               if (this.peek("||")) {
                  var n = this.consume(),
                     e = this.logicalOR();
                  return new s(n.value, [t, e])
               }
               return t
            }, d.prototype.logicalXOR = function () {
               var t = this.logicalAND();
               if ("xor" === this.current().value) {
                  var n = this.consume(),
                     e = this.logicalXOR();
                  return new s(n.value, [t, e])
               }
               return t
            }, d.prototype.logicalAND = function () {
               var t = this.bitwiseOR();
               if (this.peek("&&")) {
                  var n = this.consume(),
                     e = this.logicalAND();
                  return new s(n.value, [t, e])
               }
               return t
            }, d.prototype.bitwiseOR = function () {
               var t = this.bitwiseXOR();
               if (this.peek("|")) {
                  var n = this.consume(),
                     e = this.bitwiseOR();
                  return new s(n.value, [t, e])
               }
               return t
            }, d.prototype.bitwiseXOR = function () {
               var t = this.bitwiseAND();
               if (this.peek("^|")) {
                  var n = this.consume(),
                     e = this.bitwiseXOR();
                  return new s(n.value, [t, e])
               }
               return t
            }, d.prototype.bitwiseAND = function () {
               var t = this.relational();
               if (this.peek("&")) {
                  var n = this.consume(),
                     e = this.bitwiseAND();
                  return new s(n.value, [t, e])
               }
               return t
            }, d.prototype.relational = function () {
               var t = this.shift();
               if (this.peek("==", "===", "!=", "!==", ">=", "<=", ">", "<")) {
                  var n = this.consume(),
                     e = this.shift();
                  return new s(n.value, [t, e])
               }
               return t
            }, d.prototype.shift = function () {
               var t = this.additive();
               if (this.peek(">>", "<<", ">>>")) {
                  var n = this.consume(),
                     e = this.shift();
                  return new s(n.value, [t, e])
               }
               return t
            }, d.prototype.additive = function () {
               for (var t = this.multiplicative(); this.peek("+", "-");) {
                  var n = this.consume();
                  t = new s(n.value, [t, this.multiplicative()])
               }
               return t
            }, d.prototype.multiplicative = function () {
               for (var t, n, e = this.unary(); this.peek("*", "/", "%");) t = this.consume(), e = new s(t.value, [e, this.unary()]);
               return this.current().type === r.SYMBOL || this.peek("(") || !(e.type instanceof o) && this.current().type === r.NUMBER ? (n = this.multiplicative(), new s("*", [e, n])) : e
            }, d.prototype.unary = function () {
               if (this.peek("-", "+", "~")) {
                  var t = this.consume(),
                     n = this.unary();
                  return new a(t.value, n)
               }
               return this.pow()
            }, d.prototype.pow = function () {
               var t = this.factorial();
               if (this.peek("^", "**")) {
                  var n = this.consume(),
                     e = this.unary();
                  return new s(n.value, [t, e])
               }
               return t
            }, d.prototype.factorial = function () {
               var t = this.symbol();
               if (this.peek("!")) {
                  var n = this.consume();
                  return new s(n.value, [t])
               }
               return t
            }, d.prototype.symbol = function () {
               if (this.current().type === r.SYMBOL) {
                  var t = this.consume();
                  return this.functionCall(t)
               }
               return this.string()
            }, d.prototype.functionCall = function (t) {
               var n = t.value;
               if (this.peek("(")) {
                  this.consume();
                  for (var e = []; !this.peek(")") && !this.isEOF();) e.push(this.assignment()), this.peek(",") && this.consume();
                  return this.expect(")"), new c(n, e)
               }
               return new u(n)
            }, d.prototype.string = function () {
               return this.current().type === r.STRING ? new o(this.consume().value, "string") : this.array()
            }, d.prototype.array = function () {
               if (this.peek("[")) {
                  this.consume();
                  for (var t = []; !this.peek("]") && !this.isEOF();) t.push(this.assignment()), this.peek(",") && this.consume();
                  return this.expect("]"), new l(t)
               }
               return this.number()
            }, d.prototype.number = function () {
               return this.current().type === r.NUMBER ? new o(this.consume().value, "number") : this.parentheses()
            }, d.prototype.parentheses = function () {
               if ("(" === this.current().value) {
                  this.consume();
                  var t = this.assignment();
                  return this.expect(")"), t
               }
               return this.end()
            }, d.prototype.end = function () {
               if (this.current().type !== r.EOF) throw Error("unexpected end of expression")
            }, t.exports = d
         },
         3862: (t, n, e) => {
            var r = e(7111);

            function i(t) {
               this.nodes = t
            }
            i.prototype = Object.create(r.prototype), i.prototype.type = "ArrayNode", t.exports = i
         },
         3262: (t, n, e) => {
            var r = e(7111);

            function i(t, n) {
               this.name = t, this.expr = n
            }
            i.prototype = Object.create(r.prototype), i.prototype.type = "AssignmentNode", t.exports = i
         },
         2962: (t, n, e) => {
            var r = e(7111);

            function i(t) {
               this.blocks = t
            }
            i.prototype = Object.create(r.prototype), i.prototype.type = "BlockNode", t.exports = i
         },
         9322: (t, n, e) => {
            var r = e(7111);

            function i(t, n, e) {
               this.condition = t, this.trueExpr = n, this.falseExpr = e
            }
            i.prototype = Object.create(r.prototype), i.prototype.type = "ConditionalNode", t.exports = i
         },
         6311: (t, n, e) => {
            var r = e(7111),
               i = {
                  number: !0,
                  string: !0,
                  boolean: !0,
                  undefined: !0,
                  null: !0
               };

            function o(t, n) {
               if (!i[n]) throw Error("unsupported type '" + n + "'");
               this.value = t, this.valueType = n
            }
            o.prototype = Object.create(r.prototype), o.prototype.type = "ConstantNode", t.exports = o
         },
         8935: (t, n, e) => {
            var r = e(7111);

            function i(t, n) {
               this.name = t, this.args = n
            }
            i.prototype = Object.create(r.prototype), i.prototype.type = "FunctionNode", t.exports = i
         },
         7111: t => {
            function n() {}
            n.prototype.type = "Node", t.exports = n
         },
         6565: (t, n, e) => {
            var r = e(7111);

            function i(t, n) {
               this.op = t, this.args = n || []
            }
            i.prototype = Object.create(r.prototype), i.prototype.type = "OperatorNode", t.exports = i
         },
         2514: (t, n, e) => {
            var r = e(7111);

            function i(t) {
               this.name = t
            }
            i.prototype = Object.create(r.prototype), i.prototype.type = "SymbolNode", t.exports = i
         },
         5543: (t, n, e) => {
            var r = e(7111);

            function i(t, n) {
               this.op = t, this.argument = n
            }
            i.prototype = Object.create(r.prototype), i.prototype.type = "UnaryNode", t.exports = i
         },
         3450: (t, n, e) => {
            t.exports = {
               ArrayNode: e(3862),
               AssignmentNode: e(3262),
               BlockNode: e(2962),
               ConditionalNode: e(9322),
               ConstantNode: e(6311),
               FunctionNode: e(8935),
               Node: e(7111),
               OperatorNode: e(6565),
               SymbolNode: e(2514),
               UnaryNode: e(5543)
            }
         },
         5054: t => {
            t.exports = {
               EOF: 0,
               DELIMITER: 1,
               NUMBER: 2,
               STRING: 3,
               SYMBOL: 4
            }
         },
         3093: (t, n, e) => {
            "use strict";
            var r = e(4822),
               i = Math.pow(2, -1074),
               o = -1 >>> 0;
            t.exports = function (t, n) {
               if (isNaN(t) || isNaN(n)) return NaN;
               if (t === n) return t;
               if (0 === t) return n < 0 ? -i : i;
               var e = r.hi(t),
                  s = r.lo(t);
               return n > t == t > 0 ? s === o ? (e += 1, s = 0) : s += 1 : 0 === s ? (s = o, e -= 1) : s -= 1, r.pack(s, e)
            }
         },
         917: (t, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
               value: !0
            }), n.default = function (t) {
               return "graphType" in t || (t.graphType = "interval"), "sampler" in t || (t.sampler = "interval" !== t.graphType ? "builtIn" : "interval"), "fnType" in t || (t.fnType = "linear"), t
            }
         },
         6025: function (t, n, e) {
            "use strict";
            var r = this && this.__importDefault || function (t) {
               return t && t.__esModule ? t : {
                  default: t
               }
            };
            Object.defineProperty(n, "__esModule", {
               value: !0
            });
            const i = r(e(5888)),
               o = e(4920),
               s = {
                  interval: o.interval,
                  builtIn: o.builtIn
               };
            n.default = function (t, n) {
               const e = function (t, n) {
                     const e = n.range || [-1 / 0, 1 / 0];
                     return [Math.max(t.domain()[0], e[0]), Math.min(t.domain()[1], e[1])]
                  }(t.meta.xScale, n),
                  r = (0, s[n.sampler])(t, n, e, n.nSamples || Math.min(i.default.MAX_ITERATIONS, i.default.DEFAULT_ITERATIONS || 2 * t.meta.width));
               return t.emit("eval", r, n.index, n.isHelper), r
            }
         },
         5888: (t, n, e) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
               value: !0
            });
            const r = e(6618),
               i = {
                  COLORS: ["steelblue", "red", "#05b378", "orange", "#4040e8", "yellow", "brown", "magenta", "cyan"].map((function (t) {
                     return (0, r.hsl)(t)
                  })),
                  DEFAULT_WIDTH: 550,
                  DEFAULT_HEIGHT: 350,
                  TIP_X_EPS: 1,
                  DEFAULT_ITERATIONS: null,
                  MAX_ITERATIONS: 0
               };
            i.MAX_ITERATIONS = 10 * i.DEFAULT_WIDTH, n.default = i
         },
         3321: function (t, n, e) {
            "use strict";
            var r = this && this.__importDefault || function (t) {
               return t && t.__esModule ? t : {
                  default: t
               }
            };
            Object.defineProperty(n, "__esModule", {
               value: !0
            }), n.scatter = n.interval = n.polyline = void 0;
            const i = r(e(2210));
            n.polyline = i.default;
            const o = r(e(2266));
            n.interval = o.default;
            const s = r(e(648));
            n.scatter = s.default
         },
         2266: function (t, n, e) {
            "use strict";
            var r = this && this.__importDefault || function (t) {
               return t && t.__esModule ? t : {
                  default: t
               }
            };
            Object.defineProperty(n, "__esModule", {
               value: !0
            });
            const i = e(3905),
               o = r(e(6025)),
               s = r(e(8593));
            n.default = function (t) {
               let n;
               const e = t.meta.xScale,
                  r = t.meta.yScale;

               function a(t, e, r, i) {
                  if (r > i) {
                     const t = r;
                     r = i, i = t
                  }
                  const o = Math.min(e, i),
                     s = Math.max(t, r);
                  return s > o ? [-n, 0] : [s, o]
               }
               return function u(c) {
                  c.each((function (c) {
                     const l = u.el = (0, i.select)(this),
                        h = c.index,
                        f = c.closed,
                        p = (0, o.default)(t, c),
                        d = l.selectAll(":scope > path.line").data(p);
                     n = Math.max(p[0].scaledDx, 1);
                     const y = `line line-${h}`,
                        m = d.enter().append("path").attr("class", y).attr("fill", "none"),
                        _ = d.merge(m).attr("stroke-width", n).attr("stroke", s.default.color(c, h)).attr("opacity", f ? .5 : 1).attr("d", (function (t) {
                           return function (t, i) {
                              let o = "";
                              const s = r.range(),
                                 u = Math.min.apply(Math, s),
                                 c = Math.max.apply(Math, s);
                              for (let s = 0, l = t.length; s < l; s += 1)
                                 if (t[s]) {
                                    const l = t[s][0],
                                       h = t[s][1];
                                    let f = h.lo,
                                       p = h.hi;
                                    i && (f = Math.min(f, 0), p = Math.max(p, 0));
                                    const d = e(l.lo) + t.scaledDx / 2,
                                       y = a(u, c, isFinite(p) ? r(p) : -1 / 0, isFinite(f) ? r(f) : 1 / 0),
                                       m = y[0],
                                       _ = y[1];
                                    o += " M " + d + " " + m, o += " v " + Math.max(_ - m, n)
                                 } return o
                           }(t, f)
                        }));
                     if (c.attr)
                        for (const t in c.attr) {
                           let n = c.attr[t];
                           "class" === t && (n = `${y} ${c.attr[t]}`), _.attr(t, n)
                        }
                     d.exit().remove()
                  }))
               }
            }
         },
         2210: function (t, n, e) {
            "use strict";
            var r = this && this.__importDefault || function (t) {
               return t && t.__esModule ? t : {
                  default: t
               }
            };
            Object.defineProperty(n, "__esModule", {
               value: !0
            });
            const i = e(3905),
               o = e(6660),
               s = r(e(5627)),
               a = r(e(8593)),
               u = r(e(6025));
            n.default = function (t) {
               return function n(e) {
                  e.each((function (e) {
                     const r = n.el = (0, i.select)(this),
                        c = e.index,
                        l = (0, u.default)(t, e),
                        h = a.default.color(e, c),
                        f = r.selectAll(":scope > path.line").data(l),
                        p = t.meta.yScale.range();
                     let d = p[0],
                        y = p[1];
                     const m = d - y;

                     function _(n) {
                        return (0, s.default)(t.meta.yScale(n[1]), y, d)
                     }
                     d += 1e6 * m, y -= 1e6 * m, e.skipBoundsCheck && (d = 1 / 0, y = -1 / 0);
                     const v = (0, o.line)().curve(o.curveLinear).x((function (n) {
                           return t.meta.xScale(n[0])
                        })).y(_),
                        g = (0, o.area)().x((function (n) {
                           return t.meta.yScale(n[0])
                        })).y0(t.meta.yScale(0)).y1(_),
                        x = `line line-${c}`,
                        w = f.enter().append("path").attr("class", x).attr("stroke-width", 1).attr("stroke-linecap", "round");
                     f.merge(w).each((function () {
                        const n = (0, i.select)(this);
                        let r;
                        if (e.closed ? (n.attr("fill", h), n.attr("fill-opacity", .3), r = g) : (n.attr("fill", "none"), r = v), n.attr("stroke", h).attr("marker-end", (function () {
                              return "vector" === e.fnType ? "url(#" + t.markerId + ")" : null
                           })).attr("d", r), e.attr)
                           for (const t in e.attr) {
                              let r = e.attr[t];
                              "class" === t && (r = `${x} ${e.attr[t]}`), n.attr(t, r)
                           }
                     })), f.exit().remove()
                  }))
               }
            }
         },
         648: function (t, n, e) {
            "use strict";
            var r = this && this.__importDefault || function (t) {
               return t && t.__esModule ? t : {
                  default: t
               }
            };
            Object.defineProperty(n, "__esModule", {
               value: !0
            });
            const i = e(3905),
               o = e(6618),
               s = r(e(8593)),
               a = r(e(6025));
            n.default = function (t) {
               const n = t.meta.xScale,
                  e = t.meta.yScale;
               return function (r) {
                  r.each((function (r) {
                     let u, c;
                     const l = r.index,
                        h = s.default.color(r, l),
                        f = (0, a.default)(t, r),
                        p = [];
                     for (u = 0; u < f.length; u += 1)
                        for (c = 0; c < f[u].length; c += 1) p.push(f[u][c]);
                     const d = (0, i.select)(this).selectAll(":scope > circle").data(p),
                        y = `scatter scatter-${l}`,
                        m = d.enter().append("circle").attr("class", y),
                        _ = d.merge(m).attr("fill", (0, o.hsl)(h.toString()).brighter(1.5).hex()).attr("stroke", h).attr("opacity", .7).attr("r", 1).attr("cx", (function (t) {
                           return n(t[0])
                        })).attr("cy", (function (t) {
                           return e(t[1])
                        }));
                     if (r.attr)
                        for (const t in r.attr) {
                           let n = r.attr[t];
                           "class" === t && (n = `${y} ${r.attr[t]}`), _.attr(t, n)
                        }
                     d.exit().remove()
                  }))
               }
            }
         },
         3559: (t, n, e) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
               value: !0
            });
            const r = e(6660),
               i = e(3905);
            n.default = function (t) {
               const n = t.owner.meta.xScale,
                  e = t.owner.meta.yScale,
                  o = (0, r.line)().x((function (t) {
                     return t[0]
                  })).y((function (t) {
                     return t[1]
                  }));
               return function (t) {
                  t.each((function () {
                     const t = (0, i.select)(this).selectAll("g.annotations").data((function (t) {
                           return t.annotations || []
                        })),
                        r = t.enter().append("g").attr("class", "annotations"),
                        s = e.range(),
                        a = n.range(),
                        u = t.merge(r).selectAll("path").data((function (t) {
                           return "x" in t ? [
                              [
                                 [0, s[0]],
                                 [0, s[1]]
                              ]
                           ] : [
                              [
                                 [a[0], 0],
                                 [a[1], 0]
                              ]
                           ]
                        }));
                     u.enter().append("path").attr("stroke", "#eee").attr("d", o), u.exit().remove();
                     const c = t.merge(r).selectAll("text").data((function (t) {
                        return [{
                           text: t.text || "",
                           hasX: "x" in t
                        }]
                     }));
                     c.enter().append("text").attr("y", (function (t) {
                        return t.hasX ? 3 : 0
                     })).attr("x", (function (t) {
                        return t.hasX ? 0 : 3
                     })).attr("dy", (function (t) {
                        return t.hasX ? 5 : -5
                     })).attr("text-anchor", (function (t) {
                        return t.hasX ? "end" : ""
                     })).attr("transform", (function (t) {
                        return t.hasX ? "rotate(-90)" : ""
                     })).text((function (t) {
                        return t.text
                     })), c.exit().remove(), t.merge(r).attr("transform", (function (t) {
                        return "x" in t ? "translate(" + n(t.x) + ", 0)" : "translate(0, " + e(t.y) + ")"
                     })), t.exit().remove()
                  }))
               }
            }
         },
         8016: function (t, n, e) {
            "use strict";
            var r = this && this.__importDefault || function (t) {
               return t && t.__esModule ? t : {
                  default: t
               }
            };
            Object.defineProperty(n, "__esModule", {
               value: !0
            });
            const i = e(3905),
               o = e(3321),
               s = e(1669),
               a = r(e(917));
            n.default = function (t) {
               const n = (0, a.default)({
                  isHelper: !0,
                  skipTip: !0,
                  skipBoundsCheck: !0,
                  nSamples: 2,
                  graphType: "polyline"
               });

               function e(t) {
                  if (!t.derivative) return [];
                  const e = "number" == typeof t.derivative.x0 ? t.derivative.x0 : 1 / 0;
                  return n.index = t.index, n.scope = {
                     m: (0, s.builtIn)(t.derivative, "fn", {
                        x: e
                     }),
                     x0: e,
                     y0: (0, s.builtIn)(t, "fn", {
                        x: e
                     })
                  }, n.fn = "m * (x - x0) + y0", [n]
               }

               function r(n) {
                  const e = this;
                  n.derivative && n.derivative.updateOnMouseMove && !n.derivative.$$mouseListener && (n.derivative.$$mouseListener = function ({
                     x: t
                  }) {
                     n.derivative && (n.derivative.x0 = t), u(e)
                  }, t.on("tip:update", n.derivative.$$mouseListener))
               }
               const u = function (n) {
                  n.each((function (s) {
                     const a = (0, i.select)(this),
                        u = e.call(n, s);
                     r.call(n, s);
                     const c = a.selectAll("g.derivative").data(u),
                        l = c.enter().append("g").attr("class", "derivative");
                     c.merge(l).call((0, o.polyline)(t)), c.merge(l).selectAll("path").attr("opacity", .5), c.exit().remove()
                  }))
               };
               return u
            }
         },
         1669: function (t, n, e) {
            "use strict";
            var r = this && this.__importDefault || function (t) {
               return t && t.__esModule ? t : {
                  default: t
               }
            };
            Object.defineProperty(n, "__esModule", {
               value: !0
            }), n.interval = n.builtIn = void 0;
            const i = r(e(5248)),
               o = {
                  interval: r(e(8867)).default,
                  builtIn: i.default
               },
               s = "object" == typeof e.g && "math" in e.g ? e.g.math : "object" == typeof window && "math" in window ? window.math : null;

            function a(t) {
               return function (n, e, r) {
                  return function (n, e) {
                        const r = n[e],
                           i = t + "_Expression_" + e,
                           a = t + "_Compiled_" + e;
                        r !== n[i] && (n[i] = r, n[a] = function (n) {
                           if ("string" == typeof n) {
                              const e = o[t](n);
                              return s && "builtIn" === t ? {
                                 eval: e.evaluate || e.eval
                              } : e
                           }
                           if ("function" == typeof n) return {
                              eval: n
                           };
                           throw Error("expression must be a string or a function")
                        }(r))
                     }(n, e),
                     function (n, e) {
                        return n[t + "_Compiled_" + e]
                     }(n, e).eval(Object.assign({}, n.scope || {}, r))
               }
            }
            s && (o.builtIn = s.compile);
            const u = a("builtIn");
            n.builtIn = u;
            const c = a("interval");
            n.interval = c
         },
         9489: function (t, n, e) {
            "use strict";
            var r = this && this.__importDefault || function (t) {
               return t && t.__esModule ? t : {
                  default: t
               }
            };
            Object.defineProperty(n, "__esModule", {
               value: !0
            });
            const i = e(3905),
               o = r(e(8016)),
               s = r(e(9793));
            n.default = function (t) {
               return function (n) {
                  n.each((function () {
                     const n = (0, i.select)(this);
                     n.call((0, o.default)(t)), n.call((0, s.default)(t))
                  }))
               }
            }
         },
         9793: function (t, n, e) {
            "use strict";
            var r = this && this.__importDefault || function (t) {
               return t && t.__esModule ? t : {
                  default: t
               }
            };
            Object.defineProperty(n, "__esModule", {
               value: !0
            });
            const i = e(3905),
               o = e(1669),
               s = r(e(917)),
               a = e(3321);
            n.default = function (t) {
               const n = (0, s.default)({
                  isHelper: !0,
                  skipTip: !0,
                  skipBoundsCheck: !0,
                  nSamples: 2,
                  graphType: "polyline"
               });

               function e(t, n) {
                  if (!("x0" in n)) throw Error("secant must have the property `x0` defined");
                  n.scope = n.scope || {};
                  const e = n.x0,
                     r = "number" == typeof n.x1 ? n.x1 : 1 / 0;
                  var i;
                  Object.assign(n.scope, {
                     x0: e,
                     x1: r,
                     y0: (0, o.builtIn)(t, "fn", {
                        x: e
                     }),
                     y1: (0, o.builtIn)(t, "fn", {
                        x: r
                     })
                  }), (i = n.scope).m = (i.y1 - i.y0) / (i.x1 - i.x0)
               }

               function r(t, n) {
                  e(t, n), n.fn = "m * (x - x0) + y0"
               }

               function u(n, r) {
                  const i = this;
                  r.updateOnMouseMove && !r.$$mouseListener && (r.$$mouseListener = function ({
                     x: t
                  }) {
                     r.x1 = t, e(n, r), l(i)
                  }, t.on("tip:update", r.$$mouseListener))
               }

               function c(t) {
                  const e = this,
                     i = [];
                  t.secants = t.secants || [];
                  for (let o = 0; o < t.secants.length; o += 1) {
                     const s = t.secants[o] = Object.assign({}, n, t.secants[o]);
                     s.index = t.index, s.fn || (r.call(e, t, s), u.call(e, t, s)), i.push(s)
                  }
                  return i
               }
               const l = function (n) {
                  n.each((function (e) {
                     const r = (0, i.select)(this),
                        o = c.call(n, e),
                        s = r.selectAll("g.secant").data(o),
                        u = s.enter().append("g").attr("class", "secant");
                     s.merge(u).call((0, a.polyline)(t)), s.merge(u).selectAll("path").attr("opacity", .5), s.exit().remove()
                  }))
               };
               return l
            }
         },
         3607: function (t, n, e) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function (t, n, e, r) {
                  void 0 === r && (r = e);
                  var i = Object.getOwnPropertyDescriptor(n, e);
                  i && !("get" in i ? !n.__esModule : i.writable || i.configurable) || (i = {
                     enumerable: !0,
                     get: function () {
                        return n[e]
                     }
                  }), Object.defineProperty(t, r, i)
               } : function (t, n, e, r) {
                  void 0 === r && (r = e), t[r] = n[e]
               }),
               i = this && this.__setModuleDefault || (Object.create ? function (t, n) {
                  Object.defineProperty(t, "default", {
                     enumerable: !0,
                     value: n
                  })
               } : function (t, n) {
                  t.default = n
               }),
               o = this && this.__importStar || function (t) {
                  if (t && t.__esModule) return t;
                  var n = {};
                  if (null != t)
                     for (var e in t) "default" !== e && Object.prototype.hasOwnProperty.call(t, e) && r(n, t, e);
                  return i(n, t), n
               },
               s = this && this.__exportStar || function (t, n) {
                  for (var e in t) "default" === e || Object.prototype.hasOwnProperty.call(n, e) || r(n, t, e)
               },
               a = this && this.__importDefault || function (t) {
                  return t && t.__esModule ? t : {
                     default: t
                  }
               };
            Object.defineProperty(n, "__esModule", {
               value: !0
            }), n.EvalInterval = n.EvalBuiltIn = n.GraphTypeScatter = n.GraphTypePolyline = n.GraphTypeInterval = n.Chart = void 0;
            const u = e(6660),
               c = e(103),
               l = e(8066),
               h = e(8873),
               f = e(9065),
               p = e(3905),
               d = e(9928),
               y = a(e(7187)),
               m = a(e(3559)),
               _ = a(e(953)),
               v = a(e(9489)),
               g = a(e(917)),
               x = a(e(5888)),
               w = o(e(3321)),
               b = o(e(1669));

            function M(t) {
               return "linear" === t ? l.scaleLinear : l.scaleLog
            }
            e(360);
            class T extends y.default.EventEmitter {
               constructor(t) {
                  super();
                  const n = Math.random(),
                     e = String.fromCharCode(Math.floor(26 * n) + 97);
                  this.options = t, this.id = e + n.toString(16).substr(2), this.options.id = this.id, this.markerId = this.id + "-marker", T.cache[this.id] = this, this.linkedGraphs = [this], this.meta = {}, this.setUpEventListeners()
               }
               build() {
                  return this.internalVars(), this.drawGraphWrapper(), this
               }
               getDraggableNode() {
                  return (0, p.select)(this.options.target).select(".zoom-and-drag").node()
               }
               getEmitInstance() {
                  let t = this;
                  const n = this.getDraggableNode();
                  return n && (t = n.instance), t
               }
               internalVars() {
                  const t = this.meta.margin = {
                     left: 0,
                     right: 0,
                     top: 0,
                     bottom: 0
                  };
                  this.options.title && (this.meta.margin.top = 0), this.meta.width = (this.options.width || x.default.DEFAULT_WIDTH) - t.left - t.right, this.meta.height = (this.options.height || x.default.DEFAULT_HEIGHT) - t.top - t.bottom, this.initializeAxes()
               }
               initializeAxes() {
                  const t = this,
                     n = (0, c.format)("~s");

                  function e(t) {
                     return Math.abs(t) - Math.floor(Math.abs(t)) > 0 ? t.toString() : n(t)
                  }
                  this.options.xAxis = this.options.xAxis || {}, this.options.xAxis.type = this.options.xAxis.type || "linear", this.options.yAxis = this.options.yAxis || {}, this.options.yAxis.type = this.options.yAxis.type || "linear";
                  const r = this.meta.xDomain = function (t) {
                        if (t.domain) return t.domain;
                        if ("linear" === t.type) {
                           const t = 12;
                           return [-t / 2, t / 2]
                        }
                        if ("log" === t.type) return [1, 10];
                        throw Error("axis type " + t.type + " unsupported")
                     }(this.options.xAxis),
                     i = this.meta.yDomain = function (n) {
                        if (n.domain) return n.domain;
                        const e = function (n) {
                           const e = n[1] - n[0];
                           return t.meta.height * e / t.meta.width
                        }(r);
                        if ("linear" === n.type) return [-e / 2, e / 2];
                        if ("log" === n.type) return [1, 10];
                        throw Error("axis type " + n.type + " unsupported")
                     }(this.options.yAxis);
                  this.meta.xScale || (this.meta.xScale = M(this.options.xAxis.type)()), this.meta.xScale.domain(r).range(this.options.xAxis.invert ? [this.meta.width, 0] : [0, this.meta.width]), this.meta.yScale || (this.meta.yScale = M(this.options.yAxis.type)()), this.meta.yScale.domain(i).range(this.options.yAxis.invert ? [0, this.meta.height] : [this.meta.height, 0]), this.meta.xAxis || (this.meta.xAxis = (0, h.axisBottom)(this.meta.xScale)), this.meta.xAxis.tickSize(this.options.grid ? -this.meta.height : 0).tickFormat(e), this.meta.yAxis || (this.meta.yAxis = (0, h.axisLeft)(this.meta.yScale)), this.meta.yAxis.tickSize(this.options.grid ? -this.meta.width : 0).tickFormat(e), this.line = (0, u.line)().x((function (n) {
                     return t.meta.xScale(n[0])
                  })).y((function (n) {
                     return t.meta.yScale(n[1])
                  }))
               }
               drawGraphWrapper() {
                  const t = this.root = (0, p.select)(this.options.target).selectAll("svg").data([this.options]);
                  this.root.enter = t.enter().append("svg").attr("class", "function-plot").attr("font-size", this.getFontSize()), t.merge(this.root.enter).attr("width", this.meta.width + this.meta.margin.left + this.meta.margin.right).attr("height", this.meta.height + this.meta.margin.top + this.meta.margin.bottom), this.buildTitle(), this.buildLegend(), this.buildCanvas(), this.buildClip(), this.buildAxis(), this.buildAxisLabel();
                  const n = this.tip = (0, _.default)(Object.assign(this.options.tip || {}, {
                     owner: this
                  }));
                  this.canvas.merge(this.canvas.enter).call(n), this.setUpPlugins(), this.draw(), this.buildZoomHelper()
               }
               buildTitle() {
                  const t = this.root.merge(this.root.enter).selectAll("text.title").data((function (t) {
                     return [t.title].filter(Boolean)
                  }));
                  t.enter().append("text").merge(t).attr("class", "title").attr("y", this.meta.margin.top / 2).attr("x", this.meta.margin.left + this.meta.width / 2).attr("font-size", 25).attr("text-anchor", "middle").attr("alignment-baseline", "middle").text(this.options.title), t.exit().remove()
               }
               buildLegend() {
                  this.root.enter.append("text").attr("class", "top-right-legend").attr("text-anchor", "end"), this.root.merge(this.root.enter).select(".top-right-legend").attr("y", this.meta.margin.top / 2).attr("x", this.meta.width + this.meta.margin.left)
               }
               buildCanvas() {
                  const t = this.canvas = this.root.merge(this.root.enter).selectAll(".canvas").data((function (t) {
                     return [t]
                  }));
                  this.canvas.enter = t.enter().append("g").attr("class", "canvas")
               }
               buildClip() {
                  const t = this.id,
                     n = this.canvas.enter.append("defs");
                  n.append("clipPath").attr("id", "function-plot-clip-" + t).append("rect").attr("class", "clip static-clip"), this.canvas.merge(this.canvas.enter).selectAll(".clip").attr("width", this.meta.width).attr("height", this.meta.height), n.append("clipPath").append("marker").attr("id", this.markerId).attr("viewBox", "0 -5 10 10").attr("refX", 10).attr("markerWidth", 5).attr("markerHeight", 5).attr("orient", "auto").append("svg:path").attr("d", "M0,-5L10,0L0,5L0,0").attr("stroke-width", "0px").attr("fill-opacity", 1).attr("fill", "#777")
               }
               buildAxis() {
                  const t = this.canvas.enter;
                  t.append("g").attr("class", "x axis"), t.append("g").attr("class", "y axis"), this.canvas.merge(this.canvas.enter).select(".x.axis").attr("transform", "translate(0," + this.meta.height + ")").call(this.meta.xAxis), this.canvas.merge(this.canvas.enter).select(".y.axis").call(this.meta.yAxis)
               }
               buildAxisLabel() {
                  const t = this.canvas,
                     n = t.merge(t.enter).selectAll("text.x.axis-label").data((function (t) {
                        return [t.xAxis.label].filter(Boolean)
                     })),
                     e = n.enter().append("text").attr("class", "x axis-label").attr("text-anchor", "end");
                  n.merge(e).attr("x", this.meta.width).attr("y", this.meta.height - 6).text((function (t) {
                     return t
                  })), n.exit().remove();
                  const r = t.merge(t.enter).selectAll("text.y.axis-label").data((function (t) {
                        return [t.yAxis.label].filter(Boolean)
                     })),
                     i = r.enter().append("text").attr("class", "y axis-label").attr("y", 6).attr("dy", ".75em").attr("text-anchor", "end").attr("transform", "rotate(-90)");
                  r.merge(i).text((function (t) {
                     return t
                  })), r.exit().remove()
               }
               buildContent() {
                  const t = this,
                     n = this.canvas;
                  n.merge(n.enter).attr("transform", "translate(" + this.meta.margin.left + "," + this.meta.margin.top + ")");
                  const e = this.content = n.merge(n.enter).selectAll(":scope > g.content").data((function (t) {
                        return [t]
                     })),
                     r = e.enter().append("g").attr("clip-path", "url(#function-plot-clip-" + this.id + ")").attr("class", "content");
                  if ("linear" === this.options.xAxis.type) {
                     const t = e.merge(r).selectAll(":scope > path.y.origin").data([
                           [
                              [0, this.meta.yScale.domain()[0]],
                              [0, this.meta.yScale.domain()[1]]
                           ]
                        ]),
                        n = t.enter().append("path").attr("class", "y origin").attr("stroke", "black").attr("opacity", .2);
                     t.merge(n).attr("d", this.line)
                  }
                  if ("linear" === this.options.yAxis.type) {
                     const t = e.merge(r).selectAll(":scope > path.x.origin").data([
                           [
                              [this.meta.xScale.domain()[0], 0],
                              [this.meta.xScale.domain()[1], 0]
                           ]
                        ]),
                        n = t.enter().append("path").attr("class", "x origin").attr("stroke", "black").attr("opacity", .2);
                     t.merge(n).attr("d", this.line)
                  }
                  e.merge(r).call((0, m.default)({
                     owner: t
                  }));
                  const i = e.merge(r).selectAll(":scope > g.graph").data((t => t.data.map(g.default))),
                     o = i.enter().append("g").attr("class", "graph");
                  i.merge(o).each((function (n, e) {
                     n.index = e;
                     const r = (0, p.select)(this);
                     r.call(w[n.graphType](t)), r.call((0, v.default)(t))
                  }))
               }
               buildZoomHelper() {
                  const t = this;
                  this.meta.zoomBehavior || (this.meta.zoomBehavior = (0, f.zoom)().on("zoom", (function (n) {
                     t.getEmitInstance().emit("all:zoom", n)
                  })), t.meta.zoomBehavior.xScale = t.meta.xScale.copy(), t.meta.zoomBehavior.yScale = t.meta.yScale.copy()), t.meta.zoomBehavior.xScale.range(t.meta.xScale.range()), t.meta.zoomBehavior.yScale.range(t.meta.yScale.range()), this.canvas.enter.append("rect").call(this.meta.zoomBehavior).attr("class", "zoom-and-drag").style("fill", "none").style("pointer-events", "all").on("mouseover", (function (n) {
                     t.getEmitInstance().emit("all:mouseover", n)
                  })).on("mouseout", (function (n) {
                     t.getEmitInstance().emit("all:mouseout", n)
                  })).on("mousemove", (function (n) {
                     t.getEmitInstance().emit("all:mousemove", n)
                  })), this.draggable = this.canvas.merge(this.canvas.enter).select(".zoom-and-drag").call((n => {
                     n.node() && (n.node().instance = t)
                  })).attr("width", this.meta.width).attr("height", this.meta.height)
               }
               setUpPlugins() {
                  const t = this.options.plugins || [],
                     n = this;
                  t.forEach((function (t) {
                     t(n)
                  }))
               }
               addLink() {
                  for (let t = 0; t < arguments.length; t += 1) this.linkedGraphs.push(arguments[t])
               }
               updateAxes() {
                  const t = this,
                     n = t.canvas.merge(t.canvas.enter);
                  n.select(".x.axis").call(t.meta.xAxis), n.select(".y.axis").call(t.meta.yAxis), n.selectAll(".axis path, .axis line").attr("fill", "none").attr("stroke", "black").attr("shape-rendering", "crispedges").attr("opacity", .1)
               }
               syncOptions() {
                  this.options.xAxis.domain = this.meta.xScale.domain(), this.options.yAxis.domain = this.meta.yScale.domain()
               }
               getFontSize() {
                  return Math.max(Math.max(this.meta.width, this.meta.height) / 50, 8)
               }
               draw() {
                  const t = this;
                  t.emit("before:draw"), t.syncOptions(), t.updateAxes(), t.buildContent(), t.emit("after:draw")
               }
               setUpEventListeners() {
                  const t = this,
                     n = this.getEmitInstance();
                  n && n.removeAllListeners();
                  const e = {
                        mousemove: function (n) {
                           t.tip.move(n)
                        },
                        mouseover: function () {
                           t.tip.show()
                        },
                        mouseout: function () {
                           t.tip.hide()
                        },
                        zoom: function ({
                           transform: n
                        }) {
                           if (t.options.disableZoom) return;
                           const e = n.rescaleX(t.meta.zoomBehavior.xScale).interpolate(d.interpolateRound),
                              r = n.rescaleY(t.meta.zoomBehavior.yScale).interpolate(d.interpolateRound);
                           t.meta.xScale.domain(e.domain()).range(e.range()), t.meta.yScale.domain(r.domain()).range(r.range())
                        },
                        "tip:update": function ({
                           x: n,
                           y: e,
                           index: r
                        }) {
                           const i = t.root.merge(t.root.enter).datum().data[r],
                              o = i.title || "",
                              s = i.renderer || function (t, n) {
                                 return t.toFixed(3) + ", " + n.toFixed(3)
                              },
                              a = [];
                           o && a.push(o), a.push(s(n, e)), t.root.select(".top-right-legend").attr("fill", x.default.COLORS[r]).text(a.join(" "))
                        }
                     },
                     r = {
                        mousemove: function (n) {
                           const e = (0, p.pointer)(n, t.draggable.node()),
                              r = {
                                 x: t.meta.xScale.invert(e[0]),
                                 y: t.meta.yScale.invert(e[1])
                              };
                           t.linkedGraphs.forEach((function (t) {
                              t.emit("before:mousemove", r), t.emit("mousemove", r)
                           }))
                        },
                        zoom: function (n) {
                           t.linkedGraphs.forEach((function (e) {
                              e.draggable.node().__zoom = t.draggable.node().__zoom, e.emit("zoom", n), e.draw()
                           })), t.emit("all:mousemove", n)
                        }
                     };
                  Object.keys(e).forEach((function (n) {
                     !r[n] && t.on("all:" + n, (function () {
                        const e = Array.prototype.slice.call(arguments);
                        t.linkedGraphs.forEach((function (t) {
                           const r = e.slice();
                           r.unshift(n), t.emit.apply(t, r)
                        }))
                     })), t.on(n, e[n])
                  })), Object.keys(r).forEach((function (n) {
                     t.on("all:" + n, r[n])
                  }))
               }
            }

            function E(t = {
               target: null
            }) {
               t.data = t.data || [];
               let n = T.cache[t.id];
               return n || (n = new T(t)), n.build()
            }
            n.Chart = T, T.cache = {}, n.default = E, E.globals = x.default, E.$eval = b, E.graphTypes = w, s(e(9699), n);
            var k = e(3321);
            Object.defineProperty(n, "GraphTypeInterval", {
               enumerable: !0,
               get: function () {
                  return k.interval
               }
            }), Object.defineProperty(n, "GraphTypePolyline", {
               enumerable: !0,
               get: function () {
                  return k.polyline
               }
            }), Object.defineProperty(n, "GraphTypeScatter", {
               enumerable: !0,
               get: function () {
                  return k.scatter
               }
            }), s(e(9489), n);
            var N = e(1669);
            Object.defineProperty(n, "EvalBuiltIn", {
               enumerable: !0,
               get: function () {
                  return N.builtIn
               }
            }), Object.defineProperty(n, "EvalInterval", {
               enumerable: !0,
               get: function () {
                  return N.interval
               }
            })
         },
         360: () => {
            "undefined" != typeof window && function (t, n) {
               try {
                  t.querySelector(":scope body")
               } catch (e) {
                  ["querySelector", "querySelectorAll"].forEach((function (e) {
                     const r = n[e];
                     n[e] = function (n) {
                        if (/(^|,)\s*:scope/.test(n)) {
                           const r = this.id;
                           this.id = "ID_" + Date.now(), n = n.replace(/((^|,)\s*):scope/g, "$1#" + this.id);
                           const i = t[e](n);
                           return this.id = r, i
                        }
                        return r.call(this, n)
                     }
                  }))
               }
            }(window.document, Element.prototype)
         },
         7777: function (t, n, e) {
            "use strict";
            var r = this && this.__importDefault || function (t) {
               return t && t.__esModule ? t : {
                  default: t
               }
            };
            Object.defineProperty(n, "__esModule", {
               value: !0
            });
            const i = r(e(5627)),
               o = r(e(8593)),
               s = e(1669);

            function a(t, n, e, r, i) {
               if (!i) return {
                  asymptote: !0,
                  d0: t,
                  d1: n
               };
               const u = t[0],
                  c = n[0],
                  l = o.default.linspace(u, c, 10);
               let h, f;
               for (let t = 0; t < 10; t += 1) {
                  const n = l[t],
                     u = (0, s.builtIn)(e, "fn", {
                        x: n
                     });
                  if (t && h) {
                     const t = u - h;
                     if (o.default.sgn(t) === r) return a([f, h], [n, u], e, r, i - 1)
                  }
                  h = u, f = n
               }
               return {
                  asymptote: !1,
                  d0: t,
                  d1: n
               }
            }

            function u(t, n, e, r) {
               const u = o.default.space(t, e, r),
                  c = t.meta.yScale.domain(),
                  l = c[1] - c[0],
                  h = c[0] - 1e5 * l,
                  f = c[1] + 1e5 * l;
               let p = [];
               for (let t = 0; t < u.length; t += 1) {
                  const e = u[t],
                     r = (0, s.builtIn)(n, "fn", {
                        x: e
                     });
                  o.default.isValidNumber(e) && o.default.isValidNumber(r) && p.push([e, (0, i.default)(r, h, f)])
               }
               return p = function (t, n, e) {
                  let r, i, s, u = [];
                  const c = [],
                     l = t.meta.yScale.domain(),
                     h = l[0],
                     f = l[1];

                  function p(t) {
                     return t[1] = Math.min(t[1], f), t[1] = Math.max(t[1], h), t
                  }
                  for (e[0] && (u.push(e[0]), s = e[1][0] - e[0][0], i = o.default.sgn(e[1][1] - e[0][1])), r = 1; r < e.length;) {
                     const t = e[r - 1][1],
                        l = e[r][1] - t,
                        h = o.default.sgn(l);
                     if (i !== h && Math.abs(l / s) > 1) {
                        const t = a(e[r - 1], e[r], n, h, 3);
                        t.asymptote && (u.push(p(t.d0)), c.push(u), u = [p(t.d1)])
                     }
                     i = h, u.push(e[r]), ++r
                  }
                  return u.length && c.push(u), c
               }(t, n, p), p
            }

            function c(t, n, e, r) {
               const i = n.range || [0, 2 * Math.PI],
                  a = o.default.space(t, i, r),
                  u = [];
               for (let t = 0; t < a.length; t += 1) {
                  const e = a[t],
                     r = (0, s.builtIn)(n, "x", {
                        t: e
                     }),
                     i = (0, s.builtIn)(n, "y", {
                        t: e
                     });
                  u.push([r, i])
               }
               return [u]
            }

            function l(t, n, e, r) {
               const i = n.range || [-Math.PI, Math.PI],
                  a = o.default.space(t, i, r),
                  u = [];
               for (let t = 0; t < a.length; t += 1) {
                  const e = a[t],
                     r = (0, s.builtIn)(n, "r", {
                        theta: e
                     }),
                     i = r * Math.cos(e),
                     o = r * Math.sin(e);
                  u.push([i, o])
               }
               return [u]
            }

            function h(t, n, e, r) {
               return [n.points]
            }

            function f(t, n, e, r) {
               return n.offset = n.offset || [0, 0], [
                  [n.offset, [n.vector[0] + n.offset[0], n.vector[1] + n.offset[1]]]
               ]
            }
            n.default = function (t, n, e, r) {
               const i = {
                  parametric: c,
                  polar: l,
                  points: h,
                  vector: f,
                  linear: u
               };
               if (!(n.fnType in i)) throw Error(n.fnType + " is not supported in the `builtIn` sampler");
               return i[n.fnType].apply(null, arguments)
            }
         },
         4920: function (t, n, e) {
            "use strict";
            var r = this && this.__importDefault || function (t) {
               return t && t.__esModule ? t : {
                  default: t
               }
            };
            Object.defineProperty(n, "__esModule", {
               value: !0
            }), n.interval = n.builtIn = void 0;
            const i = r(e(7777));
            n.builtIn = i.default;
            const o = r(e(8458));
            n.interval = o.default
         },
         8458: function (t, n, e) {
            "use strict";
            var r = this && this.__createBinding || (Object.create ? function (t, n, e, r) {
                  void 0 === r && (r = e);
                  var i = Object.getOwnPropertyDescriptor(n, e);
                  i && !("get" in i ? !n.__esModule : i.writable || i.configurable) || (i = {
                     enumerable: !0,
                     get: function () {
                        return n[e]
                     }
                  }), Object.defineProperty(t, r, i)
               } : function (t, n, e, r) {
                  void 0 === r && (r = e), t[r] = n[e]
               }),
               i = this && this.__setModuleDefault || (Object.create ? function (t, n) {
                  Object.defineProperty(t, "default", {
                     enumerable: !0,
                     value: n
                  })
               } : function (t, n) {
                  t.default = n
               }),
               o = this && this.__importStar || function (t) {
                  if (t && t.__esModule) return t;
                  var n = {};
                  if (null != t)
                     for (var e in t) "default" !== e && Object.prototype.hasOwnProperty.call(t, e) && r(n, t, e);
                  return i(n, t), n
               },
               s = this && this.__importDefault || function (t) {
                  return t && t.__esModule ? t : {
                     default: t
                  }
               };
            Object.defineProperty(n, "__esModule", {
               value: !0
            });
            const a = o(e(8867)),
               u = e(1669),
               c = s(e(8593));

            function l(t, n, e, r) {
               const i = c.default.space(t, e, r),
                  o = t.meta.xScale,
                  s = t.meta.yScale,
                  l = s.domain()[0],
                  h = s.domain()[1],
                  f = [];
               let p;
               for (p = 0; p < i.length - 1; p += 1) {
                  const t = {
                        lo: i[p],
                        hi: i[p + 1]
                     },
                     e = (0, u.interval)(n, "fn", {
                        x: t
                     });
                  a.Interval.isEmpty(e) || a.Interval.isWhole(e) || f.push([t, e]), a.Interval.isWhole(e) && f.push(null)
               }
               for (p = 1; p < f.length - 1; p += 1)
                  if (!f[p]) {
                     const t = f[p - 1],
                        n = f[p + 1];
                     t && n && !a.Interval.intervalsOverlap(t[1], n[1]) && (t[1].lo > n[1].hi && (t[1].hi = Math.max(h, t[1].hi), n[1].lo = Math.min(l, n[1].lo)), t[1].hi < n[1].lo && (t[1].lo = Math.min(l, t[1].lo), n[1].hi = Math.max(h, n[1].hi)))
                  } return f.scaledDx = o(i[1]) - o(i[0]), [f]
            }
            let h;

            function f(t, n, e) {
               const r = (0, u.interval)(e, "fn", {
                  x: t,
                  y: n
               });
               if (!a.Interval.zeroIn(r)) return this;
               if (function (t, n) {
                     return a.Interval.width(t) < h
                  }(t)) return this.push([t, n]), this;
               const i = t.lo + (t.hi - t.lo) / 2,
                  o = n.lo + (n.hi - n.lo) / 2,
                  s = {
                     lo: i,
                     hi: t.hi
                  },
                  c = {
                     lo: t.lo,
                     hi: i
                  },
                  l = {
                     lo: o,
                     hi: n.hi
                  },
                  p = {
                     lo: n.lo,
                     hi: o
                  };
               f.call(this, s, l, e), f.call(this, s, p, e), f.call(this, c, l, e), f.call(this, c, p, e)
            }

            function p(t, n) {
               const e = t.meta.xScale,
                  r = t.meta.xScale.domain(),
                  i = t.meta.yScale.domain(),
                  o = {
                     lo: r[0],
                     hi: r[1]
                  },
                  s = {
                     lo: i[0],
                     hi: i[1]
                  },
                  a = [];
               return h = e.invert(1) - e.invert(0), f.call(a, o, s, n), a.scaledDx = 1, [a]
            }
            a.default.policies.disableRounding(), n.default = function (t, n, e, r) {
               const i = {
                  implicit: p,
                  linear: l
               };
               if (!i.hasOwnProperty(n.fnType)) throw Error(n.fnType + " is not supported in the `interval` sampler");
               return i[n.fnType].apply(null, arguments)
            }
         },
         953: function (t, n, e) {
            "use strict";
            var r = this && this.__importDefault || function (t) {
               return t && t.__esModule ? t : {
                  default: t
               }
            };
            Object.defineProperty(n, "__esModule", {
               value: !0
            });
            const i = e(6660),
               o = e(3905),
               s = r(e(5627)),
               a = r(e(8593)),
               u = r(e(5888)),
               c = e(1669);
            n.default = function (t) {
               t = Object.assign({
                  xLine: !1,
                  yLine: !1,
                  renderer: function (t, n) {
                     return "(" + t.toFixed(3) + ", " + n.toFixed(3) + ")"
                  },
                  owner: null
               }, t);
               const n = 20,
                  e = (0, i.line)().x((function (t) {
                     return t[0]
                  })).y((function (t) {
                     return t[1]
                  }));

               function r(t, n) {
                  return t.append("path").datum(n).attr("stroke", "grey").attr("stroke-dasharray", "5,5").attr("opacity", .5).attr("d", e)
               }
               let l, h;

               function f(e) {
                  const i = e.selectAll("g.tip").data((function (t) {
                        return [t]
                     })),
                     s = i.enter().append("g").attr("class", "tip").attr("clip-path", "url(#function-plot-clip-" + t.owner.id + ")");
                  l = i.merge(s).selectAll("g.inner-tip").data((function (t) {
                     return [t]
                  })), h = l.enter().append("g").attr("class", "inner-tip").style("display", "none").each((function () {
                     const e = (0, o.select)(this);
                     r(e, [
                        [0, -t.owner.meta.height - n],
                        [0, t.owner.meta.height + n]
                     ]).attr("class", "tip-x-line").style("display", "none"), r(e, [
                        [-t.owner.meta.width - n, 0],
                        [t.owner.meta.width + n, 0]
                     ]).attr("class", "tip-y-line").style("display", "none"), e.append("circle").attr("r", 3), e.append("text").attr("transform", "translate(5,-5)")
                  })), l.merge(h).selectAll(".tip-x-line").style("display", t.xLine ? null : "none"), l.merge(h).selectAll(".tip-y-line").style("display", t.yLine ? null : "none")
               }
               return f.move = function (e) {
                  let r, i, o, p = 1 / 0,
                     d = -1;
                  const y = l.merge(h),
                     m = 1e8,
                     _ = t.owner.meta,
                     v = y.datum().data,
                     g = _.xScale,
                     x = _.yScale,
                     w = _.width,
                     b = _.height,
                     M = e.x,
                     T = e.y;
                  for (r = 0; r < v.length; r += 1) {
                     if (v[r].skipTip || "linear" !== v[r].fnType) continue;
                     const t = v[r].range || [-m, m];
                     let n;
                     if (M > t[0] - u.default.TIP_X_EPS && M < t[1] + u.default.TIP_X_EPS) {
                        try {
                           n = (0, c.builtIn)(v[r], "fn", {
                              x: M
                           })
                        } catch (t) {}
                        if (a.default.isValidNumber(n)) {
                           const t = Math.abs(n - T);
                           t < p && (p = t, d = r)
                        }
                     }
                  }
                  if (-1 !== d) {
                     i = M, v[d].range && (i = Math.max(i, v[d].range[0]), i = Math.min(i, v[d].range[1])), o = (0, c.builtIn)(v[d], "fn", {
                        x: i
                     }), f.show(), t.owner.emit("tip:update", {
                        x: i,
                        y: o,
                        index: d
                     });
                     const e = (0, s.default)(i, g.invert(-20), g.invert(w + n)),
                        r = (0, s.default)(o, x.invert(b + n), x.invert(-20)),
                        u = a.default.color(v[d], d);
                     y.style("color", "red"), y.attr("transform", "translate(" + g(e) + "," + x(r) + ")"), y.select("circle").attr("fill", u), y.select("text").attr("fill", u).text(t.renderer(i, o, d))
                  } else f.hide()
               }, f.show = function () {
                  l.merge(h).style("display", null)
               }, f.hide = function () {
                  l.merge(h).style("display", "none")
               }, Object.keys(t).forEach((function (n) {
                  a.default.getterSetter.call(f, t, n)
               })), f
            }
         },
         9699: (t, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
               value: !0
            })
         },
         8593: function (t, n, e) {
            "use strict";
            var r = this && this.__importDefault || function (t) {
               return t && t.__esModule ? t : {
                  default: t
               }
            };
            Object.defineProperty(n, "__esModule", {
               value: !0
            });
            const i = r(e(5888)),
               o = {
                  linspace: function (t, n, e) {
                     const r = (n - t) / (e - 1);
                     return Array.from({
                        length: e
                     }, ((n, e) => t + r * e))
                  },
                  logspace: function (t, n, e) {
                     return this.linspace(t, n, e).map((t => Math.pow(10, t)))
                  },
                  isValidNumber: function (t) {
                     return "number" == typeof t && !isNaN(t)
                  },
                  space: function (t, n, e) {
                     const r = n[0],
                        i = n[1];
                     return "log" === t.options.xAxis.type ? this.logspace(Math.log10(r), Math.log10(i), e) : this.linspace(r, i, e)
                  },
                  getterSetter: function (t, n) {
                     const e = this;
                     this[n] = function (r) {
                        return arguments.length ? (t[n] = r, e) : t[n]
                     }
                  },
                  sgn: function (t) {
                     return t < 0 ? -1 : t > 0 ? 1 : 0
                  },
                  color: function (t, n) {
                     let e = n % i.default.COLORS.length;
                     return t.color || i.default.COLORS[e].hex()
                  }
               };
            n.default = o
         },
         8873: (t, n, e) => {
            "use strict";

            function r(t) {
               return t
            }
            e.r(n), e.d(n, {
               axisBottom: () => _,
               axisLeft: () => v,
               axisRight: () => m,
               axisTop: () => y
            });
            var i = 1,
               o = 2,
               s = 3,
               a = 4,
               u = 1e-6;

            function c(t) {
               return "translate(" + t + ",0)"
            }

            function l(t) {
               return "translate(0," + t + ")"
            }

            function h(t) {
               return n => +t(n)
            }

            function f(t, n) {
               return n = Math.max(0, t.bandwidth() - 2 * n) / 2, t.round() && (n = Math.round(n)), e => +t(e) + n
            }

            function p() {
               return !this.__axis
            }

            function d(t, n) {
               var e = [],
                  d = null,
                  y = null,
                  m = 6,
                  _ = 6,
                  v = 3,
                  g = "undefined" != typeof window && window.devicePixelRatio > 1 ? 0 : .5,
                  x = t === i || t === a ? -1 : 1,
                  w = t === a || t === o ? "x" : "y",
                  b = t === i || t === s ? c : l;

               function M(c) {
                  var l = null == d ? n.ticks ? n.ticks.apply(n, e) : n.domain() : d,
                     M = null == y ? n.tickFormat ? n.tickFormat.apply(n, e) : r : y,
                     T = Math.max(m, 0) + v,
                     E = n.range(),
                     k = +E[0] + g,
                     N = +E[E.length - 1] + g,
                     A = (n.bandwidth ? f : h)(n.copy(), g),
                     S = c.selection ? c.selection() : c,
                     P = S.selectAll(".domain").data([null]),
                     O = S.selectAll(".tick").data(l, n).order(),
                     L = O.exit(),
                     I = O.enter().append("g").attr("class", "tick"),
                     Z = O.select("line"),
                     C = O.select("text");
                  P = P.merge(P.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), O = O.merge(I), Z = Z.merge(I.append("line").attr("stroke", "currentColor").attr(w + "2", x * m)), C = C.merge(I.append("text").attr("fill", "currentColor").attr(w, x * T).attr("dy", t === i ? "0em" : t === s ? "0.71em" : "0.32em")), c !== S && (P = P.transition(c), O = O.transition(c), Z = Z.transition(c), C = C.transition(c), L = L.transition(c).attr("opacity", u).attr("transform", (function (t) {
                     return isFinite(t = A(t)) ? b(t + g) : this.getAttribute("transform")
                  })), I.attr("opacity", u).attr("transform", (function (t) {
                     var n = this.parentNode.__axis;
                     return b((n && isFinite(n = n(t)) ? n : A(t)) + g)
                  }))), L.remove(), P.attr("d", t === a || t === o ? _ ? "M" + x * _ + "," + k + "H" + g + "V" + N + "H" + x * _ : "M" + g + "," + k + "V" + N : _ ? "M" + k + "," + x * _ + "V" + g + "H" + N + "V" + x * _ : "M" + k + "," + g + "H" + N), O.attr("opacity", 1).attr("transform", (function (t) {
                     return b(A(t) + g)
                  })), Z.attr(w + "2", x * m), C.attr(w, x * T).text(M), S.filter(p).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === o ? "start" : t === a ? "end" : "middle"), S.each((function () {
                     this.__axis = A
                  }))
               }
               return M.scale = function (t) {
                  return arguments.length ? (n = t, M) : n
               }, M.ticks = function () {
                  return e = Array.from(arguments), M
               }, M.tickArguments = function (t) {
                  return arguments.length ? (e = null == t ? [] : Array.from(t), M) : e.slice()
               }, M.tickValues = function (t) {
                  return arguments.length ? (d = null == t ? null : Array.from(t), M) : d && d.slice()
               }, M.tickFormat = function (t) {
                  return arguments.length ? (y = t, M) : y
               }, M.tickSize = function (t) {
                  return arguments.length ? (m = _ = +t, M) : m
               }, M.tickSizeInner = function (t) {
                  return arguments.length ? (m = +t, M) : m
               }, M.tickSizeOuter = function (t) {
                  return arguments.length ? (_ = +t, M) : _
               }, M.tickPadding = function (t) {
                  return arguments.length ? (v = +t, M) : v
               }, M.offset = function (t) {
                  return arguments.length ? (g = +t, M) : g
               }, M
            }

            function y(t) {
               return d(i, t)
            }

            function m(t) {
               return d(o, t)
            }

            function _(t) {
               return d(s, t)
            }

            function v(t) {
               return d(a, t)
            }
         },
         4447: (t, n, e) => {
            "use strict";
            e.d(n, {
               B8: () => T,
               Il: () => i,
               J5: () => s,
               SU: () => M,
               Ss: () => E,
               Ym: () => I,
               ZP: () => x,
               xV: () => o
            });
            var r = e(9531);

            function i() {}
            var o = .7,
               s = 1 / o,
               a = "\\s*([+-]?\\d+)\\s*",
               u = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
               c = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
               l = /^#([0-9a-f]{3,8})$/,
               h = new RegExp(`^rgb\\(${a},${a},${a}\\)$`),
               f = new RegExp(`^rgb\\(${c},${c},${c}\\)$`),
               p = new RegExp(`^rgba\\(${a},${a},${a},${u}\\)$`),
               d = new RegExp(`^rgba\\(${c},${c},${c},${u}\\)$`),
               y = new RegExp(`^hsl\\(${u},${c},${c}\\)$`),
               m = new RegExp(`^hsla\\(${u},${c},${c},${u}\\)$`),
               _ = {
                  aliceblue: 15792383,
                  antiquewhite: 16444375,
                  aqua: 65535,
                  aquamarine: 8388564,
                  azure: 15794175,
                  beige: 16119260,
                  bisque: 16770244,
                  black: 0,
                  blanchedalmond: 16772045,
                  blue: 255,
                  blueviolet: 9055202,
                  brown: 10824234,
                  burlywood: 14596231,
                  cadetblue: 6266528,
                  chartreuse: 8388352,
                  chocolate: 13789470,
                  coral: 16744272,
                  cornflowerblue: 6591981,
                  cornsilk: 16775388,
                  crimson: 14423100,
                  cyan: 65535,
                  darkblue: 139,
                  darkcyan: 35723,
                  darkgoldenrod: 12092939,
                  darkgray: 11119017,
                  darkgreen: 25600,
                  darkgrey: 11119017,
                  darkkhaki: 12433259,
                  darkmagenta: 9109643,
                  darkolivegreen: 5597999,
                  darkorange: 16747520,
                  darkorchid: 10040012,
                  darkred: 9109504,
                  darksalmon: 15308410,
                  darkseagreen: 9419919,
                  darkslateblue: 4734347,
                  darkslategray: 3100495,
                  darkslategrey: 3100495,
                  darkturquoise: 52945,
                  darkviolet: 9699539,
                  deeppink: 16716947,
                  deepskyblue: 49151,
                  dimgray: 6908265,
                  dimgrey: 6908265,
                  dodgerblue: 2003199,
                  firebrick: 11674146,
                  floralwhite: 16775920,
                  forestgreen: 2263842,
                  fuchsia: 16711935,
                  gainsboro: 14474460,
                  ghostwhite: 16316671,
                  gold: 16766720,
                  goldenrod: 14329120,
                  gray: 8421504,
                  green: 32768,
                  greenyellow: 11403055,
                  grey: 8421504,
                  honeydew: 15794160,
                  hotpink: 16738740,
                  indianred: 13458524,
                  indigo: 4915330,
                  ivory: 16777200,
                  khaki: 15787660,
                  lavender: 15132410,
                  lavenderblush: 16773365,
                  lawngreen: 8190976,
                  lemonchiffon: 16775885,
                  lightblue: 11393254,
                  lightcoral: 15761536,
                  lightcyan: 14745599,
                  lightgoldenrodyellow: 16448210,
                  lightgray: 13882323,
                  lightgreen: 9498256,
                  lightgrey: 13882323,
                  lightpink: 16758465,
                  lightsalmon: 16752762,
                  lightseagreen: 2142890,
                  lightskyblue: 8900346,
                  lightslategray: 7833753,
                  lightslategrey: 7833753,
                  lightsteelblue: 11584734,
                  lightyellow: 16777184,
                  lime: 65280,
                  limegreen: 3329330,
                  linen: 16445670,
                  magenta: 16711935,
                  maroon: 8388608,
                  mediumaquamarine: 6737322,
                  mediumblue: 205,
                  mediumorchid: 12211667,
                  mediumpurple: 9662683,
                  mediumseagreen: 3978097,
                  mediumslateblue: 8087790,
                  mediumspringgreen: 64154,
                  mediumturquoise: 4772300,
                  mediumvioletred: 13047173,
                  midnightblue: 1644912,
                  mintcream: 16121850,
                  mistyrose: 16770273,
                  moccasin: 16770229,
                  navajowhite: 16768685,
                  navy: 128,
                  oldlace: 16643558,
                  olive: 8421376,
                  olivedrab: 7048739,
                  orange: 16753920,
                  orangered: 16729344,
                  orchid: 14315734,
                  palegoldenrod: 15657130,
                  palegreen: 10025880,
                  paleturquoise: 11529966,
                  palevioletred: 14381203,
                  papayawhip: 16773077,
                  peachpuff: 16767673,
                  peru: 13468991,
                  pink: 16761035,
                  plum: 14524637,
                  powderblue: 11591910,
                  purple: 8388736,
                  rebeccapurple: 6697881,
                  red: 16711680,
                  rosybrown: 12357519,
                  royalblue: 4286945,
                  saddlebrown: 9127187,
                  salmon: 16416882,
                  sandybrown: 16032864,
                  seagreen: 3050327,
                  seashell: 16774638,
                  sienna: 10506797,
                  silver: 12632256,
                  skyblue: 8900331,
                  slateblue: 6970061,
                  slategray: 7372944,
                  slategrey: 7372944,
                  snow: 16775930,
                  springgreen: 65407,
                  steelblue: 4620980,
                  tan: 13808780,
                  teal: 32896,
                  thistle: 14204888,
                  tomato: 16737095,
                  turquoise: 4251856,
                  violet: 15631086,
                  wheat: 16113331,
                  white: 16777215,
                  whitesmoke: 16119285,
                  yellow: 16776960,
                  yellowgreen: 10145074
               };

            function v() {
               return this.rgb().formatHex()
            }

            function g() {
               return this.rgb().formatRgb()
            }

            function x(t) {
               var n, e;
               return t = (t + "").trim().toLowerCase(), (n = l.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), 6 === e ? w(n) : 3 === e ? new E(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : 8 === e ? b(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (255 & n) / 255) : 4 === e ? b(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, ((15 & n) << 4 | 15 & n) / 255) : null) : (n = h.exec(t)) ? new E(n[1], n[2], n[3], 1) : (n = f.exec(t)) ? new E(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = p.exec(t)) ? b(n[1], n[2], n[3], n[4]) : (n = d.exec(t)) ? b(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = y.exec(t)) ? O(n[1], n[2] / 100, n[3] / 100, 1) : (n = m.exec(t)) ? O(n[1], n[2] / 100, n[3] / 100, n[4]) : _.hasOwnProperty(t) ? w(_[t]) : "transparent" === t ? new E(NaN, NaN, NaN, 0) : null
            }

            function w(t) {
               return new E(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
            }

            function b(t, n, e, r) {
               return r <= 0 && (t = n = e = NaN), new E(t, n, e, r)
            }

            function M(t) {
               return t instanceof i || (t = x(t)), t ? new E((t = t.rgb()).r, t.g, t.b, t.opacity) : new E
            }

            function T(t, n, e, r) {
               return 1 === arguments.length ? M(t) : new E(t, n, e, null == r ? 1 : r)
            }

            function E(t, n, e, r) {
               this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
            }

            function k() {
               return `#${P(this.r)}${P(this.g)}${P(this.b)}`
            }

            function N() {
               const t = A(this.opacity);
               return `${1===t?"rgb(":"rgba("}${S(this.r)}, ${S(this.g)}, ${S(this.b)}${1===t?")":`, ${t})`}`
            }

            function A(t) {
               return isNaN(t) ? 1 : Math.max(0, Math.min(1, t))
            }

            function S(t) {
               return Math.max(0, Math.min(255, Math.round(t) || 0))
            }

            function P(t) {
               return ((t = S(t)) < 16 ? "0" : "") + t.toString(16)
            }

            function O(t, n, e, r) {
               return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Z(t, n, e, r)
            }

            function L(t) {
               if (t instanceof Z) return new Z(t.h, t.s, t.l, t.opacity);
               if (t instanceof i || (t = x(t)), !t) return new Z;
               if (t instanceof Z) return t;
               var n = (t = t.rgb()).r / 255,
                  e = t.g / 255,
                  r = t.b / 255,
                  o = Math.min(n, e, r),
                  s = Math.max(n, e, r),
                  a = NaN,
                  u = s - o,
                  c = (s + o) / 2;
               return u ? (a = n === s ? (e - r) / u + 6 * (e < r) : e === s ? (r - n) / u + 2 : (n - e) / u + 4, u /= c < .5 ? s + o : 2 - s - o, a *= 60) : u = c > 0 && c < 1 ? 0 : a, new Z(a, u, c, t.opacity)
            }

            function I(t, n, e, r) {
               return 1 === arguments.length ? L(t) : new Z(t, n, e, null == r ? 1 : r)
            }

            function Z(t, n, e, r) {
               this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
            }

            function C(t) {
               return (t = (t || 0) % 360) < 0 ? t + 360 : t
            }

            function D(t) {
               return Math.max(0, Math.min(1, t || 0))
            }

            function H(t, n, e) {
               return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
            }(0, r.Z)(i, x, {
               copy(t) {
                  return Object.assign(new this.constructor, this, t)
               },
               displayable() {
                  return this.rgb().displayable()
               },
               hex: v,
               formatHex: v,
               formatHex8: function () {
                  return this.rgb().formatHex8()
               },
               formatHsl: function () {
                  return L(this).formatHsl()
               },
               formatRgb: g,
               toString: g
            }), (0, r.Z)(E, T, (0, r.l)(i, {
               brighter(t) {
                  return t = null == t ? s : Math.pow(s, t), new E(this.r * t, this.g * t, this.b * t, this.opacity)
               },
               darker(t) {
                  return t = null == t ? o : Math.pow(o, t), new E(this.r * t, this.g * t, this.b * t, this.opacity)
               },
               rgb() {
                  return this
               },
               clamp() {
                  return new E(S(this.r), S(this.g), S(this.b), A(this.opacity))
               },
               displayable() {
                  return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
               },
               hex: k,
               formatHex: k,
               formatHex8: function () {
                  return `#${P(this.r)}${P(this.g)}${P(this.b)}${P(255*(isNaN(this.opacity)?1:this.opacity))}`
               },
               formatRgb: N,
               toString: N
            })), (0, r.Z)(Z, I, (0, r.l)(i, {
               brighter(t) {
                  return t = null == t ? s : Math.pow(s, t), new Z(this.h, this.s, this.l * t, this.opacity)
               },
               darker(t) {
                  return t = null == t ? o : Math.pow(o, t), new Z(this.h, this.s, this.l * t, this.opacity)
               },
               rgb() {
                  var t = this.h % 360 + 360 * (this.h < 0),
                     n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                     e = this.l,
                     r = e + (e < .5 ? e : 1 - e) * n,
                     i = 2 * e - r;
                  return new E(H(t >= 240 ? t - 240 : t + 120, i, r), H(t, i, r), H(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
               },
               clamp() {
                  return new Z(C(this.h), D(this.s), D(this.l), A(this.opacity))
               },
               displayable() {
                  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
               },
               formatHsl() {
                  const t = A(this.opacity);
                  return `${1===t?"hsl(":"hsla("}${C(this.h)}, ${100*D(this.s)}%, ${100*D(this.l)}%${1===t?")":`, ${t})`}`
               }
            }))
         },
         5159: (t, n, e) => {
            "use strict";
            e.d(n, {
               Z: () => d
            });
            var r = e(9531),
               i = e(4447),
               o = e(5782),
               s = -.14861,
               a = 1.78277,
               u = -.29227,
               c = -.90649,
               l = 1.97294,
               h = l * c,
               f = l * a,
               p = a * u - c * s;

            function d(t, n, e, r) {
               return 1 === arguments.length ? function (t) {
                  if (t instanceof y) return new y(t.h, t.s, t.l, t.opacity);
                  t instanceof i.Ss || (t = (0, i.SU)(t));
                  var n = t.r / 255,
                     e = t.g / 255,
                     r = t.b / 255,
                     s = (p * r + h * n - f * e) / (p + h - f),
                     a = r - s,
                     d = (l * (e - s) - u * a) / c,
                     m = Math.sqrt(d * d + a * a) / (l * s * (1 - s)),
                     _ = m ? Math.atan2(d, a) * o.R - 120 : NaN;
                  return new y(_ < 0 ? _ + 360 : _, m, s, t.opacity)
               }(t) : new y(t, n, e, null == r ? 1 : r)
            }

            function y(t, n, e, r) {
               this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
            }(0, r.Z)(y, d, (0, r.l)(i.Il, {
               brighter(t) {
                  return t = null == t ? i.J5 : Math.pow(i.J5, t), new y(this.h, this.s, this.l * t, this.opacity)
               },
               darker(t) {
                  return t = null == t ? i.xV : Math.pow(i.xV, t), new y(this.h, this.s, this.l * t, this.opacity)
               },
               rgb() {
                  var t = isNaN(this.h) ? 0 : (this.h + 120) * o.u,
                     n = +this.l,
                     e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                     r = Math.cos(t),
                     h = Math.sin(t);
                  return new i.Ss(255 * (n + e * (s * r + a * h)), 255 * (n + e * (u * r + c * h)), 255 * (n + e * (l * r)), this.opacity)
               }
            }))
         },
         9531: (t, n, e) => {
            "use strict";

            function r(t, n, e) {
               t.prototype = n.prototype = e, e.constructor = t
            }

            function i(t, n) {
               var e = Object.create(t.prototype);
               for (var r in n) e[r] = n[r];
               return e
            }
            e.d(n, {
               Z: () => r,
               l: () => i
            })
         },
         6618: (t, n, e) => {
            "use strict";
            e.r(n), e.d(n, {
               color: () => r.ZP,
               cubehelix: () => o.Z,
               gray: () => i.MA,
               hcl: () => i.Uc,
               hsl: () => r.Ym,
               lab: () => i.ZP,
               lch: () => i.tW,
               rgb: () => r.B8
            });
            var r = e(4447),
               i = e(8990),
               o = e(5159)
         },
         8990: (t, n, e) => {
            "use strict";
            e.d(n, {
               MA: () => d,
               Uc: () => M,
               ZP: () => y,
               tW: () => b
            });
            var r = e(9531),
               i = e(4447),
               o = e(5782);
            const s = .96422,
               a = 1,
               u = .82521,
               c = 4 / 29,
               l = 6 / 29,
               h = 3 * l * l,
               f = l * l * l;

            function p(t) {
               if (t instanceof m) return new m(t.l, t.a, t.b, t.opacity);
               if (t instanceof T) return E(t);
               t instanceof i.Ss || (t = (0, i.SU)(t));
               var n, e, r = x(t.r),
                  o = x(t.g),
                  c = x(t.b),
                  l = _((.2225045 * r + .7168786 * o + .0606169 * c) / a);
               return r === o && o === c ? n = e = l : (n = _((.4360747 * r + .3850649 * o + .1430804 * c) / s), e = _((.0139322 * r + .0971045 * o + .7141733 * c) / u)), new m(116 * l - 16, 500 * (n - l), 200 * (l - e), t.opacity)
            }

            function d(t, n) {
               return new m(t, 0, 0, null == n ? 1 : n)
            }

            function y(t, n, e, r) {
               return 1 === arguments.length ? p(t) : new m(t, n, e, null == r ? 1 : r)
            }

            function m(t, n, e, r) {
               this.l = +t, this.a = +n, this.b = +e, this.opacity = +r
            }

            function _(t) {
               return t > f ? Math.pow(t, 1 / 3) : t / h + c
            }

            function v(t) {
               return t > l ? t * t * t : h * (t - c)
            }

            function g(t) {
               return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
            }

            function x(t) {
               return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
            }

            function w(t) {
               if (t instanceof T) return new T(t.h, t.c, t.l, t.opacity);
               if (t instanceof m || (t = p(t)), 0 === t.a && 0 === t.b) return new T(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
               var n = Math.atan2(t.b, t.a) * o.R;
               return new T(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
            }

            function b(t, n, e, r) {
               return 1 === arguments.length ? w(t) : new T(e, n, t, null == r ? 1 : r)
            }

            function M(t, n, e, r) {
               return 1 === arguments.length ? w(t) : new T(t, n, e, null == r ? 1 : r)
            }

            function T(t, n, e, r) {
               this.h = +t, this.c = +n, this.l = +e, this.opacity = +r
            }

            function E(t) {
               if (isNaN(t.h)) return new m(t.l, 0, 0, t.opacity);
               var n = t.h * o.u;
               return new m(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
            }(0, r.Z)(m, y, (0, r.l)(i.Il, {
               brighter(t) {
                  return new m(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
               },
               darker(t) {
                  return new m(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
               },
               rgb() {
                  var t = (this.l + 16) / 116,
                     n = isNaN(this.a) ? t : t + this.a / 500,
                     e = isNaN(this.b) ? t : t - this.b / 200;
                  return n = s * v(n), t = a * v(t), e = u * v(e), new i.Ss(g(3.1338561 * n - 1.6168667 * t - .4906146 * e), g(-.9787684 * n + 1.9161415 * t + .033454 * e), g(.0719453 * n - .2289914 * t + 1.4052427 * e), this.opacity)
               }
            })), (0, r.Z)(T, M, (0, r.l)(i.Il, {
               brighter(t) {
                  return new T(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
               },
               darker(t) {
                  return new T(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
               },
               rgb() {
                  return E(this).rgb()
               }
            }))
         },
         5782: (t, n, e) => {
            "use strict";
            e.d(n, {
               R: () => i,
               u: () => r
            });
            const r = Math.PI / 180,
               i = 180 / Math.PI
         },
         5386: (t, n, e) => {
            "use strict";
            e.d(n, {
               WU: () => i,
               ZP: () => a,
               jH: () => o
            });
            var r, i, o, s = e(28);

            function a(t) {
               return r = (0, s.Z)(t), i = r.format, o = r.formatPrefix, r
            }
            a({
               thousands: ",",
               grouping: [3],
               currency: ["$", ""]
            })
         },
         5368: (t, n, e) => {
            "use strict";
            e.d(n, {
               Z: () => i
            });
            var r = e(8613);

            function i(t) {
               return (t = (0, r.V)(Math.abs(t))) ? t[1] : NaN
            }
         },
         8613: (t, n, e) => {
            "use strict";

            function r(t) {
               return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10)
            }

            function i(t, n) {
               if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
               var e, r = t.slice(0, e);
               return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
            }
            e.d(n, {
               V: () => i,
               Z: () => r
            })
         },
         2035: (t, n, e) => {
            "use strict";
            e.d(n, {
               Z: () => i,
               v: () => o
            });
            var r = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

            function i(t) {
               if (!(n = r.exec(t))) throw new Error("invalid format: " + t);
               var n;
               return new o({
                  fill: n[1],
                  align: n[2],
                  sign: n[3],
                  symbol: n[4],
                  zero: n[5],
                  width: n[6],
                  comma: n[7],
                  precision: n[8] && n[8].slice(1),
                  trim: n[9],
                  type: n[10]
               })
            }

            function o(t) {
               this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + ""
            }
            i.prototype = o.prototype, o.prototype.toString = function () {
               return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
            }
         },
         103: (t, n, e) => {
            "use strict";
            e.r(n), e.d(n, {
               FormatSpecifier: () => o.v,
               format: () => r.WU,
               formatDefaultLocale: () => r.ZP,
               formatLocale: () => i.Z,
               formatPrefix: () => r.jH,
               formatSpecifier: () => o.Z,
               precisionFixed: () => s.Z,
               precisionPrefix: () => a.Z,
               precisionRound: () => u.Z
            });
            var r = e(5386),
               i = e(28),
               o = e(2035),
               s = e(6909),
               a = e(7017),
               u = e(3482)
         },
         28: (t, n, e) => {
            "use strict";
            e.d(n, {
               Z: () => f
            });
            var r, i = e(5368),
               o = e(2035),
               s = e(8613);

            function a(t, n) {
               var e = (0, s.V)(t, n);
               if (!e) return t + "";
               var r = e[0],
                  i = e[1];
               return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
            }
            const u = {
               "%": (t, n) => (100 * t).toFixed(n),
               b: t => Math.round(t).toString(2),
               c: t => t + "",
               d: s.Z,
               e: (t, n) => t.toExponential(n),
               f: (t, n) => t.toFixed(n),
               g: (t, n) => t.toPrecision(n),
               o: t => Math.round(t).toString(8),
               p: (t, n) => a(100 * t, n),
               r: a,
               s: function (t, n) {
                  var e = (0, s.V)(t, n);
                  if (!e) return t + "";
                  var i = e[0],
                     o = e[1],
                     a = o - (r = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
                     u = i.length;
                  return a === u ? i : a > u ? i + new Array(a - u + 1).join("0") : a > 0 ? i.slice(0, a) + "." + i.slice(a) : "0." + new Array(1 - a).join("0") + (0, s.V)(t, Math.max(0, n + a - 1))[0]
               },
               X: t => Math.round(t).toString(16).toUpperCase(),
               x: t => Math.round(t).toString(16)
            };

            function c(t) {
               return t
            }
            var l = Array.prototype.map,
               h = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

            function f(t) {
               var n, e, s = void 0 === t.grouping || void 0 === t.thousands ? c : (n = l.call(t.grouping, Number), e = t.thousands + "", function (t, r) {
                     for (var i = t.length, o = [], s = 0, a = n[0], u = 0; i > 0 && a > 0 && (u + a + 1 > r && (a = Math.max(1, r - u)), o.push(t.substring(i -= a, i + a)), !((u += a + 1) > r));) a = n[s = (s + 1) % n.length];
                     return o.reverse().join(e)
                  }),
                  a = void 0 === t.currency ? "" : t.currency[0] + "",
                  f = void 0 === t.currency ? "" : t.currency[1] + "",
                  p = void 0 === t.decimal ? "." : t.decimal + "",
                  d = void 0 === t.numerals ? c : function (t) {
                     return function (n) {
                        return n.replace(/[0-9]/g, (function (n) {
                           return t[+n]
                        }))
                     }
                  }(l.call(t.numerals, String)),
                  y = void 0 === t.percent ? "%" : t.percent + "",
                  m = void 0 === t.minus ? "−" : t.minus + "",
                  _ = void 0 === t.nan ? "NaN" : t.nan + "";

               function v(t) {
                  var n = (t = (0, o.Z)(t)).fill,
                     e = t.align,
                     i = t.sign,
                     c = t.symbol,
                     l = t.zero,
                     v = t.width,
                     g = t.comma,
                     x = t.precision,
                     w = t.trim,
                     b = t.type;
                  "n" === b ? (g = !0, b = "g") : u[b] || (void 0 === x && (x = 12), w = !0, b = "g"), (l || "0" === n && "=" === e) && (l = !0, n = "0", e = "=");
                  var M = "$" === c ? a : "#" === c && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "",
                     T = "$" === c ? f : /[%p]/.test(b) ? y : "",
                     E = u[b],
                     k = /[defgprs%]/.test(b);

                  function N(t) {
                     var o, a, u, c = M,
                        f = T;
                     if ("c" === b) f = E(t) + f, t = "";
                     else {
                        var y = (t = +t) < 0 || 1 / t < 0;
                        if (t = isNaN(t) ? _ : E(Math.abs(t), x), w && (t = function (t) {
                              t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r) switch (t[r]) {
                                 case ".":
                                    i = n = r;
                                    break;
                                 case "0":
                                    0 === i && (i = r), n = r;
                                    break;
                                 default:
                                    if (!+t[r]) break t;
                                    i > 0 && (i = 0)
                              }
                              return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t
                           }(t)), y && 0 == +t && "+" !== i && (y = !1), c = (y ? "(" === i ? i : m : "-" === i || "(" === i ? "" : i) + c, f = ("s" === b ? h[8 + r / 3] : "") + f + (y && "(" === i ? ")" : ""), k)
                           for (o = -1, a = t.length; ++o < a;)
                              if (48 > (u = t.charCodeAt(o)) || u > 57) {
                                 f = (46 === u ? p + t.slice(o + 1) : t.slice(o)) + f, t = t.slice(0, o);
                                 break
                              }
                     }
                     g && !l && (t = s(t, 1 / 0));
                     var N = c.length + t.length + f.length,
                        A = N < v ? new Array(v - N + 1).join(n) : "";
                     switch (g && l && (t = s(A + t, A.length ? v - f.length : 1 / 0), A = ""), e) {
                        case "<":
                           t = c + t + f + A;
                           break;
                        case "=":
                           t = c + A + t + f;
                           break;
                        case "^":
                           t = A.slice(0, N = A.length >> 1) + c + t + f + A.slice(N);
                           break;
                        default:
                           t = A + c + t + f
                     }
                     return d(t)
                  }
                  return x = void 0 === x ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x)), N.toString = function () {
                     return t + ""
                  }, N
               }
               return {
                  format: v,
                  formatPrefix: function (t, n) {
                     var e = v(((t = (0, o.Z)(t)).type = "f", t)),
                        r = 3 * Math.max(-8, Math.min(8, Math.floor((0, i.Z)(n) / 3))),
                        s = Math.pow(10, -r),
                        a = h[8 + r / 3];
                     return function (t) {
                        return e(s * t) + a
                     }
                  }
               }
            }
         },
         6909: (t, n, e) => {
            "use strict";
            e.d(n, {
               Z: () => i
            });
            var r = e(5368);

            function i(t) {
               return Math.max(0, -(0, r.Z)(Math.abs(t)))
            }
         },
         7017: (t, n, e) => {
            "use strict";
            e.d(n, {
               Z: () => i
            });
            var r = e(5368);

            function i(t, n) {
               return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor((0, r.Z)(n) / 3))) - (0, r.Z)(Math.abs(t)))
            }
         },
         3482: (t, n, e) => {
            "use strict";
            e.d(n, {
               Z: () => i
            });
            var r = e(5368);

            function i(t, n) {
               return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, (0, r.Z)(n) - (0, r.Z)(t)) + 1
            }
         },
         1606: (t, n, e) => {
            "use strict";
            e.d(n, {
               M: () => s,
               Z: () => o
            });
            var r = e(5326),
               i = e(5401);

            function o(t, n) {
               return ((0, i.v)(n) ? i.Z : s)(t, n)
            }

            function s(t, n) {
               var e, i = n ? n.length : 0,
                  o = t ? Math.min(i, t.length) : 0,
                  s = new Array(o),
                  a = new Array(i);
               for (e = 0; e < o; ++e) s[e] = (0, r.Z)(t[e], n[e]);
               for (; e < i; ++e) a[e] = n[e];
               return function (t) {
                  for (e = 0; e < o; ++e) a[e] = s[e](t);
                  return a
               }
            }
         },
         7265: (t, n, e) => {
            "use strict";

            function r(t, n, e, r, i) {
               var o = t * t,
                  s = o * t;
               return ((1 - 3 * t + 3 * o - s) * n + (4 - 6 * o + 3 * s) * e + (1 + 3 * t + 3 * o - 3 * s) * r + s * i) / 6
            }

            function i(t) {
               var n = t.length - 1;
               return function (e) {
                  var i = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
                     o = t[i],
                     s = t[i + 1],
                     a = i > 0 ? t[i - 1] : 2 * o - s,
                     u = i < n - 1 ? t[i + 2] : 2 * s - o;
                  return r((e - i / n) * n, a, o, s, u)
               }
            }
            e.d(n, {
               Z: () => i,
               t: () => r
            })
         },
         6068: (t, n, e) => {
            "use strict";
            e.d(n, {
               Z: () => i
            });
            var r = e(7265);

            function i(t) {
               var n = t.length;
               return function (e) {
                  var i = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                     o = t[(i + n - 1) % n],
                     s = t[i % n],
                     a = t[(i + 1) % n],
                     u = t[(i + 2) % n];
                  return (0, r.t)((e - i / n) * n, o, s, a, u)
               }
            }
         },
         8280: (t, n, e) => {
            "use strict";
            e.d(n, {
               ZP: () => a,
               wx: () => o,
               yi: () => s
            });
            var r = e(2954);

            function i(t, n) {
               return function (e) {
                  return t + e * n
               }
            }

            function o(t, n) {
               var e = n - t;
               return e ? i(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : (0, r.Z)(isNaN(t) ? n : t)
            }

            function s(t) {
               return 1 == (t = +t) ? a : function (n, e) {
                  return e - n ? function (t, n, e) {
                     return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
                        function (r) {
                           return Math.pow(t + r * n, e)
                        }
                  }(n, e, t) : (0, r.Z)(isNaN(n) ? e : n)
               }
            }

            function a(t, n) {
               var e = n - t;
               return e ? i(t, e) : (0, r.Z)(isNaN(t) ? n : t)
            }
         },
         2954: (t, n, e) => {
            "use strict";
            e.d(n, {
               Z: () => r
            });
            const r = t => () => t
         },
         6246: (t, n, e) => {
            "use strict";

            function r(t, n) {
               var e = new Date;
               return t = +t, n = +n,
                  function (r) {
                     return e.setTime(t * (1 - r) + n * r), e
                  }
            }
            e.d(n, {
               Z: () => r
            })
         },
         9928: (t, n, e) => {
            "use strict";
            e.r(n), e.d(n, {
               interpolate: () => r.Z,
               interpolateArray: () => i.Z,
               interpolateBasis: () => o.Z,
               interpolateBasisClosed: () => s.Z,
               interpolateCubehelix: () => P,
               interpolateCubehelixLong: () => O,
               interpolateDate: () => a.Z,
               interpolateDiscrete: () => u,
               interpolateHcl: () => k,
               interpolateHclLong: () => N,
               interpolateHsl: () => w,
               interpolateHslLong: () => b,
               interpolateHue: () => l,
               interpolateLab: () => T,
               interpolateNumber: () => h.Z,
               interpolateNumberArray: () => f.Z,
               interpolateObject: () => p.Z,
               interpolateRgb: () => v.ZP,
               interpolateRgbBasis: () => v.hD,
               interpolateRgbBasisClosed: () => v.YD,
               interpolateRound: () => d.Z,
               interpolateString: () => y.Z,
               interpolateTransformCss: () => m.Y,
               interpolateTransformSvg: () => m.w,
               interpolateZoom: () => _.Z,
               piecewise: () => L.Z,
               quantize: () => I
            });
            var r = e(5326),
               i = e(1606),
               o = e(7265),
               s = e(6068),
               a = e(6246);

            function u(t) {
               var n = t.length;
               return function (e) {
                  return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
               }
            }
            var c = e(8280);

            function l(t, n) {
               var e = (0, c.wx)(+t, +n);
               return function (t) {
                  var n = e(t);
                  return n - 360 * Math.floor(n / 360)
               }
            }
            var h = e(8063),
               f = e(5401),
               p = e(8296),
               d = e(4635),
               y = e(6773),
               m = e(6556),
               _ = e(8167),
               v = e(6354),
               g = e(4447);

            function x(t) {
               return function (n, e) {
                  var r = t((n = (0, g.Ym)(n)).h, (e = (0, g.Ym)(e)).h),
                     i = (0, c.ZP)(n.s, e.s),
                     o = (0, c.ZP)(n.l, e.l),
                     s = (0, c.ZP)(n.opacity, e.opacity);
                  return function (t) {
                     return n.h = r(t), n.s = i(t), n.l = o(t), n.opacity = s(t), n + ""
                  }
               }
            }
            const w = x(c.wx);
            var b = x(c.ZP),
               M = e(8990);

            function T(t, n) {
               var e = (0, c.ZP)((t = (0, M.ZP)(t)).l, (n = (0, M.ZP)(n)).l),
                  r = (0, c.ZP)(t.a, n.a),
                  i = (0, c.ZP)(t.b, n.b),
                  o = (0, c.ZP)(t.opacity, n.opacity);
               return function (n) {
                  return t.l = e(n), t.a = r(n), t.b = i(n), t.opacity = o(n), t + ""
               }
            }

            function E(t) {
               return function (n, e) {
                  var r = t((n = (0, M.Uc)(n)).h, (e = (0, M.Uc)(e)).h),
                     i = (0, c.ZP)(n.c, e.c),
                     o = (0, c.ZP)(n.l, e.l),
                     s = (0, c.ZP)(n.opacity, e.opacity);
                  return function (t) {
                     return n.h = r(t), n.c = i(t), n.l = o(t), n.opacity = s(t), n + ""
                  }
               }
            }
            const k = E(c.wx);
            var N = E(c.ZP),
               A = e(5159);

            function S(t) {
               return function n(e) {
                  function r(n, r) {
                     var i = t((n = (0, A.Z)(n)).h, (r = (0, A.Z)(r)).h),
                        o = (0, c.ZP)(n.s, r.s),
                        s = (0, c.ZP)(n.l, r.l),
                        a = (0, c.ZP)(n.opacity, r.opacity);
                     return function (t) {
                        return n.h = i(t), n.s = o(t), n.l = s(Math.pow(t, e)), n.opacity = a(t), n + ""
                     }
                  }
                  return e = +e, r.gamma = n, r
               }(1)
            }
            const P = S(c.wx);
            var O = S(c.ZP),
               L = e(9640);

            function I(t, n) {
               for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
               return e
            }
         },
         8063: (t, n, e) => {
            "use strict";

            function r(t, n) {
               return t = +t, n = +n,
                  function (e) {
                     return t * (1 - e) + n * e
                  }
            }
            e.d(n, {
               Z: () => r
            })
         },
         5401: (t, n, e) => {
            "use strict";

            function r(t, n) {
               n || (n = []);
               var e, r = t ? Math.min(n.length, t.length) : 0,
                  i = n.slice();
               return function (o) {
                  for (e = 0; e < r; ++e) i[e] = t[e] * (1 - o) + n[e] * o;
                  return i
               }
            }

            function i(t) {
               return ArrayBuffer.isView(t) && !(t instanceof DataView)
            }
            e.d(n, {
               Z: () => r,
               v: () => i
            })
         },
         8296: (t, n, e) => {
            "use strict";
            e.d(n, {
               Z: () => i
            });
            var r = e(5326);

            function i(t, n) {
               var e, i = {},
                  o = {};
               for (e in null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {}), n) e in t ? i[e] = (0, r.Z)(t[e], n[e]) : o[e] = n[e];
               return function (t) {
                  for (e in i) o[e] = i[e](t);
                  return o
               }
            }
         },
         9640: (t, n, e) => {
            "use strict";
            e.d(n, {
               Z: () => i
            });
            var r = e(5326);

            function i(t, n) {
               void 0 === n && (n = t, t = r.Z);
               for (var e = 0, i = n.length - 1, o = n[0], s = new Array(i < 0 ? 0 : i); e < i;) s[e] = t(o, o = n[++e]);
               return function (t) {
                  var n = Math.max(0, Math.min(i - 1, Math.floor(t *= i)));
                  return s[n](t - n)
               }
            }
         },
         6354: (t, n, e) => {
            "use strict";
            e.d(n, {
               YD: () => l,
               ZP: () => a,
               hD: () => c
            });
            var r = e(4447),
               i = e(7265),
               o = e(6068),
               s = e(8280);
            const a = function t(n) {
               var e = (0, s.yi)(n);

               function i(t, n) {
                  var i = e((t = (0, r.B8)(t)).r, (n = (0, r.B8)(n)).r),
                     o = e(t.g, n.g),
                     a = e(t.b, n.b),
                     u = (0, s.ZP)(t.opacity, n.opacity);
                  return function (n) {
                     return t.r = i(n), t.g = o(n), t.b = a(n), t.opacity = u(n), t + ""
                  }
               }
               return i.gamma = t, i
            }(1);

            function u(t) {
               return function (n) {
                  var e, i, o = n.length,
                     s = new Array(o),
                     a = new Array(o),
                     u = new Array(o);
                  for (e = 0; e < o; ++e) i = (0, r.B8)(n[e]), s[e] = i.r || 0, a[e] = i.g || 0, u[e] = i.b || 0;
                  return s = t(s), a = t(a), u = t(u), i.opacity = 1,
                     function (t) {
                        return i.r = s(t), i.g = a(t), i.b = u(t), i + ""
                     }
               }
            }
            var c = u(i.Z),
               l = u(o.Z)
         },
         4635: (t, n, e) => {
            "use strict";

            function r(t, n) {
               return t = +t, n = +n,
                  function (e) {
                     return Math.round(t * (1 - e) + n * e)
                  }
            }
            e.d(n, {
               Z: () => r
            })
         },
         6773: (t, n, e) => {
            "use strict";
            e.d(n, {
               Z: () => s
            });
            var r = e(8063),
               i = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
               o = new RegExp(i.source, "g");

            function s(t, n) {
               var e, s, a, u = i.lastIndex = o.lastIndex = 0,
                  c = -1,
                  l = [],
                  h = [];
               for (t += "", n += "";
                  (e = i.exec(t)) && (s = o.exec(n));)(a = s.index) > u && (a = n.slice(u, a), l[c] ? l[c] += a : l[++c] = a), (e = e[0]) === (s = s[0]) ? l[c] ? l[c] += s : l[++c] = s : (l[++c] = null, h.push({
                  i: c,
                  x: (0, r.Z)(e, s)
               })), u = o.lastIndex;
               return u < n.length && (a = n.slice(u), l[c] ? l[c] += a : l[++c] = a), l.length < 2 ? h[0] ? function (t) {
                  return function (n) {
                     return t(n) + ""
                  }
               }(h[0].x) : function (t) {
                  return function () {
                     return t
                  }
               }(n) : (n = h.length, function (t) {
                  for (var e, r = 0; r < n; ++r) l[(e = h[r]).i] = e.x(t);
                  return l.join("")
               })
            }
         },
         6556: (t, n, e) => {
            "use strict";
            e.d(n, {
               Y: () => c,
               w: () => l
            });
            var r, i = e(8063),
               o = 180 / Math.PI,
               s = {
                  translateX: 0,
                  translateY: 0,
                  rotate: 0,
                  skewX: 0,
                  scaleX: 1,
                  scaleY: 1
               };

            function a(t, n, e, r, i, s) {
               var a, u, c;
               return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (c = t * e + n * r) && (e -= t * c, r -= n * c), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, c /= u), t * r < n * e && (t = -t, n = -n, c = -c, a = -a), {
                  translateX: i,
                  translateY: s,
                  rotate: Math.atan2(n, t) * o,
                  skewX: Math.atan(c) * o,
                  scaleX: a,
                  scaleY: u
               }
            }

            function u(t, n, e, r) {
               function o(t) {
                  return t.length ? t.pop() + " " : ""
               }
               return function (s, a) {
                  var u = [],
                     c = [];
                  return s = t(s), a = t(a),
                     function (t, r, o, s, a, u) {
                        if (t !== o || r !== s) {
                           var c = a.push("translate(", null, n, null, e);
                           u.push({
                              i: c - 4,
                              x: (0, i.Z)(t, o)
                           }, {
                              i: c - 2,
                              x: (0, i.Z)(r, s)
                           })
                        } else(o || s) && a.push("translate(" + o + n + s + e)
                     }(s.translateX, s.translateY, a.translateX, a.translateY, u, c),
                     function (t, n, e, s) {
                        t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), s.push({
                           i: e.push(o(e) + "rotate(", null, r) - 2,
                           x: (0, i.Z)(t, n)
                        })) : n && e.push(o(e) + "rotate(" + n + r)
                     }(s.rotate, a.rotate, u, c),
                     function (t, n, e, s) {
                        t !== n ? s.push({
                           i: e.push(o(e) + "skewX(", null, r) - 2,
                           x: (0, i.Z)(t, n)
                        }) : n && e.push(o(e) + "skewX(" + n + r)
                     }(s.skewX, a.skewX, u, c),
                     function (t, n, e, r, s, a) {
                        if (t !== e || n !== r) {
                           var u = s.push(o(s) + "scale(", null, ",", null, ")");
                           a.push({
                              i: u - 4,
                              x: (0, i.Z)(t, e)
                           }, {
                              i: u - 2,
                              x: (0, i.Z)(n, r)
                           })
                        } else 1 === e && 1 === r || s.push(o(s) + "scale(" + e + "," + r + ")")
                     }(s.scaleX, s.scaleY, a.scaleX, a.scaleY, u, c), s = a = null,
                     function (t) {
                        for (var n, e = -1, r = c.length; ++e < r;) u[(n = c[e]).i] = n.x(t);
                        return u.join("")
                     }
               }
            }
            var c = u((function (t) {
                  const n = new("function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(t + "");
                  return n.isIdentity ? s : a(n.a, n.b, n.c, n.d, n.e, n.f)
               }), "px, ", "px)", "deg)"),
               l = u((function (t) {
                  return null == t ? s : (r || (r = document.createElementNS("http://www.w3.org/2000/svg", "g")), r.setAttribute("transform", t), (t = r.transform.baseVal.consolidate()) ? a((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f) : s)
               }), ", ", ")", ")")
         },
         5326: (t, n, e) => {
            "use strict";
            e.d(n, {
               Z: () => f
            });
            var r = e(4447),
               i = e(6354),
               o = e(1606),
               s = e(6246),
               a = e(8063),
               u = e(8296),
               c = e(6773),
               l = e(2954),
               h = e(5401);

            function f(t, n) {
               var e, f = typeof n;
               return null == n || "boolean" === f ? (0, l.Z)(n) : ("number" === f ? a.Z : "string" === f ? (e = (0, r.ZP)(n)) ? (n = e, i.ZP) : c.Z : n instanceof r.ZP ? i.ZP : n instanceof Date ? s.Z : (0, h.v)(n) ? h.Z : Array.isArray(n) ? o.M : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? u.Z : a.Z)(t, n)
            }
         },
         8167: (t, n, e) => {
            "use strict";

            function r(t) {
               return ((t = Math.exp(t)) + 1 / t) / 2
            }
            e.d(n, {
               Z: () => i
            });
            const i = function t(n, e, i) {
               function o(t, o) {
                  var s, a, u = t[0],
                     c = t[1],
                     l = t[2],
                     h = o[0],
                     f = o[1],
                     p = o[2],
                     d = h - u,
                     y = f - c,
                     m = d * d + y * y;
                  if (m < 1e-12) a = Math.log(p / l) / n, s = function (t) {
                     return [u + t * d, c + t * y, l * Math.exp(n * t * a)]
                  };
                  else {
                     var _ = Math.sqrt(m),
                        v = (p * p - l * l + i * m) / (2 * l * e * _),
                        g = (p * p - l * l - i * m) / (2 * p * e * _),
                        x = Math.log(Math.sqrt(v * v + 1) - v),
                        w = Math.log(Math.sqrt(g * g + 1) - g);
                     a = (w - x) / n, s = function (t) {
                        var i, o = t * a,
                           s = r(x),
                           h = l / (e * _) * (s * (i = n * o + x, ((i = Math.exp(2 * i)) - 1) / (i + 1)) - function (t) {
                              return ((t = Math.exp(t)) - 1 / t) / 2
                           }(x));
                        return [u + h * d, c + h * y, l * s / r(n * o + x)]
                     }
                  }
                  return s.duration = 1e3 * a * n / Math.SQRT2, s
               }
               return o.rho = function (n) {
                  var e = Math.max(.001, +n),
                     r = e * e;
                  return t(e, r, r * r)
               }, o
            }(Math.SQRT2, 2, 4)
         },
         8066: (t, n, e) => {
            "use strict";

            function r(t, n) {
               switch (arguments.length) {
                  case 0:
                     break;
                  case 1:
                     this.range(t);
                     break;
                  default:
                     this.range(n).domain(t)
               }
               return this
            }

            function i(t, n) {
               switch (arguments.length) {
                  case 0:
                     break;
                  case 1:
                     "function" == typeof t ? this.interpolator(t) : this.range(t);
                     break;
                  default:
                     this.domain(t), "function" == typeof n ? this.interpolator(n) : this.range(n)
               }
               return this
            }
            e.r(n), e.d(n, {
               scaleBand: () => l,
               scaleDiverging: () => Ke,
               scaleDivergingLog: () => tr,
               scaleDivergingPow: () => er,
               scaleDivergingSqrt: () => rr,
               scaleDivergingSymlog: () => nr,
               scaleIdentity: () => V,
               scaleImplicit: () => u,
               scaleLinear: () => B,
               scaleLog: () => rt,
               scaleOrdinal: () => c,
               scalePoint: () => f,
               scalePow: () => ft,
               scaleQuantile: () => bt,
               scaleQuantize: () => Mt,
               scaleRadial: () => yt,
               scaleSequential: () => qe,
               scaleSequentialLog: () => Xe,
               scaleSequentialPow: () => Ve,
               scaleSequentialQuantile: () => Ge,
               scaleSequentialSqrt: () => We,
               scaleSequentialSymlog: () => Be,
               scaleSqrt: () => pt,
               scaleSymlog: () => at,
               scaleThreshold: () => Tt,
               scaleTime: () => Ye,
               scaleUtc: () => ze,
               tickFormat: () => q
            });
            class o extends Map {
               constructor(t, n = a) {
                  if (super(), Object.defineProperties(this, {
                        _intern: {
                           value: new Map
                        },
                        _key: {
                           value: n
                        }
                     }), null != t)
                     for (const [n, e] of t) this.set(n, e)
               }
               get(t) {
                  return super.get(s(this, t))
               }
               has(t) {
                  return super.has(s(this, t))
               }
               set(t, n) {
                  return super.set(function ({
                     _intern: t,
                     _key: n
                  }, e) {
                     const r = n(e);
                     return t.has(r) ? t.get(r) : (t.set(r, e), e)
                  }(this, t), n)
               }
               delete(t) {
                  return super.delete(function ({
                     _intern: t,
                     _key: n
                  }, e) {
                     const r = n(e);
                     return t.has(r) && (e = t.get(r), t.delete(r)), e
                  }(this, t))
               }
            }

            function s({
               _intern: t,
               _key: n
            }, e) {
               const r = n(e);
               return t.has(r) ? t.get(r) : e
            }

            function a(t) {
               return null !== t && "object" == typeof t ? t.valueOf() : t
            }
            const u = Symbol("implicit");

            function c() {
               var t = new o,
                  n = [],
                  e = [],
                  i = u;

               function s(r) {
                  let o = t.get(r);
                  if (void 0 === o) {
                     if (i !== u) return i;
                     t.set(r, o = n.push(r) - 1)
                  }
                  return e[o % e.length]
               }
               return s.domain = function (e) {
                  if (!arguments.length) return n.slice();
                  n = [], t = new o;
                  for (const r of e) t.has(r) || t.set(r, n.push(r) - 1);
                  return s
               }, s.range = function (t) {
                  return arguments.length ? (e = Array.from(t), s) : e.slice()
               }, s.unknown = function (t) {
                  return arguments.length ? (i = t, s) : i
               }, s.copy = function () {
                  return c(n, e).unknown(i)
               }, r.apply(s, arguments), s
            }

            function l() {
               var t, n, e = c().unknown(void 0),
                  i = e.domain,
                  o = e.range,
                  s = 0,
                  a = 1,
                  u = !1,
                  h = 0,
                  f = 0,
                  p = .5;

               function d() {
                  var e = i().length,
                     r = a < s,
                     c = r ? a : s,
                     l = r ? s : a;
                  t = (l - c) / Math.max(1, e - h + 2 * f), u && (t = Math.floor(t)), c += (l - c - t * (e - h)) * p, n = t * (1 - h), u && (c = Math.round(c), n = Math.round(n));
                  var d = function (t, n, e) {
                     t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
                     for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i;) o[r] = t + r * e;
                     return o
                  }(e).map((function (n) {
                     return c + t * n
                  }));
                  return o(r ? d.reverse() : d)
               }
               return delete e.unknown, e.domain = function (t) {
                  return arguments.length ? (i(t), d()) : i()
               }, e.range = function (t) {
                  return arguments.length ? ([s, a] = t, s = +s, a = +a, d()) : [s, a]
               }, e.rangeRound = function (t) {
                  return [s, a] = t, s = +s, a = +a, u = !0, d()
               }, e.bandwidth = function () {
                  return n
               }, e.step = function () {
                  return t
               }, e.round = function (t) {
                  return arguments.length ? (u = !!t, d()) : u
               }, e.padding = function (t) {
                  return arguments.length ? (h = Math.min(1, f = +t), d()) : h
               }, e.paddingInner = function (t) {
                  return arguments.length ? (h = Math.min(1, t), d()) : h
               }, e.paddingOuter = function (t) {
                  return arguments.length ? (f = +t, d()) : f
               }, e.align = function (t) {
                  return arguments.length ? (p = Math.max(0, Math.min(1, t)), d()) : p
               }, e.copy = function () {
                  return l(i(), [s, a]).round(u).paddingInner(h).paddingOuter(f).align(p)
               }, r.apply(d(), arguments)
            }

            function h(t) {
               var n = t.copy;
               return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function () {
                  return h(n())
               }, t
            }

            function f() {
               return h(l.apply(null, arguments).paddingInner(1))
            }
            const p = Math.sqrt(50),
               d = Math.sqrt(10),
               y = Math.sqrt(2);

            function m(t, n, e) {
               const r = (n - t) / Math.max(0, e),
                  i = Math.floor(Math.log10(r)),
                  o = r / Math.pow(10, i),
                  s = o >= p ? 10 : o >= d ? 5 : o >= y ? 2 : 1;
               let a, u, c;
               return i < 0 ? (c = Math.pow(10, -i) / s, a = Math.round(t * c), u = Math.round(n * c), a / c < t && ++a, u / c > n && --u, c = -c) : (c = Math.pow(10, i) * s, a = Math.round(t / c), u = Math.round(n / c), a * c < t && ++a, u * c > n && --u), u < a && .5 <= e && e < 2 ? m(t, n, 2 * e) : [a, u, c]
            }

            function _(t, n, e) {
               if (!((e = +e) > 0)) return [];
               if ((t = +t) == (n = +n)) return [t];
               const r = n < t,
                  [i, o, s] = r ? m(n, t, e) : m(t, n, e);
               if (!(o >= i)) return [];
               const a = o - i + 1,
                  u = new Array(a);
               if (r)
                  if (s < 0)
                     for (let t = 0; t < a; ++t) u[t] = (o - t) / -s;
                  else
                     for (let t = 0; t < a; ++t) u[t] = (o - t) * s;
               else if (s < 0)
                  for (let t = 0; t < a; ++t) u[t] = (i + t) / -s;
               else
                  for (let t = 0; t < a; ++t) u[t] = (i + t) * s;
               return u
            }

            function v(t, n, e) {
               return m(t = +t, n = +n, e = +e)[2]
            }

            function g(t, n, e) {
               e = +e;
               const r = (n = +n) < (t = +t),
                  i = r ? v(n, t, e) : v(t, n, e);
               return (r ? -1 : 1) * (i < 0 ? 1 / -i : i)
            }

            function x(t, n) {
               return null == t || null == n ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
            }

            function w(t, n) {
               return null == t || null == n ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
            }

            function b(t) {
               let n, e, r;

               function i(t, r, i = 0, o = t.length) {
                  if (i < o) {
                     if (0 !== n(r, r)) return o;
                     do {
                        const n = i + o >>> 1;
                        e(t[n], r) < 0 ? i = n + 1 : o = n
                     } while (i < o)
                  }
                  return i
               }
               return 2 !== t.length ? (n = x, e = (n, e) => x(t(n), e), r = (n, e) => t(n) - e) : (n = t === x || t === w ? t : M, e = t, r = t), {
                  left: i,
                  center: function (t, n, e = 0, o = t.length) {
                     const s = i(t, n, e, o - 1);
                     return s > e && r(t[s - 1], n) > -r(t[s], n) ? s - 1 : s
                  },
                  right: function (t, r, i = 0, o = t.length) {
                     if (i < o) {
                        if (0 !== n(r, r)) return o;
                        do {
                           const n = i + o >>> 1;
                           e(t[n], r) <= 0 ? i = n + 1 : o = n
                        } while (i < o)
                     }
                     return i
                  }
               }
            }

            function M() {
               return 0
            }

            function T(t) {
               return null === t ? NaN : +t
            }
            const E = b(x),
               k = E.right,
               N = (E.left, b(T).center, k);
            var A = e(5326),
               S = e(8063),
               P = e(4635);

            function O(t) {
               return +t
            }
            var L = [0, 1];

            function I(t) {
               return t
            }

            function Z(t, n) {
               return (n -= t = +t) ? function (e) {
                  return (e - t) / n
               } : (e = isNaN(n) ? NaN : .5, function () {
                  return e
               });
               var e
            }

            function C(t, n, e) {
               var r = t[0],
                  i = t[1],
                  o = n[0],
                  s = n[1];
               return i < r ? (r = Z(i, r), o = e(s, o)) : (r = Z(r, i), o = e(o, s)),
                  function (t) {
                     return o(r(t))
                  }
            }

            function D(t, n, e) {
               var r = Math.min(t.length, n.length) - 1,
                  i = new Array(r),
                  o = new Array(r),
                  s = -1;
               for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++s < r;) i[s] = Z(t[s], t[s + 1]), o[s] = e(n[s], n[s + 1]);
               return function (n) {
                  var e = N(t, n, 1, r) - 1;
                  return o[e](i[e](n))
               }
            }

            function H(t, n) {
               return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())
            }

            function $() {
               var t, n, e, r, i, o, s = L,
                  a = L,
                  u = A.Z,
                  c = I;

               function l() {
                  var t, n, e, u = Math.min(s.length, a.length);
                  return c !== I && (t = s[0], n = s[u - 1], t > n && (e = t, t = n, n = e), c = function (e) {
                     return Math.max(t, Math.min(n, e))
                  }), r = u > 2 ? D : C, i = o = null, h
               }

               function h(n) {
                  return null == n || isNaN(n = +n) ? e : (i || (i = r(s.map(t), a, u)))(t(c(n)))
               }
               return h.invert = function (e) {
                     return c(n((o || (o = r(a, s.map(t), S.Z)))(e)))
                  }, h.domain = function (t) {
                     return arguments.length ? (s = Array.from(t, O), l()) : s.slice()
                  }, h.range = function (t) {
                     return arguments.length ? (a = Array.from(t), l()) : a.slice()
                  }, h.rangeRound = function (t) {
                     return a = Array.from(t), u = P.Z, l()
                  }, h.clamp = function (t) {
                     return arguments.length ? (c = !!t || I, l()) : c !== I
                  }, h.interpolate = function (t) {
                     return arguments.length ? (u = t, l()) : u
                  }, h.unknown = function (t) {
                     return arguments.length ? (e = t, h) : e
                  },
                  function (e, r) {
                     return t = e, n = r, l()
                  }
            }

            function j() {
               return $()(I, I)
            }
            var F = e(2035),
               Y = e(7017),
               z = e(5386),
               R = e(3482),
               U = e(6909);

            function q(t, n, e, r) {
               var i, o = g(t, n, e);
               switch ((r = (0, F.Z)(null == r ? ",f" : r)).type) {
                  case "s":
                     var s = Math.max(Math.abs(t), Math.abs(n));
                     return null != r.precision || isNaN(i = (0, Y.Z)(o, s)) || (r.precision = i), (0, z.jH)(r, s);
                  case "":
                  case "e":
                  case "g":
                  case "p":
                  case "r":
                     null != r.precision || isNaN(i = (0, R.Z)(o, Math.max(Math.abs(t), Math.abs(n)))) || (r.precision = i - ("e" === r.type));
                     break;
                  case "f":
                  case "%":
                     null != r.precision || isNaN(i = (0, U.Z)(o)) || (r.precision = i - 2 * ("%" === r.type))
               }
               return (0, z.WU)(r)
            }

            function X(t) {
               var n = t.domain;
               return t.ticks = function (t) {
                  var e = n();
                  return _(e[0], e[e.length - 1], null == t ? 10 : t)
               }, t.tickFormat = function (t, e) {
                  var r = n();
                  return q(r[0], r[r.length - 1], null == t ? 10 : t, e)
               }, t.nice = function (e) {
                  null == e && (e = 10);
                  var r, i, o = n(),
                     s = 0,
                     a = o.length - 1,
                     u = o[s],
                     c = o[a],
                     l = 10;
                  for (c < u && (i = u, u = c, c = i, i = s, s = a, a = i); l-- > 0;) {
                     if ((i = v(u, c, e)) === r) return o[s] = u, o[a] = c, n(o);
                     if (i > 0) u = Math.floor(u / i) * i, c = Math.ceil(c / i) * i;
                     else {
                        if (!(i < 0)) break;
                        u = Math.ceil(u * i) / i, c = Math.floor(c * i) / i
                     }
                     r = i
                  }
                  return t
               }, t
            }

            function B() {
               var t = j();
               return t.copy = function () {
                  return H(t, B())
               }, r.apply(t, arguments), X(t)
            }

            function V(t) {
               var n;

               function e(t) {
                  return null == t || isNaN(t = +t) ? n : t
               }
               return e.invert = e, e.domain = e.range = function (n) {
                  return arguments.length ? (t = Array.from(n, O), e) : t.slice()
               }, e.unknown = function (t) {
                  return arguments.length ? (n = t, e) : n
               }, e.copy = function () {
                  return V(t).unknown(n)
               }, t = arguments.length ? Array.from(t, O) : [0, 1], X(e)
            }

            function W(t, n) {
               var e, r = 0,
                  i = (t = t.slice()).length - 1,
                  o = t[r],
                  s = t[i];
               return s < o && (e = r, r = i, i = e, e = o, o = s, s = e), t[r] = n.floor(o), t[i] = n.ceil(s), t
            }

            function G(t) {
               return Math.log(t)
            }

            function J(t) {
               return Math.exp(t)
            }

            function Q(t) {
               return -Math.log(-t)
            }

            function K(t) {
               return -Math.exp(-t)
            }

            function tt(t) {
               return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
            }

            function nt(t) {
               return (n, e) => -t(-n, e)
            }

            function et(t) {
               const n = t(G, J),
                  e = n.domain;
               let r, i, o = 10;

               function s() {
                  return r = function (t) {
                     return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), n => Math.log(n) / t)
                  }(o), i = function (t) {
                     return 10 === t ? tt : t === Math.E ? Math.exp : n => Math.pow(t, n)
                  }(o), e()[0] < 0 ? (r = nt(r), i = nt(i), t(Q, K)) : t(G, J), n
               }
               return n.base = function (t) {
                  return arguments.length ? (o = +t, s()) : o
               }, n.domain = function (t) {
                  return arguments.length ? (e(t), s()) : e()
               }, n.ticks = t => {
                  const n = e();
                  let s = n[0],
                     a = n[n.length - 1];
                  const u = a < s;
                  u && ([s, a] = [a, s]);
                  let c, l, h = r(s),
                     f = r(a);
                  const p = null == t ? 10 : +t;
                  let d = [];
                  if (!(o % 1) && f - h < p) {
                     if (h = Math.floor(h), f = Math.ceil(f), s > 0) {
                        for (; h <= f; ++h)
                           for (c = 1; c < o; ++c)
                              if (l = h < 0 ? c / i(-h) : c * i(h), !(l < s)) {
                                 if (l > a) break;
                                 d.push(l)
                              }
                     } else
                        for (; h <= f; ++h)
                           for (c = o - 1; c >= 1; --c)
                              if (l = h > 0 ? c / i(-h) : c * i(h), !(l < s)) {
                                 if (l > a) break;
                                 d.push(l)
                              } 2 * d.length < p && (d = _(s, a, p))
                  } else d = _(h, f, Math.min(f - h, p)).map(i);
                  return u ? d.reverse() : d
               }, n.tickFormat = (t, e) => {
                  if (null == t && (t = 10), null == e && (e = 10 === o ? "s" : ","), "function" != typeof e && (o % 1 || null != (e = (0, F.Z)(e)).precision || (e.trim = !0), e = (0, z.WU)(e)), t === 1 / 0) return e;
                  const s = Math.max(1, o * t / n.ticks().length);
                  return t => {
                     let n = t / i(Math.round(r(t)));
                     return n * o < o - .5 && (n *= o), n <= s ? e(t) : ""
                  }
               }, n.nice = () => e(W(e(), {
                  floor: t => i(Math.floor(r(t))),
                  ceil: t => i(Math.ceil(r(t)))
               })), n
            }

            function rt() {
               const t = et($()).domain([1, 10]);
               return t.copy = () => H(t, rt()).base(t.base()), r.apply(t, arguments), t
            }

            function it(t) {
               return function (n) {
                  return Math.sign(n) * Math.log1p(Math.abs(n / t))
               }
            }

            function ot(t) {
               return function (n) {
                  return Math.sign(n) * Math.expm1(Math.abs(n)) * t
               }
            }

            function st(t) {
               var n = 1,
                  e = t(it(n), ot(n));
               return e.constant = function (e) {
                  return arguments.length ? t(it(n = +e), ot(n)) : n
               }, X(e)
            }

            function at() {
               var t = st($());
               return t.copy = function () {
                  return H(t, at()).constant(t.constant())
               }, r.apply(t, arguments)
            }

            function ut(t) {
               return function (n) {
                  return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t)
               }
            }

            function ct(t) {
               return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t)
            }

            function lt(t) {
               return t < 0 ? -t * t : t * t
            }

            function ht(t) {
               var n = t(I, I),
                  e = 1;
               return n.exponent = function (n) {
                  return arguments.length ? 1 == (e = +n) ? t(I, I) : .5 === e ? t(ct, lt) : t(ut(e), ut(1 / e)) : e
               }, X(n)
            }

            function ft() {
               var t = ht($());
               return t.copy = function () {
                  return H(t, ft()).exponent(t.exponent())
               }, r.apply(t, arguments), t
            }

            function pt() {
               return ft.apply(null, arguments).exponent(.5)
            }

            function dt(t) {
               return Math.sign(t) * t * t
            }

            function yt() {
               var t, n = j(),
                  e = [0, 1],
                  i = !1;

               function o(e) {
                  var r = function (t) {
                     return Math.sign(t) * Math.sqrt(Math.abs(t))
                  }(n(e));
                  return isNaN(r) ? t : i ? Math.round(r) : r
               }
               return o.invert = function (t) {
                  return n.invert(dt(t))
               }, o.domain = function (t) {
                  return arguments.length ? (n.domain(t), o) : n.domain()
               }, o.range = function (t) {
                  return arguments.length ? (n.range((e = Array.from(t, O)).map(dt)), o) : e.slice()
               }, o.rangeRound = function (t) {
                  return o.range(t).round(!0)
               }, o.round = function (t) {
                  return arguments.length ? (i = !!t, o) : i
               }, o.clamp = function (t) {
                  return arguments.length ? (n.clamp(t), o) : n.clamp()
               }, o.unknown = function (n) {
                  return arguments.length ? (t = n, o) : t
               }, o.copy = function () {
                  return yt(n.domain(), e).round(i).clamp(n.clamp()).unknown(t)
               }, r.apply(o, arguments), X(o)
            }

            function mt(t, n) {
               let e;
               if (void 0 === n)
                  for (const n of t) null != n && (e < n || void 0 === e && n >= n) && (e = n);
               else {
                  let r = -1;
                  for (let i of t) null != (i = n(i, ++r, t)) && (e < i || void 0 === e && i >= i) && (e = i)
               }
               return e
            }

            function _t(t, n) {
               let e;
               if (void 0 === n)
                  for (const n of t) null != n && (e > n || void 0 === e && n >= n) && (e = n);
               else {
                  let r = -1;
                  for (let i of t) null != (i = n(i, ++r, t)) && (e > i || void 0 === e && i >= i) && (e = i)
               }
               return e
            }

            function vt(t, n) {
               return (null == t || !(t >= t)) - (null == n || !(n >= n)) || (t < n ? -1 : t > n ? 1 : 0)
            }

            function gt(t, n, e = 0, r = 1 / 0, i) {
               if (n = Math.floor(n), e = Math.floor(Math.max(0, e)), r = Math.floor(Math.min(t.length - 1, r)), !(e <= n && n <= r)) return t;
               for (i = void 0 === i ? vt : function (t = x) {
                     if (t === x) return vt;
                     if ("function" != typeof t) throw new TypeError("compare is not a function");
                     return (n, e) => {
                        const r = t(n, e);
                        return r || 0 === r ? r : (0 === t(e, e)) - (0 === t(n, n))
                     }
                  }(i); r > e;) {
                  if (r - e > 600) {
                     const o = r - e + 1,
                        s = n - e + 1,
                        a = Math.log(o),
                        u = .5 * Math.exp(2 * a / 3),
                        c = .5 * Math.sqrt(a * u * (o - u) / o) * (s - o / 2 < 0 ? -1 : 1);
                     gt(t, n, Math.max(e, Math.floor(n - s * u / o + c)), Math.min(r, Math.floor(n + (o - s) * u / o + c)), i)
                  }
                  const o = t[n];
                  let s = e,
                     a = r;
                  for (xt(t, e, n), i(t[r], o) > 0 && xt(t, e, r); s < a;) {
                     for (xt(t, s, a), ++s, --a; i(t[s], o) < 0;) ++s;
                     for (; i(t[a], o) > 0;) --a
                  }
                  0 === i(t[e], o) ? xt(t, e, a) : (++a, xt(t, a, r)), a <= n && (e = a + 1), n <= a && (r = a - 1)
               }
               return t
            }

            function xt(t, n, e) {
               const r = t[n];
               t[n] = t[e], t[e] = r
            }

            function wt(t, n, e = T) {
               if ((r = t.length) && !isNaN(n = +n)) {
                  if (n <= 0 || r < 2) return +e(t[0], 0, t);
                  if (n >= 1) return +e(t[r - 1], r - 1, t);
                  var r, i = (r - 1) * n,
                     o = Math.floor(i),
                     s = +e(t[o], o, t);
                  return s + (+e(t[o + 1], o + 1, t) - s) * (i - o)
               }
            }

            function bt() {
               var t, n = [],
                  e = [],
                  i = [];

               function o() {
                  var t = 0,
                     r = Math.max(1, e.length);
                  for (i = new Array(r - 1); ++t < r;) i[t - 1] = wt(n, t / r);
                  return s
               }

               function s(n) {
                  return null == n || isNaN(n = +n) ? t : e[N(i, n)]
               }
               return s.invertExtent = function (t) {
                  var r = e.indexOf(t);
                  return r < 0 ? [NaN, NaN] : [r > 0 ? i[r - 1] : n[0], r < i.length ? i[r] : n[n.length - 1]]
               }, s.domain = function (t) {
                  if (!arguments.length) return n.slice();
                  n = [];
                  for (let e of t) null == e || isNaN(e = +e) || n.push(e);
                  return n.sort(x), o()
               }, s.range = function (t) {
                  return arguments.length ? (e = Array.from(t), o()) : e.slice()
               }, s.unknown = function (n) {
                  return arguments.length ? (t = n, s) : t
               }, s.quantiles = function () {
                  return i.slice()
               }, s.copy = function () {
                  return bt().domain(n).range(e).unknown(t)
               }, r.apply(s, arguments)
            }

            function Mt() {
               var t, n = 0,
                  e = 1,
                  i = 1,
                  o = [.5],
                  s = [0, 1];

               function a(n) {
                  return null != n && n <= n ? s[N(o, n, 0, i)] : t
               }

               function u() {
                  var t = -1;
                  for (o = new Array(i); ++t < i;) o[t] = ((t + 1) * e - (t - i) * n) / (i + 1);
                  return a
               }
               return a.domain = function (t) {
                  return arguments.length ? ([n, e] = t, n = +n, e = +e, u()) : [n, e]
               }, a.range = function (t) {
                  return arguments.length ? (i = (s = Array.from(t)).length - 1, u()) : s.slice()
               }, a.invertExtent = function (t) {
                  var r = s.indexOf(t);
                  return r < 0 ? [NaN, NaN] : r < 1 ? [n, o[0]] : r >= i ? [o[i - 1], e] : [o[r - 1], o[r]]
               }, a.unknown = function (n) {
                  return arguments.length ? (t = n, a) : a
               }, a.thresholds = function () {
                  return o.slice()
               }, a.copy = function () {
                  return Mt().domain([n, e]).range(s).unknown(t)
               }, r.apply(X(a), arguments)
            }

            function Tt() {
               var t, n = [.5],
                  e = [0, 1],
                  i = 1;

               function o(r) {
                  return null != r && r <= r ? e[N(n, r, 0, i)] : t
               }
               return o.domain = function (t) {
                  return arguments.length ? (n = Array.from(t), i = Math.min(n.length, e.length - 1), o) : n.slice()
               }, o.range = function (t) {
                  return arguments.length ? (e = Array.from(t), i = Math.min(n.length, e.length - 1), o) : e.slice()
               }, o.invertExtent = function (t) {
                  var r = e.indexOf(t);
                  return [n[r - 1], n[r]]
               }, o.unknown = function (n) {
                  return arguments.length ? (t = n, o) : t
               }, o.copy = function () {
                  return Tt().domain(n).range(e).unknown(t)
               }, r.apply(o, arguments)
            }
            const Et = 1e3,
               kt = 6e4,
               Nt = 36e5,
               At = 864e5,
               St = 6048e5,
               Pt = 31536e6,
               Ot = new Date,
               Lt = new Date;

            function It(t, n, e, r) {
               function i(n) {
                  return t(n = 0 === arguments.length ? new Date : new Date(+n)), n
               }
               return i.floor = n => (t(n = new Date(+n)), n), i.ceil = e => (t(e = new Date(e - 1)), n(e, 1), t(e), e), i.round = t => {
                  const n = i(t),
                     e = i.ceil(t);
                  return t - n < e - t ? n : e
               }, i.offset = (t, e) => (n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t), i.range = (e, r, o) => {
                  const s = [];
                  if (e = i.ceil(e), o = null == o ? 1 : Math.floor(o), !(e < r && o > 0)) return s;
                  let a;
                  do {
                     s.push(a = new Date(+e)), n(e, o), t(e)
                  } while (a < e && e < r);
                  return s
               }, i.filter = e => It((n => {
                  if (n >= n)
                     for (; t(n), !e(n);) n.setTime(n - 1)
               }), ((t, r) => {
                  if (t >= t)
                     if (r < 0)
                        for (; ++r <= 0;)
                           for (; n(t, -1), !e(t););
                     else
                        for (; --r >= 0;)
                           for (; n(t, 1), !e(t););
               })), e && (i.count = (n, r) => (Ot.setTime(+n), Lt.setTime(+r), t(Ot), t(Lt), Math.floor(e(Ot, Lt))), i.every = t => (t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? n => r(n) % t == 0 : n => i.count(0, n) % t == 0) : i : null)), i
            }
            const Zt = It((() => {}), ((t, n) => {
               t.setTime(+t + n)
            }), ((t, n) => n - t));
            Zt.every = t => (t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? It((n => {
               n.setTime(Math.floor(n / t) * t)
            }), ((n, e) => {
               n.setTime(+n + e * t)
            }), ((n, e) => (e - n) / t)) : Zt : null), Zt.range;
            const Ct = It((t => {
                  t.setTime(t - t.getMilliseconds())
               }), ((t, n) => {
                  t.setTime(+t + n * Et)
               }), ((t, n) => (n - t) / Et), (t => t.getUTCSeconds())),
               Dt = (Ct.range, It((t => {
                  t.setTime(t - t.getMilliseconds() - t.getSeconds() * Et)
               }), ((t, n) => {
                  t.setTime(+t + n * kt)
               }), ((t, n) => (n - t) / kt), (t => t.getMinutes()))),
               Ht = (Dt.range, It((t => {
                  t.setUTCSeconds(0, 0)
               }), ((t, n) => {
                  t.setTime(+t + n * kt)
               }), ((t, n) => (n - t) / kt), (t => t.getUTCMinutes()))),
               $t = (Ht.range, It((t => {
                  t.setTime(t - t.getMilliseconds() - t.getSeconds() * Et - t.getMinutes() * kt)
               }), ((t, n) => {
                  t.setTime(+t + n * Nt)
               }), ((t, n) => (n - t) / Nt), (t => t.getHours()))),
               jt = ($t.range, It((t => {
                  t.setUTCMinutes(0, 0, 0)
               }), ((t, n) => {
                  t.setTime(+t + n * Nt)
               }), ((t, n) => (n - t) / Nt), (t => t.getUTCHours()))),
               Ft = (jt.range, It((t => t.setHours(0, 0, 0, 0)), ((t, n) => t.setDate(t.getDate() + n)), ((t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * kt) / At), (t => t.getDate() - 1))),
               Yt = (Ft.range, It((t => {
                  t.setUTCHours(0, 0, 0, 0)
               }), ((t, n) => {
                  t.setUTCDate(t.getUTCDate() + n)
               }), ((t, n) => (n - t) / At), (t => t.getUTCDate() - 1))),
               zt = (Yt.range, It((t => {
                  t.setUTCHours(0, 0, 0, 0)
               }), ((t, n) => {
                  t.setUTCDate(t.getUTCDate() + n)
               }), ((t, n) => (n - t) / At), (t => Math.floor(t / At))));

            function Rt(t) {
               return It((n => {
                  n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0)
               }), ((t, n) => {
                  t.setDate(t.getDate() + 7 * n)
               }), ((t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * kt) / St))
            }
            zt.range;
            const Ut = Rt(0),
               qt = Rt(1),
               Xt = Rt(2),
               Bt = Rt(3),
               Vt = Rt(4),
               Wt = Rt(5),
               Gt = Rt(6);

            function Jt(t) {
               return It((n => {
                  n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0)
               }), ((t, n) => {
                  t.setUTCDate(t.getUTCDate() + 7 * n)
               }), ((t, n) => (n - t) / St))
            }
            Ut.range, qt.range, Xt.range, Bt.range, Vt.range, Wt.range, Gt.range;
            const Qt = Jt(0),
               Kt = Jt(1),
               tn = Jt(2),
               nn = Jt(3),
               en = Jt(4),
               rn = Jt(5),
               on = Jt(6),
               sn = (Qt.range, Kt.range, tn.range, nn.range, en.range, rn.range, on.range, It((t => {
                  t.setDate(1), t.setHours(0, 0, 0, 0)
               }), ((t, n) => {
                  t.setMonth(t.getMonth() + n)
               }), ((t, n) => n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())), (t => t.getMonth()))),
               an = (sn.range, It((t => {
                  t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
               }), ((t, n) => {
                  t.setUTCMonth(t.getUTCMonth() + n)
               }), ((t, n) => n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())), (t => t.getUTCMonth()))),
               un = (an.range, It((t => {
                  t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
               }), ((t, n) => {
                  t.setFullYear(t.getFullYear() + n)
               }), ((t, n) => n.getFullYear() - t.getFullYear()), (t => t.getFullYear())));
            un.every = t => isFinite(t = Math.floor(t)) && t > 0 ? It((n => {
               n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
            }), ((n, e) => {
               n.setFullYear(n.getFullYear() + e * t)
            })) : null, un.range;
            const cn = It((t => {
               t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
            }), ((t, n) => {
               t.setUTCFullYear(t.getUTCFullYear() + n)
            }), ((t, n) => n.getUTCFullYear() - t.getUTCFullYear()), (t => t.getUTCFullYear()));

            function ln(t, n, e, r, i, o) {
               const s = [
                  [Ct, 1, Et],
                  [Ct, 5, 5e3],
                  [Ct, 15, 15e3],
                  [Ct, 30, 3e4],
                  [o, 1, kt],
                  [o, 5, 3e5],
                  [o, 15, 9e5],
                  [o, 30, 18e5],
                  [i, 1, Nt],
                  [i, 3, 108e5],
                  [i, 6, 216e5],
                  [i, 12, 432e5],
                  [r, 1, At],
                  [r, 2, 1728e5],
                  [e, 1, St],
                  [n, 1, 2592e6],
                  [n, 3, 7776e6],
                  [t, 1, Pt]
               ];

               function a(n, e, r) {
                  const i = Math.abs(e - n) / r,
                     o = b((([, , t]) => t)).right(s, i);
                  if (o === s.length) return t.every(g(n / Pt, e / Pt, r));
                  if (0 === o) return Zt.every(Math.max(g(n, e, r), 1));
                  const [a, u] = s[i / s[o - 1][2] < s[o][2] / i ? o - 1 : o];
                  return a.every(u)
               }
               return [function (t, n, e) {
                  const r = n < t;
                  r && ([t, n] = [n, t]);
                  const i = e && "function" == typeof e.range ? e : a(t, n, e),
                     o = i ? i.range(t, +n + 1) : [];
                  return r ? o.reverse() : o
               }, a]
            }
            cn.every = t => isFinite(t = Math.floor(t)) && t > 0 ? It((n => {
               n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
            }), ((n, e) => {
               n.setUTCFullYear(n.getUTCFullYear() + e * t)
            })) : null, cn.range;
            const [hn, fn] = ln(cn, an, Qt, zt, jt, Ht), [pn, dn] = ln(un, sn, Ut, Ft, $t, Dt);

            function yn(t) {
               if (0 <= t.y && t.y < 100) {
                  var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
                  return n.setFullYear(t.y), n
               }
               return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
            }

            function mn(t) {
               if (0 <= t.y && t.y < 100) {
                  var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
                  return n.setUTCFullYear(t.y), n
               }
               return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
            }

            function _n(t, n, e) {
               return {
                  y: t,
                  m: n,
                  d: e,
                  H: 0,
                  M: 0,
                  S: 0,
                  L: 0
               }
            }
            var vn, gn, xn, wn = {
                  "-": "",
                  _: " ",
                  0: "0"
               },
               bn = /^\s*\d+/,
               Mn = /^%/,
               Tn = /[\\^$*+?|[\]().{}]/g;

            function En(t, n, e) {
               var r = t < 0 ? "-" : "",
                  i = (r ? -t : t) + "",
                  o = i.length;
               return r + (o < e ? new Array(e - o + 1).join(n) + i : i)
            }

            function kn(t) {
               return t.replace(Tn, "\\$&")
            }

            function Nn(t) {
               return new RegExp("^(?:" + t.map(kn).join("|") + ")", "i")
            }

            function An(t) {
               return new Map(t.map(((t, n) => [t.toLowerCase(), n])))
            }

            function Sn(t, n, e) {
               var r = bn.exec(n.slice(e, e + 1));
               return r ? (t.w = +r[0], e + r[0].length) : -1
            }

            function Pn(t, n, e) {
               var r = bn.exec(n.slice(e, e + 1));
               return r ? (t.u = +r[0], e + r[0].length) : -1
            }

            function On(t, n, e) {
               var r = bn.exec(n.slice(e, e + 2));
               return r ? (t.U = +r[0], e + r[0].length) : -1
            }

            function Ln(t, n, e) {
               var r = bn.exec(n.slice(e, e + 2));
               return r ? (t.V = +r[0], e + r[0].length) : -1
            }

            function In(t, n, e) {
               var r = bn.exec(n.slice(e, e + 2));
               return r ? (t.W = +r[0], e + r[0].length) : -1
            }

            function Zn(t, n, e) {
               var r = bn.exec(n.slice(e, e + 4));
               return r ? (t.y = +r[0], e + r[0].length) : -1
            }

            function Cn(t, n, e) {
               var r = bn.exec(n.slice(e, e + 2));
               return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
            }

            function Dn(t, n, e) {
               var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
               return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
            }

            function Hn(t, n, e) {
               var r = bn.exec(n.slice(e, e + 1));
               return r ? (t.q = 3 * r[0] - 3, e + r[0].length) : -1
            }

            function $n(t, n, e) {
               var r = bn.exec(n.slice(e, e + 2));
               return r ? (t.m = r[0] - 1, e + r[0].length) : -1
            }

            function jn(t, n, e) {
               var r = bn.exec(n.slice(e, e + 2));
               return r ? (t.d = +r[0], e + r[0].length) : -1
            }

            function Fn(t, n, e) {
               var r = bn.exec(n.slice(e, e + 3));
               return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
            }

            function Yn(t, n, e) {
               var r = bn.exec(n.slice(e, e + 2));
               return r ? (t.H = +r[0], e + r[0].length) : -1
            }

            function zn(t, n, e) {
               var r = bn.exec(n.slice(e, e + 2));
               return r ? (t.M = +r[0], e + r[0].length) : -1
            }

            function Rn(t, n, e) {
               var r = bn.exec(n.slice(e, e + 2));
               return r ? (t.S = +r[0], e + r[0].length) : -1
            }

            function Un(t, n, e) {
               var r = bn.exec(n.slice(e, e + 3));
               return r ? (t.L = +r[0], e + r[0].length) : -1
            }

            function qn(t, n, e) {
               var r = bn.exec(n.slice(e, e + 6));
               return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1
            }

            function Xn(t, n, e) {
               var r = Mn.exec(n.slice(e, e + 1));
               return r ? e + r[0].length : -1
            }

            function Bn(t, n, e) {
               var r = bn.exec(n.slice(e));
               return r ? (t.Q = +r[0], e + r[0].length) : -1
            }

            function Vn(t, n, e) {
               var r = bn.exec(n.slice(e));
               return r ? (t.s = +r[0], e + r[0].length) : -1
            }

            function Wn(t, n) {
               return En(t.getDate(), n, 2)
            }

            function Gn(t, n) {
               return En(t.getHours(), n, 2)
            }

            function Jn(t, n) {
               return En(t.getHours() % 12 || 12, n, 2)
            }

            function Qn(t, n) {
               return En(1 + Ft.count(un(t), t), n, 3)
            }

            function Kn(t, n) {
               return En(t.getMilliseconds(), n, 3)
            }

            function te(t, n) {
               return Kn(t, n) + "000"
            }

            function ne(t, n) {
               return En(t.getMonth() + 1, n, 2)
            }

            function ee(t, n) {
               return En(t.getMinutes(), n, 2)
            }

            function re(t, n) {
               return En(t.getSeconds(), n, 2)
            }

            function ie(t) {
               var n = t.getDay();
               return 0 === n ? 7 : n
            }

            function oe(t, n) {
               return En(Ut.count(un(t) - 1, t), n, 2)
            }

            function se(t) {
               var n = t.getDay();
               return n >= 4 || 0 === n ? Vt(t) : Vt.ceil(t)
            }

            function ae(t, n) {
               return t = se(t), En(Vt.count(un(t), t) + (4 === un(t).getDay()), n, 2)
            }

            function ue(t) {
               return t.getDay()
            }

            function ce(t, n) {
               return En(qt.count(un(t) - 1, t), n, 2)
            }

            function le(t, n) {
               return En(t.getFullYear() % 100, n, 2)
            }

            function he(t, n) {
               return En((t = se(t)).getFullYear() % 100, n, 2)
            }

            function fe(t, n) {
               return En(t.getFullYear() % 1e4, n, 4)
            }

            function pe(t, n) {
               var e = t.getDay();
               return En((t = e >= 4 || 0 === e ? Vt(t) : Vt.ceil(t)).getFullYear() % 1e4, n, 4)
            }

            function de(t) {
               var n = t.getTimezoneOffset();
               return (n > 0 ? "-" : (n *= -1, "+")) + En(n / 60 | 0, "0", 2) + En(n % 60, "0", 2)
            }

            function ye(t, n) {
               return En(t.getUTCDate(), n, 2)
            }

            function me(t, n) {
               return En(t.getUTCHours(), n, 2)
            }

            function _e(t, n) {
               return En(t.getUTCHours() % 12 || 12, n, 2)
            }

            function ve(t, n) {
               return En(1 + Yt.count(cn(t), t), n, 3)
            }

            function ge(t, n) {
               return En(t.getUTCMilliseconds(), n, 3)
            }

            function xe(t, n) {
               return ge(t, n) + "000"
            }

            function we(t, n) {
               return En(t.getUTCMonth() + 1, n, 2)
            }

            function be(t, n) {
               return En(t.getUTCMinutes(), n, 2)
            }

            function Me(t, n) {
               return En(t.getUTCSeconds(), n, 2)
            }

            function Te(t) {
               var n = t.getUTCDay();
               return 0 === n ? 7 : n
            }

            function Ee(t, n) {
               return En(Qt.count(cn(t) - 1, t), n, 2)
            }

            function ke(t) {
               var n = t.getUTCDay();
               return n >= 4 || 0 === n ? en(t) : en.ceil(t)
            }

            function Ne(t, n) {
               return t = ke(t), En(en.count(cn(t), t) + (4 === cn(t).getUTCDay()), n, 2)
            }

            function Ae(t) {
               return t.getUTCDay()
            }

            function Se(t, n) {
               return En(Kt.count(cn(t) - 1, t), n, 2)
            }

            function Pe(t, n) {
               return En(t.getUTCFullYear() % 100, n, 2)
            }

            function Oe(t, n) {
               return En((t = ke(t)).getUTCFullYear() % 100, n, 2)
            }

            function Le(t, n) {
               return En(t.getUTCFullYear() % 1e4, n, 4)
            }

            function Ie(t, n) {
               var e = t.getUTCDay();
               return En((t = e >= 4 || 0 === e ? en(t) : en.ceil(t)).getUTCFullYear() % 1e4, n, 4)
            }

            function Ze() {
               return "+0000"
            }

            function Ce() {
               return "%"
            }

            function De(t) {
               return +t
            }

            function He(t) {
               return Math.floor(+t / 1e3)
            }

            function $e(t) {
               return new Date(t)
            }

            function je(t) {
               return t instanceof Date ? +t : +new Date(+t)
            }

            function Fe(t, n, e, r, i, o, s, a, u, c) {
               var l = j(),
                  h = l.invert,
                  f = l.domain,
                  p = c(".%L"),
                  d = c(":%S"),
                  y = c("%I:%M"),
                  m = c("%I %p"),
                  _ = c("%a %d"),
                  v = c("%b %d"),
                  g = c("%B"),
                  x = c("%Y");

               function w(t) {
                  return (u(t) < t ? p : a(t) < t ? d : s(t) < t ? y : o(t) < t ? m : r(t) < t ? i(t) < t ? _ : v : e(t) < t ? g : x)(t)
               }
               return l.invert = function (t) {
                  return new Date(h(t))
               }, l.domain = function (t) {
                  return arguments.length ? f(Array.from(t, je)) : f().map($e)
               }, l.ticks = function (n) {
                  var e = f();
                  return t(e[0], e[e.length - 1], null == n ? 10 : n)
               }, l.tickFormat = function (t, n) {
                  return null == n ? w : c(n)
               }, l.nice = function (t) {
                  var e = f();
                  return t && "function" == typeof t.range || (t = n(e[0], e[e.length - 1], null == t ? 10 : t)), t ? f(W(e, t)) : l
               }, l.copy = function () {
                  return H(l, Fe(t, n, e, r, i, o, s, a, u, c))
               }, l
            }

            function Ye() {
               return r.apply(Fe(pn, dn, un, sn, Ut, Ft, $t, Dt, Ct, gn).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
            }

            function ze() {
               return r.apply(Fe(hn, fn, cn, an, Qt, Yt, jt, Ht, Ct, xn).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
            }

            function Re() {
               var t, n, e, r, i, o = 0,
                  s = 1,
                  a = I,
                  u = !1;

               function c(n) {
                  return null == n || isNaN(n = +n) ? i : a(0 === e ? .5 : (n = (r(n) - t) * e, u ? Math.max(0, Math.min(1, n)) : n))
               }

               function l(t) {
                  return function (n) {
                     var e, r;
                     return arguments.length ? ([e, r] = n, a = t(e, r), c) : [a(0), a(1)]
                  }
               }
               return c.domain = function (i) {
                     return arguments.length ? ([o, s] = i, t = r(o = +o), n = r(s = +s), e = t === n ? 0 : 1 / (n - t), c) : [o, s]
                  }, c.clamp = function (t) {
                     return arguments.length ? (u = !!t, c) : u
                  }, c.interpolator = function (t) {
                     return arguments.length ? (a = t, c) : a
                  }, c.range = l(A.Z), c.rangeRound = l(P.Z), c.unknown = function (t) {
                     return arguments.length ? (i = t, c) : i
                  },
                  function (i) {
                     return r = i, t = i(o), n = i(s), e = t === n ? 0 : 1 / (n - t), c
                  }
            }

            function Ue(t, n) {
               return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())
            }

            function qe() {
               var t = X(Re()(I));
               return t.copy = function () {
                  return Ue(t, qe())
               }, i.apply(t, arguments)
            }

            function Xe() {
               var t = et(Re()).domain([1, 10]);
               return t.copy = function () {
                  return Ue(t, Xe()).base(t.base())
               }, i.apply(t, arguments)
            }

            function Be() {
               var t = st(Re());
               return t.copy = function () {
                  return Ue(t, Be()).constant(t.constant())
               }, i.apply(t, arguments)
            }

            function Ve() {
               var t = ht(Re());
               return t.copy = function () {
                  return Ue(t, Ve()).exponent(t.exponent())
               }, i.apply(t, arguments)
            }

            function We() {
               return Ve.apply(null, arguments).exponent(.5)
            }

            function Ge() {
               var t = [],
                  n = I;

               function e(e) {
                  if (null != e && !isNaN(e = +e)) return n((N(t, e, 1) - 1) / (t.length - 1))
               }
               return e.domain = function (n) {
                  if (!arguments.length) return t.slice();
                  t = [];
                  for (let e of n) null == e || isNaN(e = +e) || t.push(e);
                  return t.sort(x), e
               }, e.interpolator = function (t) {
                  return arguments.length ? (n = t, e) : n
               }, e.range = function () {
                  return t.map(((e, r) => n(r / (t.length - 1))))
               }, e.quantiles = function (n) {
                  return Array.from({
                     length: n + 1
                  }, ((e, r) => function (t, n, e) {
                     if (t = Float64Array.from(function* (t, n) {
                           if (void 0 === n)
                              for (let n of t) null != n && (n = +n) >= n && (yield n);
                           else {
                              let e = -1;
                              for (let r of t) null != (r = n(r, ++e, t)) && (r = +r) >= r && (yield r)
                           }
                        }(t, e)), (r = t.length) && !isNaN(n = +n)) {
                        if (n <= 0 || r < 2) return _t(t);
                        if (n >= 1) return mt(t);
                        var r, i = (r - 1) * n,
                           o = Math.floor(i),
                           s = mt(gt(t, o).subarray(0, o + 1));
                        return s + (_t(t.subarray(o + 1)) - s) * (i - o)
                     }
                  }(t, r / n)))
               }, e.copy = function () {
                  return Ge(n).domain(t)
               }, i.apply(e, arguments)
            }
            vn = function (t) {
               var n = t.dateTime,
                  e = t.date,
                  r = t.time,
                  i = t.periods,
                  o = t.days,
                  s = t.shortDays,
                  a = t.months,
                  u = t.shortMonths,
                  c = Nn(i),
                  l = An(i),
                  h = Nn(o),
                  f = An(o),
                  p = Nn(s),
                  d = An(s),
                  y = Nn(a),
                  m = An(a),
                  _ = Nn(u),
                  v = An(u),
                  g = {
                     a: function (t) {
                        return s[t.getDay()]
                     },
                     A: function (t) {
                        return o[t.getDay()]
                     },
                     b: function (t) {
                        return u[t.getMonth()]
                     },
                     B: function (t) {
                        return a[t.getMonth()]
                     },
                     c: null,
                     d: Wn,
                     e: Wn,
                     f: te,
                     g: he,
                     G: pe,
                     H: Gn,
                     I: Jn,
                     j: Qn,
                     L: Kn,
                     m: ne,
                     M: ee,
                     p: function (t) {
                        return i[+(t.getHours() >= 12)]
                     },
                     q: function (t) {
                        return 1 + ~~(t.getMonth() / 3)
                     },
                     Q: De,
                     s: He,
                     S: re,
                     u: ie,
                     U: oe,
                     V: ae,
                     w: ue,
                     W: ce,
                     x: null,
                     X: null,
                     y: le,
                     Y: fe,
                     Z: de,
                     "%": Ce
                  },
                  x = {
                     a: function (t) {
                        return s[t.getUTCDay()]
                     },
                     A: function (t) {
                        return o[t.getUTCDay()]
                     },
                     b: function (t) {
                        return u[t.getUTCMonth()]
                     },
                     B: function (t) {
                        return a[t.getUTCMonth()]
                     },
                     c: null,
                     d: ye,
                     e: ye,
                     f: xe,
                     g: Oe,
                     G: Ie,
                     H: me,
                     I: _e,
                     j: ve,
                     L: ge,
                     m: we,
                     M: be,
                     p: function (t) {
                        return i[+(t.getUTCHours() >= 12)]
                     },
                     q: function (t) {
                        return 1 + ~~(t.getUTCMonth() / 3)
                     },
                     Q: De,
                     s: He,
                     S: Me,
                     u: Te,
                     U: Ee,
                     V: Ne,
                     w: Ae,
                     W: Se,
                     x: null,
                     X: null,
                     y: Pe,
                     Y: Le,
                     Z: Ze,
                     "%": Ce
                  },
                  w = {
                     a: function (t, n, e) {
                        var r = p.exec(n.slice(e));
                        return r ? (t.w = d.get(r[0].toLowerCase()), e + r[0].length) : -1
                     },
                     A: function (t, n, e) {
                        var r = h.exec(n.slice(e));
                        return r ? (t.w = f.get(r[0].toLowerCase()), e + r[0].length) : -1
                     },
                     b: function (t, n, e) {
                        var r = _.exec(n.slice(e));
                        return r ? (t.m = v.get(r[0].toLowerCase()), e + r[0].length) : -1
                     },
                     B: function (t, n, e) {
                        var r = y.exec(n.slice(e));
                        return r ? (t.m = m.get(r[0].toLowerCase()), e + r[0].length) : -1
                     },
                     c: function (t, e, r) {
                        return T(t, n, e, r)
                     },
                     d: jn,
                     e: jn,
                     f: qn,
                     g: Cn,
                     G: Zn,
                     H: Yn,
                     I: Yn,
                     j: Fn,
                     L: Un,
                     m: $n,
                     M: zn,
                     p: function (t, n, e) {
                        var r = c.exec(n.slice(e));
                        return r ? (t.p = l.get(r[0].toLowerCase()), e + r[0].length) : -1
                     },
                     q: Hn,
                     Q: Bn,
                     s: Vn,
                     S: Rn,
                     u: Pn,
                     U: On,
                     V: Ln,
                     w: Sn,
                     W: In,
                     x: function (t, n, r) {
                        return T(t, e, n, r)
                     },
                     X: function (t, n, e) {
                        return T(t, r, n, e)
                     },
                     y: Cn,
                     Y: Zn,
                     Z: Dn,
                     "%": Xn
                  };

               function b(t, n) {
                  return function (e) {
                     var r, i, o, s = [],
                        a = -1,
                        u = 0,
                        c = t.length;
                     for (e instanceof Date || (e = new Date(+e)); ++a < c;) 37 === t.charCodeAt(a) && (s.push(t.slice(u, a)), null != (i = wn[r = t.charAt(++a)]) ? r = t.charAt(++a) : i = "e" === r ? " " : "0", (o = n[r]) && (r = o(e, i)), s.push(r), u = a + 1);
                     return s.push(t.slice(u, a)), s.join("")
                  }
               }

               function M(t, n) {
                  return function (e) {
                     var r, i, o = _n(1900, void 0, 1);
                     if (T(o, t, e += "", 0) != e.length) return null;
                     if ("Q" in o) return new Date(o.Q);
                     if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0));
                     if (n && !("Z" in o) && (o.Z = 0), "p" in o && (o.H = o.H % 12 + 12 * o.p), void 0 === o.m && (o.m = "q" in o ? o.q : 0), "V" in o) {
                        if (o.V < 1 || o.V > 53) return null;
                        "w" in o || (o.w = 1), "Z" in o ? (i = (r = mn(_n(o.y, 0, 1))).getUTCDay(), r = i > 4 || 0 === i ? Kt.ceil(r) : Kt(r), r = Yt.offset(r, 7 * (o.V - 1)), o.y = r.getUTCFullYear(), o.m = r.getUTCMonth(), o.d = r.getUTCDate() + (o.w + 6) % 7) : (i = (r = yn(_n(o.y, 0, 1))).getDay(), r = i > 4 || 0 === i ? qt.ceil(r) : qt(r), r = Ft.offset(r, 7 * (o.V - 1)), o.y = r.getFullYear(), o.m = r.getMonth(), o.d = r.getDate() + (o.w + 6) % 7)
                     } else("W" in o || "U" in o) && ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0), i = "Z" in o ? mn(_n(o.y, 0, 1)).getUTCDay() : yn(_n(o.y, 0, 1)).getDay(), o.m = 0, o.d = "W" in o ? (o.w + 6) % 7 + 7 * o.W - (i + 5) % 7 : o.w + 7 * o.U - (i + 6) % 7);
                     return "Z" in o ? (o.H += o.Z / 100 | 0, o.M += o.Z % 100, mn(o)) : yn(o)
                  }
               }

               function T(t, n, e, r) {
                  for (var i, o, s = 0, a = n.length, u = e.length; s < a;) {
                     if (r >= u) return -1;
                     if (37 === (i = n.charCodeAt(s++))) {
                        if (i = n.charAt(s++), !(o = w[i in wn ? n.charAt(s++) : i]) || (r = o(t, e, r)) < 0) return -1
                     } else if (i != e.charCodeAt(r++)) return -1
                  }
                  return r
               }
               return g.x = b(e, g), g.X = b(r, g), g.c = b(n, g), x.x = b(e, x), x.X = b(r, x), x.c = b(n, x), {
                  format: function (t) {
                     var n = b(t += "", g);
                     return n.toString = function () {
                        return t
                     }, n
                  },
                  parse: function (t) {
                     var n = M(t += "", !1);
                     return n.toString = function () {
                        return t
                     }, n
                  },
                  utcFormat: function (t) {
                     var n = b(t += "", x);
                     return n.toString = function () {
                        return t
                     }, n
                  },
                  utcParse: function (t) {
                     var n = M(t += "", !0);
                     return n.toString = function () {
                        return t
                     }, n
                  }
               }
            }({
               dateTime: "%x, %X",
               date: "%-m/%-d/%Y",
               time: "%-I:%M:%S %p",
               periods: ["AM", "PM"],
               days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
               shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
               months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
               shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            }), gn = vn.format, vn.parse, xn = vn.utcFormat, vn.utcParse;
            var Je = e(9640);

            function Qe() {
               var t, n, e, r, i, o, s, a = 0,
                  u = .5,
                  c = 1,
                  l = 1,
                  h = I,
                  f = !1;

               function p(t) {
                  return isNaN(t = +t) ? s : (t = .5 + ((t = +o(t)) - n) * (l * t < l * n ? r : i), h(f ? Math.max(0, Math.min(1, t)) : t))
               }

               function d(t) {
                  return function (n) {
                     var e, r, i;
                     return arguments.length ? ([e, r, i] = n, h = (0, Je.Z)(t, [e, r, i]), p) : [h(0), h(.5), h(1)]
                  }
               }
               return p.domain = function (s) {
                     return arguments.length ? ([a, u, c] = s, t = o(a = +a), n = o(u = +u), e = o(c = +c), r = t === n ? 0 : .5 / (n - t), i = n === e ? 0 : .5 / (e - n), l = n < t ? -1 : 1, p) : [a, u, c]
                  }, p.clamp = function (t) {
                     return arguments.length ? (f = !!t, p) : f
                  }, p.interpolator = function (t) {
                     return arguments.length ? (h = t, p) : h
                  }, p.range = d(A.Z), p.rangeRound = d(P.Z), p.unknown = function (t) {
                     return arguments.length ? (s = t, p) : s
                  },
                  function (s) {
                     return o = s, t = s(a), n = s(u), e = s(c), r = t === n ? 0 : .5 / (n - t), i = n === e ? 0 : .5 / (e - n), l = n < t ? -1 : 1, p
                  }
            }

            function Ke() {
               var t = X(Qe()(I));
               return t.copy = function () {
                  return Ue(t, Ke())
               }, i.apply(t, arguments)
            }

            function tr() {
               var t = et(Qe()).domain([.1, 1, 10]);
               return t.copy = function () {
                  return Ue(t, tr()).base(t.base())
               }, i.apply(t, arguments)
            }

            function nr() {
               var t = st(Qe());
               return t.copy = function () {
                  return Ue(t, nr()).constant(t.constant())
               }, i.apply(t, arguments)
            }

            function er() {
               var t = ht(Qe());
               return t.copy = function () {
                  return Ue(t, er()).exponent(t.exponent())
               }, i.apply(t, arguments)
            }

            function rr() {
               return er.apply(null, arguments).exponent(.5)
            }
         },
         9898: (t, n, e) => {
            "use strict";

            function r(t) {
               return null == t ? [] : Array.isArray(t) ? t : Array.from(t)
            }
            e.d(n, {
               Z: () => r
            })
         },
         4708: (t, n, e) => {
            "use strict";
            e.d(n, {
               Z: () => a
            });
            var r = e(1663),
               i = e(1226);

            function o(t) {
               return function () {
                  var n = this.ownerDocument,
                     e = this.namespaceURI;
                  return e === i.P && n.documentElement.namespaceURI === i.P ? n.createElement(t) : n.createElementNS(e, t)
               }
            }

            function s(t) {
               return function () {
                  return this.ownerDocument.createElementNS(t.space, t.local)
               }
            }

            function a(t) {
               var n = (0, r.Z)(t);
               return (n.local ? s : o)(n)
            }
         },
         3905: (t, n, e) => {
            "use strict";
            e.r(n), e.d(n, {
               create: () => o,
               creator: () => r.Z,
               local: () => a,
               matcher: () => c.Z,
               namespace: () => l.Z,
               namespaces: () => h.Z,
               pointer: () => f.Z,
               pointers: () => d,
               select: () => i.Z,
               selectAll: () => _,
               selection: () => m.ZP,
               selector: () => v.Z,
               selectorAll: () => g.Z,
               style: () => x.S,
               window: () => w.Z
            });
            var r = e(4708),
               i = e(3838);

            function o(t) {
               return (0, i.Z)((0, r.Z)(t).call(document.documentElement))
            }
            var s = 0;

            function a() {
               return new u
            }

            function u() {
               this._ = "@" + (++s).toString(36)
            }
            u.prototype = a.prototype = {
               constructor: u,
               get: function (t) {
                  for (var n = this._; !(n in t);)
                     if (!(t = t.parentNode)) return;
                  return t[n]
               },
               set: function (t, n) {
                  return t[this._] = n
               },
               remove: function (t) {
                  return this._ in t && delete t[this._]
               },
               toString: function () {
                  return this._
               }
            };
            var c = e(4421),
               l = e(1663),
               h = e(1226),
               f = e(3109),
               p = e(9439);

            function d(t, n) {
               return t.target && (t = (0, p.Z)(t), void 0 === n && (n = t.currentTarget), t = t.touches || [t]), Array.from(t, (t => (0, f.Z)(t, n)))
            }
            var y = e(9898),
               m = e(6740);

            function _(t) {
               return "string" == typeof t ? new m.Y1([document.querySelectorAll(t)], [document.documentElement]) : new m.Y1([(0, y.Z)(t)], m.Jz)
            }
            var v = e(3010),
               g = e(9701),
               x = e(2627),
               w = e(9920)
         },
         4421: (t, n, e) => {
            "use strict";

            function r(t) {
               return function () {
                  return this.matches(t)
               }
            }

            function i(t) {
               return function (n) {
                  return n.matches(t)
               }
            }
            e.d(n, {
               P: () => i,
               Z: () => r
            })
         },
         1663: (t, n, e) => {
            "use strict";
            e.d(n, {
               Z: () => i
            });
            var r = e(1226);

            function i(t) {
               var n = t += "",
                  e = n.indexOf(":");
               return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), r.Z.hasOwnProperty(n) ? {
                  space: r.Z[n],
                  local: t
               } : t
            }
         },
         1226: (t, n, e) => {
            "use strict";
            e.d(n, {
               P: () => r,
               Z: () => i
            });
            var r = "http://www.w3.org/1999/xhtml";
            const i = {
               svg: "http://www.w3.org/2000/svg",
               xhtml: r,
               xlink: "http://www.w3.org/1999/xlink",
               xml: "http://www.w3.org/XML/1998/namespace",
               xmlns: "http://www.w3.org/2000/xmlns/"
            }
         },
         3109: (t, n, e) => {
            "use strict";
            e.d(n, {
               Z: () => i
            });
            var r = e(9439);

            function i(t, n) {
               if (t = (0, r.Z)(t), void 0 === n && (n = t.currentTarget), n) {
                  var e = n.ownerSVGElement || n;
                  if (e.createSVGPoint) {
                     var i = e.createSVGPoint();
                     return i.x = t.clientX, i.y = t.clientY, [(i = i.matrixTransform(n.getScreenCTM().inverse())).x, i.y]
                  }
                  if (n.getBoundingClientRect) {
                     var o = n.getBoundingClientRect();
                     return [t.clientX - o.left - n.clientLeft, t.clientY - o.top - n.clientTop]
                  }
               }
               return [t.pageX, t.pageY]
            }
         },
         3838: (t, n, e) => {
            "use strict";
            e.d(n, {
               Z: () => i
            });
            var r = e(6740);

            function i(t) {
               return "string" == typeof t ? new r.Y1([
                  [document.querySelector(t)]
               ], [document.documentElement]) : new r.Y1([
                  [t]
               ], r.Jz)
            }
         },
         6740: (t, n, e) => {
            "use strict";
            e.d(n, {
               Y1: () => rt,
               ZP: () => ot,
               Jz: () => et
            });
            var r = e(3010),
               i = e(9898),
               o = e(9701),
               s = e(4421),
               a = Array.prototype.find;

            function u() {
               return this.firstElementChild
            }
            var c = Array.prototype.filter;

            function l() {
               return Array.from(this.children)
            }

            function h(t) {
               return new Array(t.length)
            }

            function f(t, n) {
               this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
            }

            function p(t, n, e, r, i, o) {
               for (var s, a = 0, u = n.length, c = o.length; a < c; ++a)(s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new f(t, o[a]);
               for (; a < u; ++a)(s = n[a]) && (i[a] = s)
            }

            function d(t, n, e, r, i, o, s) {
               var a, u, c, l = new Map,
                  h = n.length,
                  p = o.length,
                  d = new Array(h);
               for (a = 0; a < h; ++a)(u = n[a]) && (d[a] = c = s.call(u, u.__data__, a, n) + "", l.has(c) ? i[a] = u : l.set(c, u));
               for (a = 0; a < p; ++a) c = s.call(t, o[a], a, o) + "", (u = l.get(c)) ? (r[a] = u, u.__data__ = o[a], l.delete(c)) : e[a] = new f(t, o[a]);
               for (a = 0; a < h; ++a)(u = n[a]) && l.get(d[a]) === u && (i[a] = u)
            }

            function y(t) {
               return t.__data__
            }

            function m(t) {
               return "object" == typeof t && "length" in t ? t : Array.from(t)
            }

            function _(t, n) {
               return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
            }
            f.prototype = {
               constructor: f,
               appendChild: function (t) {
                  return this._parent.insertBefore(t, this._next)
               },
               insertBefore: function (t, n) {
                  return this._parent.insertBefore(t, n)
               },
               querySelector: function (t) {
                  return this._parent.querySelector(t)
               },
               querySelectorAll: function (t) {
                  return this._parent.querySelectorAll(t)
               }
            };
            var v = e(1663);

            function g(t) {
               return function () {
                  this.removeAttribute(t)
               }
            }

            function x(t) {
               return function () {
                  this.removeAttributeNS(t.space, t.local)
               }
            }

            function w(t, n) {
               return function () {
                  this.setAttribute(t, n)
               }
            }

            function b(t, n) {
               return function () {
                  this.setAttributeNS(t.space, t.local, n)
               }
            }

            function M(t, n) {
               return function () {
                  var e = n.apply(this, arguments);
                  null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
               }
            }

            function T(t, n) {
               return function () {
                  var e = n.apply(this, arguments);
                  null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
               }
            }
            var E = e(2627);

            function k(t) {
               return function () {
                  delete this[t]
               }
            }

            function N(t, n) {
               return function () {
                  this[t] = n
               }
            }

            function A(t, n) {
               return function () {
                  var e = n.apply(this, arguments);
                  null == e ? delete this[t] : this[t] = e
               }
            }

            function S(t) {
               return t.trim().split(/^|\s+/)
            }

            function P(t) {
               return t.classList || new O(t)
            }

            function O(t) {
               this._node = t, this._names = S(t.getAttribute("class") || "")
            }

            function L(t, n) {
               for (var e = P(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
            }

            function I(t, n) {
               for (var e = P(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
            }

            function Z(t) {
               return function () {
                  L(this, t)
               }
            }

            function C(t) {
               return function () {
                  I(this, t)
               }
            }

            function D(t, n) {
               return function () {
                  (n.apply(this, arguments) ? L : I)(this, t)
               }
            }

            function H() {
               this.textContent = ""
            }

            function $(t) {
               return function () {
                  this.textContent = t
               }
            }

            function j(t) {
               return function () {
                  var n = t.apply(this, arguments);
                  this.textContent = null == n ? "" : n
               }
            }

            function F() {
               this.innerHTML = ""
            }

            function Y(t) {
               return function () {
                  this.innerHTML = t
               }
            }

            function z(t) {
               return function () {
                  var n = t.apply(this, arguments);
                  this.innerHTML = null == n ? "" : n
               }
            }

            function R() {
               this.nextSibling && this.parentNode.appendChild(this)
            }

            function U() {
               this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
            }
            O.prototype = {
               add: function (t) {
                  this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
               },
               remove: function (t) {
                  var n = this._names.indexOf(t);
                  n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
               },
               contains: function (t) {
                  return this._names.indexOf(t) >= 0
               }
            };
            var q = e(4708);

            function X() {
               return null
            }

            function B() {
               var t = this.parentNode;
               t && t.removeChild(this)
            }

            function V() {
               var t = this.cloneNode(!1),
                  n = this.parentNode;
               return n ? n.insertBefore(t, this.nextSibling) : t
            }

            function W() {
               var t = this.cloneNode(!0),
                  n = this.parentNode;
               return n ? n.insertBefore(t, this.nextSibling) : t
            }

            function G(t) {
               return function () {
                  var n = this.__on;
                  if (n) {
                     for (var e, r = 0, i = -1, o = n.length; r < o; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.options);
                     ++i ? n.length = i : delete this.__on
                  }
               }
            }

            function J(t, n, e) {
               return function () {
                  var r, i = this.__on,
                     o = function (t) {
                        return function (n) {
                           t.call(this, n, this.__data__)
                        }
                     }(n);
                  if (i)
                     for (var s = 0, a = i.length; s < a; ++s)
                        if ((r = i[s]).type === t.type && r.name === t.name) return this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = o, r.options = e), void(r.value = n);
                  this.addEventListener(t.type, o, e), r = {
                     type: t.type,
                     name: t.name,
                     value: n,
                     listener: o,
                     options: e
                  }, i ? i.push(r) : this.__on = [r]
               }
            }
            var Q = e(9920);

            function K(t, n, e) {
               var r = (0, Q.Z)(t),
                  i = r.CustomEvent;
               "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
            }

            function tt(t, n) {
               return function () {
                  return K(this, t, n)
               }
            }

            function nt(t, n) {
               return function () {
                  return K(this, t, n.apply(this, arguments))
               }
            }
            var et = [null];

            function rt(t, n) {
               this._groups = t, this._parents = n
            }

            function it() {
               return new rt([
                  [document.documentElement]
               ], et)
            }
            rt.prototype = it.prototype = {
               constructor: rt,
               select: function (t) {
                  "function" != typeof t && (t = (0, r.Z)(t));
                  for (var n = this._groups, e = n.length, i = new Array(e), o = 0; o < e; ++o)
                     for (var s, a, u = n[o], c = u.length, l = i[o] = new Array(c), h = 0; h < c; ++h)(s = u[h]) && (a = t.call(s, s.__data__, h, u)) && ("__data__" in s && (a.__data__ = s.__data__), l[h] = a);
                  return new rt(i, this._parents)
               },
               selectAll: function (t) {
                  t = "function" == typeof t ? function (t) {
                     return function () {
                        return (0, i.Z)(t.apply(this, arguments))
                     }
                  }(t) : (0, o.Z)(t);
                  for (var n = this._groups, e = n.length, r = [], s = [], a = 0; a < e; ++a)
                     for (var u, c = n[a], l = c.length, h = 0; h < l; ++h)(u = c[h]) && (r.push(t.call(u, u.__data__, h, c)), s.push(u));
                  return new rt(r, s)
               },
               selectChild: function (t) {
                  return this.select(null == t ? u : function (t) {
                     return function () {
                        return a.call(this.children, t)
                     }
                  }("function" == typeof t ? t : (0, s.P)(t)))
               },
               selectChildren: function (t) {
                  return this.selectAll(null == t ? l : function (t) {
                     return function () {
                        return c.call(this.children, t)
                     }
                  }("function" == typeof t ? t : (0, s.P)(t)))
               },
               filter: function (t) {
                  "function" != typeof t && (t = (0, s.Z)(t));
                  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                     for (var o, a = n[i], u = a.length, c = r[i] = [], l = 0; l < u; ++l)(o = a[l]) && t.call(o, o.__data__, l, a) && c.push(o);
                  return new rt(r, this._parents)
               },
               data: function (t, n) {
                  if (!arguments.length) return Array.from(this, y);
                  var e, r = n ? d : p,
                     i = this._parents,
                     o = this._groups;
                  "function" != typeof t && (e = t, t = function () {
                     return e
                  });
                  for (var s = o.length, a = new Array(s), u = new Array(s), c = new Array(s), l = 0; l < s; ++l) {
                     var h = i[l],
                        f = o[l],
                        _ = f.length,
                        v = m(t.call(h, h && h.__data__, l, i)),
                        g = v.length,
                        x = u[l] = new Array(g),
                        w = a[l] = new Array(g);
                     r(h, f, x, w, c[l] = new Array(_), v, n);
                     for (var b, M, T = 0, E = 0; T < g; ++T)
                        if (b = x[T]) {
                           for (T >= E && (E = T + 1); !(M = w[E]) && ++E < g;);
                           b._next = M || null
                        }
                  }
                  return (a = new rt(a, i))._enter = u, a._exit = c, a
               },
               enter: function () {
                  return new rt(this._enter || this._groups.map(h), this._parents)
               },
               exit: function () {
                  return new rt(this._exit || this._groups.map(h), this._parents)
               },
               join: function (t, n, e) {
                  var r = this.enter(),
                     i = this,
                     o = this.exit();
                  return "function" == typeof t ? (r = t(r)) && (r = r.selection()) : r = r.append(t + ""), null != n && (i = n(i)) && (i = i.selection()), null == e ? o.remove() : e(o), r && i ? r.merge(i).order() : i
               },
               merge: function (t) {
                  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, s = Math.min(i, o), a = new Array(i), u = 0; u < s; ++u)
                     for (var c, l = e[u], h = r[u], f = l.length, p = a[u] = new Array(f), d = 0; d < f; ++d)(c = l[d] || h[d]) && (p[d] = c);
                  for (; u < i; ++u) a[u] = e[u];
                  return new rt(a, this._parents)
               },
               selection: function () {
                  return this
               },
               order: function () {
                  for (var t = this._groups, n = -1, e = t.length; ++n < e;)
                     for (var r, i = t[n], o = i.length - 1, s = i[o]; --o >= 0;)(r = i[o]) && (s && 4 ^ r.compareDocumentPosition(s) && s.parentNode.insertBefore(r, s), s = r);
                  return this
               },
               sort: function (t) {
                  function n(n, e) {
                     return n && e ? t(n.__data__, e.__data__) : !n - !e
                  }
                  t || (t = _);
                  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
                     for (var s, a = e[o], u = a.length, c = i[o] = new Array(u), l = 0; l < u; ++l)(s = a[l]) && (c[l] = s);
                     c.sort(n)
                  }
                  return new rt(i, this._parents).order()
               },
               call: function () {
                  var t = arguments[0];
                  return arguments[0] = this, t.apply(null, arguments), this
               },
               nodes: function () {
                  return Array.from(this)
               },
               node: function () {
                  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                     for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
                        var s = r[i];
                        if (s) return s
                     }
                  return null
               },
               size: function () {
                  let t = 0;
                  for (const n of this) ++t;
                  return t
               },
               empty: function () {
                  return !this.node()
               },
               each: function (t) {
                  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                     for (var i, o = n[e], s = 0, a = o.length; s < a; ++s)(i = o[s]) && t.call(i, i.__data__, s, o);
                  return this
               },
               attr: function (t, n) {
                  var e = (0, v.Z)(t);
                  if (arguments.length < 2) {
                     var r = this.node();
                     return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
                  }
                  return this.each((null == n ? e.local ? x : g : "function" == typeof n ? e.local ? T : M : e.local ? b : w)(e, n))
               },
               style: E.Z,
               property: function (t, n) {
                  return arguments.length > 1 ? this.each((null == n ? k : "function" == typeof n ? A : N)(t, n)) : this.node()[t]
               },
               classed: function (t, n) {
                  var e = S(t + "");
                  if (arguments.length < 2) {
                     for (var r = P(this.node()), i = -1, o = e.length; ++i < o;)
                        if (!r.contains(e[i])) return !1;
                     return !0
                  }
                  return this.each(("function" == typeof n ? D : n ? Z : C)(e, n))
               },
               text: function (t) {
                  return arguments.length ? this.each(null == t ? H : ("function" == typeof t ? j : $)(t)) : this.node().textContent
               },
               html: function (t) {
                  return arguments.length ? this.each(null == t ? F : ("function" == typeof t ? z : Y)(t)) : this.node().innerHTML
               },
               raise: function () {
                  return this.each(R)
               },
               lower: function () {
                  return this.each(U)
               },
               append: function (t) {
                  var n = "function" == typeof t ? t : (0, q.Z)(t);
                  return this.select((function () {
                     return this.appendChild(n.apply(this, arguments))
                  }))
               },
               insert: function (t, n) {
                  var e = "function" == typeof t ? t : (0, q.Z)(t),
                     i = null == n ? X : "function" == typeof n ? n : (0, r.Z)(n);
                  return this.select((function () {
                     return this.insertBefore(e.apply(this, arguments), i.apply(this, arguments) || null)
                  }))
               },
               remove: function () {
                  return this.each(B)
               },
               clone: function (t) {
                  return this.select(t ? W : V)
               },
               datum: function (t) {
                  return arguments.length ? this.property("__data__", t) : this.node().__data__
               },
               on: function (t, n, e) {
                  var r, i, o = function (t) {
                        return t.trim().split(/^|\s+/).map((function (t) {
                           var n = "",
                              e = t.indexOf(".");
                           return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
                              type: t,
                              name: n
                           }
                        }))
                     }(t + ""),
                     s = o.length;
                  if (!(arguments.length < 2)) {
                     for (a = n ? J : G, r = 0; r < s; ++r) this.each(a(o[r], n, e));
                     return this
                  }
                  var a = this.node().__on;
                  if (a)
                     for (var u, c = 0, l = a.length; c < l; ++c)
                        for (r = 0, u = a[c]; r < s; ++r)
                           if ((i = o[r]).type === u.type && i.name === u.name) return u.value
               },
               dispatch: function (t, n) {
                  return this.each(("function" == typeof n ? nt : tt)(t, n))
               },
               [Symbol.iterator]: function* () {
                  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                     for (var r, i = t[n], o = 0, s = i.length; o < s; ++o)(r = i[o]) && (yield r)
               }
            };
            const ot = it
         },
         2627: (t, n, e) => {
            "use strict";
            e.d(n, {
               S: () => u,
               Z: () => a
            });
            var r = e(9920);

            function i(t) {
               return function () {
                  this.style.removeProperty(t)
               }
            }

            function o(t, n, e) {
               return function () {
                  this.style.setProperty(t, n, e)
               }
            }

            function s(t, n, e) {
               return function () {
                  var r = n.apply(this, arguments);
                  null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
               }
            }

            function a(t, n, e) {
               return arguments.length > 1 ? this.each((null == n ? i : "function" == typeof n ? s : o)(t, n, null == e ? "" : e)) : u(this.node(), t)
            }

            function u(t, n) {
               return t.style.getPropertyValue(n) || (0, r.Z)(t).getComputedStyle(t, null).getPropertyValue(n)
            }
         },
         3010: (t, n, e) => {
            "use strict";

            function r() {}

            function i(t) {
               return null == t ? r : function () {
                  return this.querySelector(t)
               }
            }
            e.d(n, {
               Z: () => i
            })
         },
         9701: (t, n, e) => {
            "use strict";

            function r() {
               return []
            }

            function i(t) {
               return null == t ? r : function () {
                  return this.querySelectorAll(t)
               }
            }
            e.d(n, {
               Z: () => i
            })
         },
         9439: (t, n, e) => {
            "use strict";

            function r(t) {
               let n;
               for (; n = t.sourceEvent;) t = n;
               return t
            }
            e.d(n, {
               Z: () => r
            })
         },
         9920: (t, n, e) => {
            "use strict";

            function r(t) {
               return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
            }
            e.d(n, {
               Z: () => r
            })
         },
         6660: (t, n, e) => {
            "use strict";

            function r(t) {
               return function () {
                  return t
               }
            }
            e.r(n), e.d(n, {
               arc: () => S,
               area: () => H,
               areaRadial: () => X,
               curveBasis: () => Dt,
               curveBasisClosed: () => $t,
               curveBasisOpen: () => Ft,
               curveBumpX: () => G,
               curveBumpY: () => J,
               curveBundle: () => zt,
               curveCardinal: () => qt,
               curveCardinalClosed: () => Bt,
               curveCardinalOpen: () => Wt,
               curveCatmullRom: () => Qt,
               curveCatmullRomClosed: () => tn,
               curveCatmullRomOpen: () => en,
               curveLinear: () => I,
               curveLinearClosed: () => on,
               curveMonotoneX: () => pn,
               curveMonotoneY: () => dn,
               curveNatural: () => _n,
               curveStep: () => gn,
               curveStepAfter: () => wn,
               curveStepBefore: () => xn,
               line: () => D,
               lineRadial: () => q,
               link: () => nt,
               linkHorizontal: () => et,
               linkRadial: () => it,
               linkVertical: () => rt,
               pie: () => F,
               pointRadial: () => B,
               radialArea: () => X,
               radialLine: () => q,
               stack: () => kn,
               stackOffsetDiverging: () => An,
               stackOffsetExpand: () => Nn,
               stackOffsetNone: () => bn,
               stackOffsetSilhouette: () => Sn,
               stackOffsetWiggle: () => Pn,
               stackOrderAppearance: () => On,
               stackOrderAscending: () => In,
               stackOrderDescending: () => Cn,
               stackOrderInsideOut: () => Dn,
               stackOrderNone: () => Mn,
               stackOrderReverse: () => Hn,
               symbol: () => Lt,
               symbolAsterisk: () => st,
               symbolCircle: () => at,
               symbolCross: () => ut,
               symbolDiamond: () => ht,
               symbolDiamond2: () => ft,
               symbolPlus: () => pt,
               symbolSquare: () => dt,
               symbolSquare2: () => yt,
               symbolStar: () => gt,
               symbolTimes: () => St,
               symbolTriangle: () => wt,
               symbolTriangle2: () => Mt,
               symbolWye: () => At,
               symbolX: () => St,
               symbols: () => Pt,
               symbolsFill: () => Pt,
               symbolsStroke: () => Ot
            });
            const i = Math.abs,
               o = Math.atan2,
               s = Math.cos,
               a = Math.max,
               u = Math.min,
               c = Math.sin,
               l = Math.sqrt,
               h = 1e-12,
               f = Math.PI,
               p = f / 2,
               d = 2 * f;

            function y(t) {
               return t >= 1 ? p : t <= -1 ? -p : Math.asin(t)
            }
            const m = Math.PI,
               _ = 2 * m,
               v = 1e-6,
               g = _ - v;

            function x(t) {
               this._ += t[0];
               for (let n = 1, e = t.length; n < e; ++n) this._ += arguments[n] + t[n]
            }
            class w {
               constructor(t) {
                  this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == t ? x : function (t) {
                     let n = Math.floor(t);
                     if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
                     if (n > 15) return x;
                     const e = 10 ** n;
                     return function (t) {
                        this._ += t[0];
                        for (let n = 1, r = t.length; n < r; ++n) this._ += Math.round(arguments[n] * e) / e + t[n]
                     }
                  }(t)
               }
               moveTo(t, n) {
                  this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`
               }
               closePath() {
                  null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
               }
               lineTo(t, n) {
                  this._append`L${this._x1=+t},${this._y1=+n}`
               }
               quadraticCurveTo(t, n, e, r) {
                  this._append`Q${+t},${+n},${this._x1=+e},${this._y1=+r}`
               }
               bezierCurveTo(t, n, e, r, i, o) {
                  this._append`C${+t},${+n},${+e},${+r},${this._x1=+i},${this._y1=+o}`
               }
               arcTo(t, n, e, r, i) {
                  if (t = +t, n = +n, e = +e, r = +r, (i = +i) < 0) throw new Error(`negative radius: ${i}`);
                  let o = this._x1,
                     s = this._y1,
                     a = e - t,
                     u = r - n,
                     c = o - t,
                     l = s - n,
                     h = c * c + l * l;
                  if (null === this._x1) this._append`M${this._x1=t},${this._y1=n}`;
                  else if (h > v)
                     if (Math.abs(l * a - u * c) > v && i) {
                        let f = e - o,
                           p = r - s,
                           d = a * a + u * u,
                           y = f * f + p * p,
                           _ = Math.sqrt(d),
                           g = Math.sqrt(h),
                           x = i * Math.tan((m - Math.acos((d + h - y) / (2 * _ * g))) / 2),
                           w = x / g,
                           b = x / _;
                        Math.abs(w - 1) > v && this._append`L${t+w*c},${n+w*l}`, this._append`A${i},${i},0,0,${+(l*f>c*p)},${this._x1=t+b*a},${this._y1=n+b*u}`
                     } else this._append`L${this._x1=t},${this._y1=n}`
               }
               arc(t, n, e, r, i, o) {
                  if (t = +t, n = +n, o = !!o, (e = +e) < 0) throw new Error(`negative radius: ${e}`);
                  let s = e * Math.cos(r),
                     a = e * Math.sin(r),
                     u = t + s,
                     c = n + a,
                     l = 1 ^ o,
                     h = o ? r - i : i - r;
                  null === this._x1 ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > v || Math.abs(this._y1 - c) > v) && this._append`L${u},${c}`, e && (h < 0 && (h = h % _ + _), h > g ? this._append`A${e},${e},0,1,${l},${t-s},${n-a}A${e},${e},0,1,${l},${this._x1=u},${this._y1=c}` : h > v && this._append`A${e},${e},0,${+(h>=m)},${l},${this._x1=t+e*Math.cos(i)},${this._y1=n+e*Math.sin(i)}`)
               }
               rect(t, n, e, r) {
                  this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${e=+e}v${+r}h${-e}Z`
               }
               toString() {
                  return this._
               }
            }

            function b(t) {
               let n = 3;
               return t.digits = function (e) {
                  if (!arguments.length) return n;
                  if (null == e) n = null;
                  else {
                     const t = Math.floor(e);
                     if (!(t >= 0)) throw new RangeError(`invalid digits: ${e}`);
                     n = t
                  }
                  return t
               }, () => new w(n)
            }

            function M(t) {
               return t.innerRadius
            }

            function T(t) {
               return t.outerRadius
            }

            function E(t) {
               return t.startAngle
            }

            function k(t) {
               return t.endAngle
            }

            function N(t) {
               return t && t.padAngle
            }

            function A(t, n, e, r, i, o, s) {
               var u = t - e,
                  c = n - r,
                  h = (s ? o : -o) / l(u * u + c * c),
                  f = h * c,
                  p = -h * u,
                  d = t + f,
                  y = n + p,
                  m = e + f,
                  _ = r + p,
                  v = (d + m) / 2,
                  g = (y + _) / 2,
                  x = m - d,
                  w = _ - y,
                  b = x * x + w * w,
                  M = i - o,
                  T = d * _ - m * y,
                  E = (w < 0 ? -1 : 1) * l(a(0, M * M * b - T * T)),
                  k = (T * w - x * E) / b,
                  N = (-T * x - w * E) / b,
                  A = (T * w + x * E) / b,
                  S = (-T * x + w * E) / b,
                  P = k - v,
                  O = N - g,
                  L = A - v,
                  I = S - g;
               return P * P + O * O > L * L + I * I && (k = A, N = S), {
                  cx: k,
                  cy: N,
                  x01: -f,
                  y01: -p,
                  x11: k * (i / M - 1),
                  y11: N * (i / M - 1)
               }
            }

            function S() {
               var t = M,
                  n = T,
                  e = r(0),
                  a = null,
                  m = E,
                  _ = k,
                  v = N,
                  g = null,
                  x = b(w);

               function w() {
                  var r, w, b, M = +t.apply(this, arguments),
                     T = +n.apply(this, arguments),
                     E = m.apply(this, arguments) - p,
                     k = _.apply(this, arguments) - p,
                     N = i(k - E),
                     S = k > E;
                  if (g || (g = r = x()), T < M && (w = T, T = M, M = w), T > h)
                     if (N > d - h) g.moveTo(T * s(E), T * c(E)), g.arc(0, 0, T, E, k, !S), M > h && (g.moveTo(M * s(k), M * c(k)), g.arc(0, 0, M, k, E, S));
                     else {
                        var P, O, L = E,
                           I = k,
                           Z = E,
                           C = k,
                           D = N,
                           H = N,
                           $ = v.apply(this, arguments) / 2,
                           j = $ > h && (a ? +a.apply(this, arguments) : l(M * M + T * T)),
                           F = u(i(T - M) / 2, +e.apply(this, arguments)),
                           Y = F,
                           z = F;
                        if (j > h) {
                           var R = y(j / M * c($)),
                              U = y(j / T * c($));
                           (D -= 2 * R) > h ? (Z += R *= S ? 1 : -1, C -= R) : (D = 0, Z = C = (E + k) / 2), (H -= 2 * U) > h ? (L += U *= S ? 1 : -1, I -= U) : (H = 0, L = I = (E + k) / 2)
                        }
                        var q = T * s(L),
                           X = T * c(L),
                           B = M * s(C),
                           V = M * c(C);
                        if (F > h) {
                           var W, G = T * s(I),
                              J = T * c(I),
                              Q = M * s(Z),
                              K = M * c(Z);
                           if (N < f)
                              if (W = function (t, n, e, r, i, o, s, a) {
                                    var u = e - t,
                                       c = r - n,
                                       l = s - i,
                                       f = a - o,
                                       p = f * u - l * c;
                                    if (!(p * p < h)) return [t + (p = (l * (n - o) - f * (t - i)) / p) * u, n + p * c]
                                 }(q, X, Q, K, G, J, B, V)) {
                                 var tt = q - W[0],
                                    nt = X - W[1],
                                    et = G - W[0],
                                    rt = J - W[1],
                                    it = 1 / c(((b = (tt * et + nt * rt) / (l(tt * tt + nt * nt) * l(et * et + rt * rt))) > 1 ? 0 : b < -1 ? f : Math.acos(b)) / 2),
                                    ot = l(W[0] * W[0] + W[1] * W[1]);
                                 Y = u(F, (M - ot) / (it - 1)), z = u(F, (T - ot) / (it + 1))
                              } else Y = z = 0
                        }
                        H > h ? z > h ? (P = A(Q, K, q, X, T, z, S), O = A(G, J, B, V, T, z, S), g.moveTo(P.cx + P.x01, P.cy + P.y01), z < F ? g.arc(P.cx, P.cy, z, o(P.y01, P.x01), o(O.y01, O.x01), !S) : (g.arc(P.cx, P.cy, z, o(P.y01, P.x01), o(P.y11, P.x11), !S), g.arc(0, 0, T, o(P.cy + P.y11, P.cx + P.x11), o(O.cy + O.y11, O.cx + O.x11), !S), g.arc(O.cx, O.cy, z, o(O.y11, O.x11), o(O.y01, O.x01), !S))) : (g.moveTo(q, X), g.arc(0, 0, T, L, I, !S)) : g.moveTo(q, X), M > h && D > h ? Y > h ? (P = A(B, V, G, J, M, -Y, S), O = A(q, X, Q, K, M, -Y, S), g.lineTo(P.cx + P.x01, P.cy + P.y01), Y < F ? g.arc(P.cx, P.cy, Y, o(P.y01, P.x01), o(O.y01, O.x01), !S) : (g.arc(P.cx, P.cy, Y, o(P.y01, P.x01), o(P.y11, P.x11), !S), g.arc(0, 0, M, o(P.cy + P.y11, P.cx + P.x11), o(O.cy + O.y11, O.cx + O.x11), S), g.arc(O.cx, O.cy, Y, o(O.y11, O.x11), o(O.y01, O.x01), !S))) : g.arc(0, 0, M, C, Z, S) : g.lineTo(B, V)
                     }
                  else g.moveTo(0, 0);
                  if (g.closePath(), r) return g = null, r + "" || null
               }
               return w.centroid = function () {
                  var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
                     r = (+m.apply(this, arguments) + +_.apply(this, arguments)) / 2 - f / 2;
                  return [s(r) * e, c(r) * e]
               }, w.innerRadius = function (n) {
                  return arguments.length ? (t = "function" == typeof n ? n : r(+n), w) : t
               }, w.outerRadius = function (t) {
                  return arguments.length ? (n = "function" == typeof t ? t : r(+t), w) : n
               }, w.cornerRadius = function (t) {
                  return arguments.length ? (e = "function" == typeof t ? t : r(+t), w) : e
               }, w.padRadius = function (t) {
                  return arguments.length ? (a = null == t ? null : "function" == typeof t ? t : r(+t), w) : a
               }, w.startAngle = function (t) {
                  return arguments.length ? (m = "function" == typeof t ? t : r(+t), w) : m
               }, w.endAngle = function (t) {
                  return arguments.length ? (_ = "function" == typeof t ? t : r(+t), w) : _
               }, w.padAngle = function (t) {
                  return arguments.length ? (v = "function" == typeof t ? t : r(+t), w) : v
               }, w.context = function (t) {
                  return arguments.length ? (g = null == t ? null : t, w) : g
               }, w
            }
            w.prototype;
            var P = Array.prototype.slice;

            function O(t) {
               return "object" == typeof t && "length" in t ? t : Array.from(t)
            }

            function L(t) {
               this._context = t
            }

            function I(t) {
               return new L(t)
            }

            function Z(t) {
               return t[0]
            }

            function C(t) {
               return t[1]
            }

            function D(t, n) {
               var e = r(!0),
                  i = null,
                  o = I,
                  s = null,
                  a = b(u);

               function u(r) {
                  var u, c, l, h = (r = O(r)).length,
                     f = !1;
                  for (null == i && (s = o(l = a())), u = 0; u <= h; ++u) !(u < h && e(c = r[u], u, r)) === f && ((f = !f) ? s.lineStart() : s.lineEnd()), f && s.point(+t(c, u, r), +n(c, u, r));
                  if (l) return s = null, l + "" || null
               }
               return t = "function" == typeof t ? t : void 0 === t ? Z : r(t), n = "function" == typeof n ? n : void 0 === n ? C : r(n), u.x = function (n) {
                  return arguments.length ? (t = "function" == typeof n ? n : r(+n), u) : t
               }, u.y = function (t) {
                  return arguments.length ? (n = "function" == typeof t ? t : r(+t), u) : n
               }, u.defined = function (t) {
                  return arguments.length ? (e = "function" == typeof t ? t : r(!!t), u) : e
               }, u.curve = function (t) {
                  return arguments.length ? (o = t, null != i && (s = o(i)), u) : o
               }, u.context = function (t) {
                  return arguments.length ? (null == t ? i = s = null : s = o(i = t), u) : i
               }, u
            }

            function H(t, n, e) {
               var i = null,
                  o = r(!0),
                  s = null,
                  a = I,
                  u = null,
                  c = b(l);

               function l(r) {
                  var l, h, f, p, d, y = (r = O(r)).length,
                     m = !1,
                     _ = new Array(y),
                     v = new Array(y);
                  for (null == s && (u = a(d = c())), l = 0; l <= y; ++l) {
                     if (!(l < y && o(p = r[l], l, r)) === m)
                        if (m = !m) h = l, u.areaStart(), u.lineStart();
                        else {
                           for (u.lineEnd(), u.lineStart(), f = l - 1; f >= h; --f) u.point(_[f], v[f]);
                           u.lineEnd(), u.areaEnd()
                        } m && (_[l] = +t(p, l, r), v[l] = +n(p, l, r), u.point(i ? +i(p, l, r) : _[l], e ? +e(p, l, r) : v[l]))
                  }
                  if (d) return u = null, d + "" || null
               }

               function h() {
                  return D().defined(o).curve(a).context(s)
               }
               return t = "function" == typeof t ? t : void 0 === t ? Z : r(+t), n = "function" == typeof n ? n : r(void 0 === n ? 0 : +n), e = "function" == typeof e ? e : void 0 === e ? C : r(+e), l.x = function (n) {
                  return arguments.length ? (t = "function" == typeof n ? n : r(+n), i = null, l) : t
               }, l.x0 = function (n) {
                  return arguments.length ? (t = "function" == typeof n ? n : r(+n), l) : t
               }, l.x1 = function (t) {
                  return arguments.length ? (i = null == t ? null : "function" == typeof t ? t : r(+t), l) : i
               }, l.y = function (t) {
                  return arguments.length ? (n = "function" == typeof t ? t : r(+t), e = null, l) : n
               }, l.y0 = function (t) {
                  return arguments.length ? (n = "function" == typeof t ? t : r(+t), l) : n
               }, l.y1 = function (t) {
                  return arguments.length ? (e = null == t ? null : "function" == typeof t ? t : r(+t), l) : e
               }, l.lineX0 = l.lineY0 = function () {
                  return h().x(t).y(n)
               }, l.lineY1 = function () {
                  return h().x(t).y(e)
               }, l.lineX1 = function () {
                  return h().x(i).y(n)
               }, l.defined = function (t) {
                  return arguments.length ? (o = "function" == typeof t ? t : r(!!t), l) : o
               }, l.curve = function (t) {
                  return arguments.length ? (a = t, null != s && (u = a(s)), l) : a
               }, l.context = function (t) {
                  return arguments.length ? (null == t ? s = u = null : u = a(s = t), l) : s
               }, l
            }

            function $(t, n) {
               return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
            }

            function j(t) {
               return t
            }

            function F() {
               var t = j,
                  n = $,
                  e = null,
                  i = r(0),
                  o = r(d),
                  s = r(0);

               function a(r) {
                  var a, u, c, l, h, f = (r = O(r)).length,
                     p = 0,
                     y = new Array(f),
                     m = new Array(f),
                     _ = +i.apply(this, arguments),
                     v = Math.min(d, Math.max(-d, o.apply(this, arguments) - _)),
                     g = Math.min(Math.abs(v) / f, s.apply(this, arguments)),
                     x = g * (v < 0 ? -1 : 1);
                  for (a = 0; a < f; ++a)(h = m[y[a] = a] = +t(r[a], a, r)) > 0 && (p += h);
                  for (null != n ? y.sort((function (t, e) {
                        return n(m[t], m[e])
                     })) : null != e && y.sort((function (t, n) {
                        return e(r[t], r[n])
                     })), a = 0, c = p ? (v - f * x) / p : 0; a < f; ++a, _ = l) u = y[a], l = _ + ((h = m[u]) > 0 ? h * c : 0) + x, m[u] = {
                     data: r[u],
                     index: a,
                     value: h,
                     startAngle: _,
                     endAngle: l,
                     padAngle: g
                  };
                  return m
               }
               return a.value = function (n) {
                  return arguments.length ? (t = "function" == typeof n ? n : r(+n), a) : t
               }, a.sortValues = function (t) {
                  return arguments.length ? (n = t, e = null, a) : n
               }, a.sort = function (t) {
                  return arguments.length ? (e = t, n = null, a) : e
               }, a.startAngle = function (t) {
                  return arguments.length ? (i = "function" == typeof t ? t : r(+t), a) : i
               }, a.endAngle = function (t) {
                  return arguments.length ? (o = "function" == typeof t ? t : r(+t), a) : o
               }, a.padAngle = function (t) {
                  return arguments.length ? (s = "function" == typeof t ? t : r(+t), a) : s
               }, a
            }
            L.prototype = {
               areaStart: function () {
                  this._line = 0
               },
               areaEnd: function () {
                  this._line = NaN
               },
               lineStart: function () {
                  this._point = 0
               },
               lineEnd: function () {
                  (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
               },
               point: function (t, n) {
                  switch (t = +t, n = +n, this._point) {
                     case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                     case 1:
                        this._point = 2;
                     default:
                        this._context.lineTo(t, n)
                  }
               }
            };
            var Y = R(I);

            function z(t) {
               this._curve = t
            }

            function R(t) {
               function n(n) {
                  return new z(t(n))
               }
               return n._curve = t, n
            }

            function U(t) {
               var n = t.curve;
               return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function (t) {
                  return arguments.length ? n(R(t)) : n()._curve
               }, t
            }

            function q() {
               return U(D().curve(Y))
            }

            function X() {
               var t = H().curve(Y),
                  n = t.curve,
                  e = t.lineX0,
                  r = t.lineX1,
                  i = t.lineY0,
                  o = t.lineY1;
               return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function () {
                  return U(e())
               }, delete t.lineX0, t.lineEndAngle = function () {
                  return U(r())
               }, delete t.lineX1, t.lineInnerRadius = function () {
                  return U(i())
               }, delete t.lineY0, t.lineOuterRadius = function () {
                  return U(o())
               }, delete t.lineY1, t.curve = function (t) {
                  return arguments.length ? n(R(t)) : n()._curve
               }, t
            }

            function B(t, n) {
               return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)]
            }
            z.prototype = {
               areaStart: function () {
                  this._curve.areaStart()
               },
               areaEnd: function () {
                  this._curve.areaEnd()
               },
               lineStart: function () {
                  this._curve.lineStart()
               },
               lineEnd: function () {
                  this._curve.lineEnd()
               },
               point: function (t, n) {
                  this._curve.point(n * Math.sin(t), n * -Math.cos(t))
               }
            };
            class V {
               constructor(t, n) {
                  this._context = t, this._x = n
               }
               areaStart() {
                  this._line = 0
               }
               areaEnd() {
                  this._line = NaN
               }
               lineStart() {
                  this._point = 0
               }
               lineEnd() {
                  (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
               }
               point(t, n) {
                  switch (t = +t, n = +n, this._point) {
                     case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                     case 1:
                        this._point = 2;
                     default:
                        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, n, t, n) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + n) / 2, t, this._y0, t, n)
                  }
                  this._x0 = t, this._y0 = n
               }
            }
            class W {
               constructor(t) {
                  this._context = t
               }
               lineStart() {
                  this._point = 0
               }
               lineEnd() {}
               point(t, n) {
                  if (t = +t, n = +n, 0 === this._point) this._point = 1;
                  else {
                     const e = B(this._x0, this._y0),
                        r = B(this._x0, this._y0 = (this._y0 + n) / 2),
                        i = B(t, this._y0),
                        o = B(t, n);
                     this._context.moveTo(...e), this._context.bezierCurveTo(...r, ...i, ...o)
                  }
                  this._x0 = t, this._y0 = n
               }
            }

            function G(t) {
               return new V(t, !0)
            }

            function J(t) {
               return new V(t, !1)
            }

            function Q(t) {
               return new W(t)
            }

            function K(t) {
               return t.source
            }

            function tt(t) {
               return t.target
            }

            function nt(t) {
               let n = K,
                  e = tt,
                  i = Z,
                  o = C,
                  s = null,
                  a = null,
                  u = b(c);

               function c() {
                  let r;
                  const c = P.call(arguments),
                     l = n.apply(this, c),
                     h = e.apply(this, c);
                  if (null == s && (a = t(r = u())), a.lineStart(), c[0] = l, a.point(+i.apply(this, c), +o.apply(this, c)), c[0] = h, a.point(+i.apply(this, c), +o.apply(this, c)), a.lineEnd(), r) return a = null, r + "" || null
               }
               return c.source = function (t) {
                  return arguments.length ? (n = t, c) : n
               }, c.target = function (t) {
                  return arguments.length ? (e = t, c) : e
               }, c.x = function (t) {
                  return arguments.length ? (i = "function" == typeof t ? t : r(+t), c) : i
               }, c.y = function (t) {
                  return arguments.length ? (o = "function" == typeof t ? t : r(+t), c) : o
               }, c.context = function (n) {
                  return arguments.length ? (null == n ? s = a = null : a = t(s = n), c) : s
               }, c
            }

            function et() {
               return nt(G)
            }

            function rt() {
               return nt(J)
            }

            function it() {
               const t = nt(Q);
               return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t
            }
            const ot = l(3),
               st = {
                  draw(t, n) {
                     const e = .59436 * l(n + u(n / 28, .75)),
                        r = e / 2,
                        i = r * ot;
                     t.moveTo(0, e), t.lineTo(0, -e), t.moveTo(-i, -r), t.lineTo(i, r), t.moveTo(-i, r), t.lineTo(i, -r)
                  }
               },
               at = {
                  draw(t, n) {
                     const e = l(n / f);
                     t.moveTo(e, 0), t.arc(0, 0, e, 0, d)
                  }
               },
               ut = {
                  draw(t, n) {
                     const e = l(n / 5) / 2;
                     t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath()
                  }
               },
               ct = l(1 / 3),
               lt = 2 * ct,
               ht = {
                  draw(t, n) {
                     const e = l(n / lt),
                        r = e * ct;
                     t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath()
                  }
               },
               ft = {
                  draw(t, n) {
                     const e = .62625 * l(n);
                     t.moveTo(0, -e), t.lineTo(e, 0), t.lineTo(0, e), t.lineTo(-e, 0), t.closePath()
                  }
               },
               pt = {
                  draw(t, n) {
                     const e = .87559 * l(n - u(n / 7, 2));
                     t.moveTo(-e, 0), t.lineTo(e, 0), t.moveTo(0, e), t.lineTo(0, -e)
                  }
               },
               dt = {
                  draw(t, n) {
                     const e = l(n),
                        r = -e / 2;
                     t.rect(r, r, e, e)
                  }
               },
               yt = {
                  draw(t, n) {
                     const e = .4431 * l(n);
                     t.moveTo(e, e), t.lineTo(e, -e), t.lineTo(-e, -e), t.lineTo(-e, e), t.closePath()
                  }
               },
               mt = c(f / 10) / c(7 * f / 10),
               _t = c(d / 10) * mt,
               vt = -s(d / 10) * mt,
               gt = {
                  draw(t, n) {
                     const e = l(.8908130915292852 * n),
                        r = _t * e,
                        i = vt * e;
                     t.moveTo(0, -e), t.lineTo(r, i);
                     for (let n = 1; n < 5; ++n) {
                        const o = d * n / 5,
                           a = s(o),
                           u = c(o);
                        t.lineTo(u * e, -a * e), t.lineTo(a * r - u * i, u * r + a * i)
                     }
                     t.closePath()
                  }
               },
               xt = l(3),
               wt = {
                  draw(t, n) {
                     const e = -l(n / (3 * xt));
                     t.moveTo(0, 2 * e), t.lineTo(-xt * e, -e), t.lineTo(xt * e, -e), t.closePath()
                  }
               },
               bt = l(3),
               Mt = {
                  draw(t, n) {
                     const e = .6824 * l(n),
                        r = e / 2,
                        i = e * bt / 2;
                     t.moveTo(0, -e), t.lineTo(i, r), t.lineTo(-i, r), t.closePath()
                  }
               },
               Tt = -.5,
               Et = l(3) / 2,
               kt = 1 / l(12),
               Nt = 3 * (kt / 2 + 1),
               At = {
                  draw(t, n) {
                     const e = l(n / Nt),
                        r = e / 2,
                        i = e * kt,
                        o = r,
                        s = e * kt + e,
                        a = -o,
                        u = s;
                     t.moveTo(r, i), t.lineTo(o, s), t.lineTo(a, u), t.lineTo(Tt * r - Et * i, Et * r + Tt * i), t.lineTo(Tt * o - Et * s, Et * o + Tt * s), t.lineTo(Tt * a - Et * u, Et * a + Tt * u), t.lineTo(Tt * r + Et * i, Tt * i - Et * r), t.lineTo(Tt * o + Et * s, Tt * s - Et * o), t.lineTo(Tt * a + Et * u, Tt * u - Et * a), t.closePath()
                  }
               },
               St = {
                  draw(t, n) {
                     const e = .6189 * l(n - u(n / 6, 1.7));
                     t.moveTo(-e, -e), t.lineTo(e, e), t.moveTo(-e, e), t.lineTo(e, -e)
                  }
               },
               Pt = [at, ut, ht, dt, gt, wt, At],
               Ot = [at, pt, St, Mt, st, yt, ft];

            function Lt(t, n) {
               let e = null,
                  i = b(o);

               function o() {
                  let r;
                  if (e || (e = r = i()), t.apply(this, arguments).draw(e, +n.apply(this, arguments)), r) return e = null, r + "" || null
               }
               return t = "function" == typeof t ? t : r(t || at), n = "function" == typeof n ? n : r(void 0 === n ? 64 : +n), o.type = function (n) {
                  return arguments.length ? (t = "function" == typeof n ? n : r(n), o) : t
               }, o.size = function (t) {
                  return arguments.length ? (n = "function" == typeof t ? t : r(+t), o) : n
               }, o.context = function (t) {
                  return arguments.length ? (e = null == t ? null : t, o) : e
               }, o
            }

            function It() {}

            function Zt(t, n, e) {
               t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
            }

            function Ct(t) {
               this._context = t
            }

            function Dt(t) {
               return new Ct(t)
            }

            function Ht(t) {
               this._context = t
            }

            function $t(t) {
               return new Ht(t)
            }

            function jt(t) {
               this._context = t
            }

            function Ft(t) {
               return new jt(t)
            }

            function Yt(t, n) {
               this._basis = new Ct(t), this._beta = n
            }
            Ct.prototype = {
               areaStart: function () {
                  this._line = 0
               },
               areaEnd: function () {
                  this._line = NaN
               },
               lineStart: function () {
                  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
               },
               lineEnd: function () {
                  switch (this._point) {
                     case 3:
                        Zt(this, this._x1, this._y1);
                     case 2:
                        this._context.lineTo(this._x1, this._y1)
                  }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
               },
               point: function (t, n) {
                  switch (t = +t, n = +n, this._point) {
                     case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                     case 1:
                        this._point = 2;
                        break;
                     case 2:
                        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                     default:
                        Zt(this, t, n)
                  }
                  this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
               }
            }, Ht.prototype = {
               areaStart: It,
               areaEnd: It,
               lineStart: function () {
                  this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
               },
               lineEnd: function () {
                  switch (this._point) {
                     case 1:
                        this._context.moveTo(this._x2, this._y2), this._context.closePath();
                        break;
                     case 2:
                        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                        break;
                     case 3:
                        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
                  }
               },
               point: function (t, n) {
                  switch (t = +t, n = +n, this._point) {
                     case 0:
                        this._point = 1, this._x2 = t, this._y2 = n;
                        break;
                     case 1:
                        this._point = 2, this._x3 = t, this._y3 = n;
                        break;
                     case 2:
                        this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                        break;
                     default:
                        Zt(this, t, n)
                  }
                  this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
               }
            }, jt.prototype = {
               areaStart: function () {
                  this._line = 0
               },
               areaEnd: function () {
                  this._line = NaN
               },
               lineStart: function () {
                  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
               },
               lineEnd: function () {
                  (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
               },
               point: function (t, n) {
                  switch (t = +t, n = +n, this._point) {
                     case 0:
                        this._point = 1;
                        break;
                     case 1:
                        this._point = 2;
                        break;
                     case 2:
                        this._point = 3;
                        var e = (this._x0 + 4 * this._x1 + t) / 6,
                           r = (this._y0 + 4 * this._y1 + n) / 6;
                        this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
                        break;
                     case 3:
                        this._point = 4;
                     default:
                        Zt(this, t, n)
                  }
                  this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
               }
            }, Yt.prototype = {
               lineStart: function () {
                  this._x = [], this._y = [], this._basis.lineStart()
               },
               lineEnd: function () {
                  var t = this._x,
                     n = this._y,
                     e = t.length - 1;
                  if (e > 0)
                     for (var r, i = t[0], o = n[0], s = t[e] - i, a = n[e] - o, u = -1; ++u <= e;) r = u / e, this._basis.point(this._beta * t[u] + (1 - this._beta) * (i + r * s), this._beta * n[u] + (1 - this._beta) * (o + r * a));
                  this._x = this._y = null, this._basis.lineEnd()
               },
               point: function (t, n) {
                  this._x.push(+t), this._y.push(+n)
               }
            };
            const zt = function t(n) {
               function e(t) {
                  return 1 === n ? new Ct(t) : new Yt(t, n)
               }
               return e.beta = function (n) {
                  return t(+n)
               }, e
            }(.85);

            function Rt(t, n, e) {
               t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
            }

            function Ut(t, n) {
               this._context = t, this._k = (1 - n) / 6
            }
            Ut.prototype = {
               areaStart: function () {
                  this._line = 0
               },
               areaEnd: function () {
                  this._line = NaN
               },
               lineStart: function () {
                  this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
               },
               lineEnd: function () {
                  switch (this._point) {
                     case 2:
                        this._context.lineTo(this._x2, this._y2);
                        break;
                     case 3:
                        Rt(this, this._x1, this._y1)
                  }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
               },
               point: function (t, n) {
                  switch (t = +t, n = +n, this._point) {
                     case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                     case 1:
                        this._point = 2, this._x1 = t, this._y1 = n;
                        break;
                     case 2:
                        this._point = 3;
                     default:
                        Rt(this, t, n)
                  }
                  this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
               }
            };
            const qt = function t(n) {
               function e(t) {
                  return new Ut(t, n)
               }
               return e.tension = function (n) {
                  return t(+n)
               }, e
            }(0);

            function Xt(t, n) {
               this._context = t, this._k = (1 - n) / 6
            }
            Xt.prototype = {
               areaStart: It,
               areaEnd: It,
               lineStart: function () {
                  this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
               },
               lineEnd: function () {
                  switch (this._point) {
                     case 1:
                        this._context.moveTo(this._x3, this._y3), this._context.closePath();
                        break;
                     case 2:
                        this._context.lineTo(this._x3, this._y3), this._context.closePath();
                        break;
                     case 3:
                        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                  }
               },
               point: function (t, n) {
                  switch (t = +t, n = +n, this._point) {
                     case 0:
                        this._point = 1, this._x3 = t, this._y3 = n;
                        break;
                     case 1:
                        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                        break;
                     case 2:
                        this._point = 3, this._x5 = t, this._y5 = n;
                        break;
                     default:
                        Rt(this, t, n)
                  }
                  this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
               }
            };
            const Bt = function t(n) {
               function e(t) {
                  return new Xt(t, n)
               }
               return e.tension = function (n) {
                  return t(+n)
               }, e
            }(0);

            function Vt(t, n) {
               this._context = t, this._k = (1 - n) / 6
            }
            Vt.prototype = {
               areaStart: function () {
                  this._line = 0
               },
               areaEnd: function () {
                  this._line = NaN
               },
               lineStart: function () {
                  this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
               },
               lineEnd: function () {
                  (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
               },
               point: function (t, n) {
                  switch (t = +t, n = +n, this._point) {
                     case 0:
                        this._point = 1;
                        break;
                     case 1:
                        this._point = 2;
                        break;
                     case 2:
                        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                        break;
                     case 3:
                        this._point = 4;
                     default:
                        Rt(this, t, n)
                  }
                  this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
               }
            };
            const Wt = function t(n) {
               function e(t) {
                  return new Vt(t, n)
               }
               return e.tension = function (n) {
                  return t(+n)
               }, e
            }(0);

            function Gt(t, n, e) {
               var r = t._x1,
                  i = t._y1,
                  o = t._x2,
                  s = t._y2;
               if (t._l01_a > h) {
                  var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
                     u = 3 * t._l01_a * (t._l01_a + t._l12_a);
                  r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / u, i = (i * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / u
               }
               if (t._l23_a > h) {
                  var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
                     l = 3 * t._l23_a * (t._l23_a + t._l12_a);
                  o = (o * c + t._x1 * t._l23_2a - n * t._l12_2a) / l, s = (s * c + t._y1 * t._l23_2a - e * t._l12_2a) / l
               }
               t._context.bezierCurveTo(r, i, o, s, t._x2, t._y2)
            }

            function Jt(t, n) {
               this._context = t, this._alpha = n
            }
            Jt.prototype = {
               areaStart: function () {
                  this._line = 0
               },
               areaEnd: function () {
                  this._line = NaN
               },
               lineStart: function () {
                  this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
               },
               lineEnd: function () {
                  switch (this._point) {
                     case 2:
                        this._context.lineTo(this._x2, this._y2);
                        break;
                     case 3:
                        this.point(this._x2, this._y2)
                  }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
               },
               point: function (t, n) {
                  if (t = +t, n = +n, this._point) {
                     var e = this._x2 - t,
                        r = this._y2 - n;
                     this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                  }
                  switch (this._point) {
                     case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                     case 1:
                        this._point = 2;
                        break;
                     case 2:
                        this._point = 3;
                     default:
                        Gt(this, t, n)
                  }
                  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
               }
            };
            const Qt = function t(n) {
               function e(t) {
                  return n ? new Jt(t, n) : new Ut(t, 0)
               }
               return e.alpha = function (n) {
                  return t(+n)
               }, e
            }(.5);

            function Kt(t, n) {
               this._context = t, this._alpha = n
            }
            Kt.prototype = {
               areaStart: It,
               areaEnd: It,
               lineStart: function () {
                  this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
               },
               lineEnd: function () {
                  switch (this._point) {
                     case 1:
                        this._context.moveTo(this._x3, this._y3), this._context.closePath();
                        break;
                     case 2:
                        this._context.lineTo(this._x3, this._y3), this._context.closePath();
                        break;
                     case 3:
                        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                  }
               },
               point: function (t, n) {
                  if (t = +t, n = +n, this._point) {
                     var e = this._x2 - t,
                        r = this._y2 - n;
                     this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                  }
                  switch (this._point) {
                     case 0:
                        this._point = 1, this._x3 = t, this._y3 = n;
                        break;
                     case 1:
                        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                        break;
                     case 2:
                        this._point = 3, this._x5 = t, this._y5 = n;
                        break;
                     default:
                        Gt(this, t, n)
                  }
                  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
               }
            };
            const tn = function t(n) {
               function e(t) {
                  return n ? new Kt(t, n) : new Xt(t, 0)
               }
               return e.alpha = function (n) {
                  return t(+n)
               }, e
            }(.5);

            function nn(t, n) {
               this._context = t, this._alpha = n
            }
            nn.prototype = {
               areaStart: function () {
                  this._line = 0
               },
               areaEnd: function () {
                  this._line = NaN
               },
               lineStart: function () {
                  this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
               },
               lineEnd: function () {
                  (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
               },
               point: function (t, n) {
                  if (t = +t, n = +n, this._point) {
                     var e = this._x2 - t,
                        r = this._y2 - n;
                     this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                  }
                  switch (this._point) {
                     case 0:
                        this._point = 1;
                        break;
                     case 1:
                        this._point = 2;
                        break;
                     case 2:
                        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                        break;
                     case 3:
                        this._point = 4;
                     default:
                        Gt(this, t, n)
                  }
                  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
               }
            };
            const en = function t(n) {
               function e(t) {
                  return n ? new nn(t, n) : new Vt(t, 0)
               }
               return e.alpha = function (n) {
                  return t(+n)
               }, e
            }(.5);

            function rn(t) {
               this._context = t
            }

            function on(t) {
               return new rn(t)
            }

            function sn(t) {
               return t < 0 ? -1 : 1
            }

            function an(t, n, e) {
               var r = t._x1 - t._x0,
                  i = n - t._x1,
                  o = (t._y1 - t._y0) / (r || i < 0 && -0),
                  s = (e - t._y1) / (i || r < 0 && -0),
                  a = (o * i + s * r) / (r + i);
               return (sn(o) + sn(s)) * Math.min(Math.abs(o), Math.abs(s), .5 * Math.abs(a)) || 0
            }

            function un(t, n) {
               var e = t._x1 - t._x0;
               return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
            }

            function cn(t, n, e) {
               var r = t._x0,
                  i = t._y0,
                  o = t._x1,
                  s = t._y1,
                  a = (o - r) / 3;
               t._context.bezierCurveTo(r + a, i + a * n, o - a, s - a * e, o, s)
            }

            function ln(t) {
               this._context = t
            }

            function hn(t) {
               this._context = new fn(t)
            }

            function fn(t) {
               this._context = t
            }

            function pn(t) {
               return new ln(t)
            }

            function dn(t) {
               return new hn(t)
            }

            function yn(t) {
               this._context = t
            }

            function mn(t) {
               var n, e, r = t.length - 1,
                  i = new Array(r),
                  o = new Array(r),
                  s = new Array(r);
               for (i[0] = 0, o[0] = 2, s[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) i[n] = 1, o[n] = 4, s[n] = 4 * t[n] + 2 * t[n + 1];
               for (i[r - 1] = 2, o[r - 1] = 7, s[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) e = i[n] / o[n - 1], o[n] -= e, s[n] -= e * s[n - 1];
               for (i[r - 1] = s[r - 1] / o[r - 1], n = r - 2; n >= 0; --n) i[n] = (s[n] - i[n + 1]) / o[n];
               for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) o[n] = 2 * t[n + 1] - i[n + 1];
               return [i, o]
            }

            function _n(t) {
               return new yn(t)
            }

            function vn(t, n) {
               this._context = t, this._t = n
            }

            function gn(t) {
               return new vn(t, .5)
            }

            function xn(t) {
               return new vn(t, 0)
            }

            function wn(t) {
               return new vn(t, 1)
            }

            function bn(t, n) {
               if ((i = t.length) > 1)
                  for (var e, r, i, o = 1, s = t[n[0]], a = s.length; o < i; ++o)
                     for (r = s, s = t[n[o]], e = 0; e < a; ++e) s[e][1] += s[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1]
            }

            function Mn(t) {
               for (var n = t.length, e = new Array(n); --n >= 0;) e[n] = n;
               return e
            }

            function Tn(t, n) {
               return t[n]
            }

            function En(t) {
               const n = [];
               return n.key = t, n
            }

            function kn() {
               var t = r([]),
                  n = Mn,
                  e = bn,
                  i = Tn;

               function o(r) {
                  var o, s, a = Array.from(t.apply(this, arguments), En),
                     u = a.length,
                     c = -1;
                  for (const t of r)
                     for (o = 0, ++c; o < u; ++o)(a[o][c] = [0, +i(t, a[o].key, c, r)]).data = t;
                  for (o = 0, s = O(n(a)); o < u; ++o) a[s[o]].index = o;
                  return e(a, s), a
               }
               return o.keys = function (n) {
                  return arguments.length ? (t = "function" == typeof n ? n : r(Array.from(n)), o) : t
               }, o.value = function (t) {
                  return arguments.length ? (i = "function" == typeof t ? t : r(+t), o) : i
               }, o.order = function (t) {
                  return arguments.length ? (n = null == t ? Mn : "function" == typeof t ? t : r(Array.from(t)), o) : n
               }, o.offset = function (t) {
                  return arguments.length ? (e = null == t ? bn : t, o) : e
               }, o
            }

            function Nn(t, n) {
               if ((r = t.length) > 0) {
                  for (var e, r, i, o = 0, s = t[0].length; o < s; ++o) {
                     for (i = e = 0; e < r; ++e) i += t[e][o][1] || 0;
                     if (i)
                        for (e = 0; e < r; ++e) t[e][o][1] /= i
                  }
                  bn(t, n)
               }
            }

            function An(t, n) {
               if ((a = t.length) > 0)
                  for (var e, r, i, o, s, a, u = 0, c = t[n[0]].length; u < c; ++u)
                     for (o = s = 0, e = 0; e < a; ++e)(i = (r = t[n[e]][u])[1] - r[0]) > 0 ? (r[0] = o, r[1] = o += i) : i < 0 ? (r[1] = s, r[0] = s += i) : (r[0] = 0, r[1] = i)
            }

            function Sn(t, n) {
               if ((e = t.length) > 0) {
                  for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
                     for (var s = 0, a = 0; s < e; ++s) a += t[s][r][1] || 0;
                     i[r][1] += i[r][0] = -a / 2
                  }
                  bn(t, n)
               }
            }

            function Pn(t, n) {
               if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
                  for (var e, r, i, o = 0, s = 1; s < r; ++s) {
                     for (var a = 0, u = 0, c = 0; a < i; ++a) {
                        for (var l = t[n[a]], h = l[s][1] || 0, f = (h - (l[s - 1][1] || 0)) / 2, p = 0; p < a; ++p) {
                           var d = t[n[p]];
                           f += (d[s][1] || 0) - (d[s - 1][1] || 0)
                        }
                        u += h, c += f * h
                     }
                     e[s - 1][1] += e[s - 1][0] = o, u && (o -= c / u)
                  }
                  e[s - 1][1] += e[s - 1][0] = o, bn(t, n)
               }
            }

            function On(t) {
               var n = t.map(Ln);
               return Mn(t).sort((function (t, e) {
                  return n[t] - n[e]
               }))
            }

            function Ln(t) {
               for (var n, e = -1, r = 0, i = t.length, o = -1 / 0; ++e < i;)(n = +t[e][1]) > o && (o = n, r = e);
               return r
            }

            function In(t) {
               var n = t.map(Zn);
               return Mn(t).sort((function (t, e) {
                  return n[t] - n[e]
               }))
            }

            function Zn(t) {
               for (var n, e = 0, r = -1, i = t.length; ++r < i;)(n = +t[r][1]) && (e += n);
               return e
            }

            function Cn(t) {
               return In(t).reverse()
            }

            function Dn(t) {
               var n, e, r = t.length,
                  i = t.map(Zn),
                  o = On(t),
                  s = 0,
                  a = 0,
                  u = [],
                  c = [];
               for (n = 0; n < r; ++n) e = o[n], s < a ? (s += i[e], u.push(e)) : (a += i[e], c.push(e));
               return c.reverse().concat(u)
            }

            function Hn(t) {
               return Mn(t).reverse()
            }
            rn.prototype = {
               areaStart: It,
               areaEnd: It,
               lineStart: function () {
                  this._point = 0
               },
               lineEnd: function () {
                  this._point && this._context.closePath()
               },
               point: function (t, n) {
                  t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
               }
            }, ln.prototype = {
               areaStart: function () {
                  this._line = 0
               },
               areaEnd: function () {
                  this._line = NaN
               },
               lineStart: function () {
                  this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
               },
               lineEnd: function () {
                  switch (this._point) {
                     case 2:
                        this._context.lineTo(this._x1, this._y1);
                        break;
                     case 3:
                        cn(this, this._t0, un(this, this._t0))
                  }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
               },
               point: function (t, n) {
                  var e = NaN;
                  if (n = +n, (t = +t) !== this._x1 || n !== this._y1) {
                     switch (this._point) {
                        case 0:
                           this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                           break;
                        case 1:
                           this._point = 2;
                           break;
                        case 2:
                           this._point = 3, cn(this, un(this, e = an(this, t, n)), e);
                           break;
                        default:
                           cn(this, this._t0, e = an(this, t, n))
                     }
                     this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
                  }
               }
            }, (hn.prototype = Object.create(ln.prototype)).point = function (t, n) {
               ln.prototype.point.call(this, n, t)
            }, fn.prototype = {
               moveTo: function (t, n) {
                  this._context.moveTo(n, t)
               },
               closePath: function () {
                  this._context.closePath()
               },
               lineTo: function (t, n) {
                  this._context.lineTo(n, t)
               },
               bezierCurveTo: function (t, n, e, r, i, o) {
                  this._context.bezierCurveTo(n, t, r, e, o, i)
               }
            }, yn.prototype = {
               areaStart: function () {
                  this._line = 0
               },
               areaEnd: function () {
                  this._line = NaN
               },
               lineStart: function () {
                  this._x = [], this._y = []
               },
               lineEnd: function () {
                  var t = this._x,
                     n = this._y,
                     e = t.length;
                  if (e)
                     if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);
                     else
                        for (var r = mn(t), i = mn(n), o = 0, s = 1; s < e; ++o, ++s) this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[s], n[s]);
                  (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
               },
               point: function (t, n) {
                  this._x.push(+t), this._y.push(+n)
               }
            }, vn.prototype = {
               areaStart: function () {
                  this._line = 0
               },
               areaEnd: function () {
                  this._line = NaN
               },
               lineStart: function () {
                  this._x = this._y = NaN, this._point = 0
               },
               lineEnd: function () {
                  0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
               },
               point: function (t, n) {
                  switch (t = +t, n = +n, this._point) {
                     case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                     case 1:
                        this._point = 2;
                     default:
                        if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);
                        else {
                           var e = this._x * (1 - this._t) + t * this._t;
                           this._context.lineTo(e, this._y), this._context.lineTo(e, n)
                        }
                  }
                  this._x = t, this._y = n
               }
            }
         },
         9065: (t, n, e) => {
            "use strict";
            e.r(n), e.d(n, {
               ZoomTransform: () => At,
               zoom: () => jt,
               zoomIdentity: () => St,
               zoomTransform: () => Pt
            });
            var r = {
               value: () => {}
            };

            function i() {
               for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
                  if (!(t = arguments[n] + "") || t in r || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
                  r[t] = []
               }
               return new o(r)
            }

            function o(t) {
               this._ = t
            }

            function s(t, n) {
               for (var e, r = 0, i = t.length; r < i; ++r)
                  if ((e = t[r]).name === n) return e.value
            }

            function a(t, n, e) {
               for (var i = 0, o = t.length; i < o; ++i)
                  if (t[i].name === n) {
                     t[i] = r, t = t.slice(0, i).concat(t.slice(i + 1));
                     break
                  } return null != e && t.push({
                  name: n,
                  value: e
               }), t
            }
            o.prototype = i.prototype = {
               constructor: o,
               on: function (t, n) {
                  var e, r, i = this._,
                     o = (r = i, (t + "").trim().split(/^|\s+/).map((function (t) {
                        var n = "",
                           e = t.indexOf(".");
                        if (e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), t && !r.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                        return {
                           type: t,
                           name: n
                        }
                     }))),
                     u = -1,
                     c = o.length;
                  if (!(arguments.length < 2)) {
                     if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                     for (; ++u < c;)
                        if (e = (t = o[u]).type) i[e] = a(i[e], t.name, n);
                        else if (null == n)
                        for (e in i) i[e] = a(i[e], t.name, null);
                     return this
                  }
                  for (; ++u < c;)
                     if ((e = (t = o[u]).type) && (e = s(i[e], t.name))) return e
               },
               copy: function () {
                  var t = {},
                     n = this._;
                  for (var e in n) t[e] = n[e].slice();
                  return new o(t)
               },
               call: function (t, n) {
                  if ((e = arguments.length - 2) > 0)
                     for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2];
                  if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                  for (o = 0, e = (r = this._[t]).length; o < e; ++o) r[o].value.apply(n, i)
               },
               apply: function (t, n, e) {
                  if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                  for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e)
               }
            };
            const u = i;
            var c = e(3838);
            const l = {
               capture: !0,
               passive: !1
            };

            function h(t) {
               t.preventDefault(), t.stopImmediatePropagation()
            }
            var f, p, d = e(8167),
               y = e(3109),
               m = e(6740),
               _ = 0,
               v = 0,
               g = 0,
               x = 1e3,
               w = 0,
               b = 0,
               M = 0,
               T = "object" == typeof performance && performance.now ? performance : Date,
               E = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
                  setTimeout(t, 17)
               };

            function k() {
               return b || (E(N), b = T.now() + M)
            }

            function N() {
               b = 0
            }

            function A() {
               this._call = this._time = this._next = null
            }

            function S(t, n, e) {
               var r = new A;
               return r.restart(t, n, e), r
            }

            function P() {
               b = (w = T.now()) + M, _ = v = 0;
               try {
                  ! function () {
                     k(), ++_;
                     for (var t, n = f; n;)(t = b - n._time) >= 0 && n._call.call(void 0, t), n = n._next;
                     --_
                  }()
               } finally {
                  _ = 0,
                     function () {
                        for (var t, n, e = f, r = 1 / 0; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : f = n);
                        p = t, L(r)
                     }(), b = 0
               }
            }

            function O() {
               var t = T.now(),
                  n = t - w;
               n > x && (M -= n, w = t)
            }

            function L(t) {
               _ || (v && (v = clearTimeout(v)), t - b > 24 ? (t < 1 / 0 && (v = setTimeout(P, t - T.now() - M)), g && (g = clearInterval(g))) : (g || (w = T.now(), g = setInterval(O, x)), _ = 1, E(P)))
            }

            function I(t, n, e) {
               var r = new A;
               return n = null == n ? 0 : +n, r.restart((e => {
                  r.stop(), t(e + n)
               }), n, e), r
            }
            A.prototype = S.prototype = {
               constructor: A,
               restart: function (t, n, e) {
                  if ("function" != typeof t) throw new TypeError("callback is not a function");
                  e = (null == e ? k() : +e) + (null == n ? 0 : +n), this._next || p === this || (p ? p._next = this : f = this, p = this), this._call = t, this._time = e, L()
               },
               stop: function () {
                  this._call && (this._call = null, this._time = 1 / 0, L())
               }
            };
            var Z = u("start", "end", "cancel", "interrupt"),
               C = [],
               D = 0,
               H = 2,
               $ = 3,
               j = 5,
               F = 6;

            function Y(t, n, e, r, i, o) {
               var s = t.__transition;
               if (s) {
                  if (e in s) return
               } else t.__transition = {};
               ! function (t, n, e) {
                  var r, i = t.__transition;

                  function o(u) {
                     var c, l, h, f;
                     if (1 !== e.state) return a();
                     for (c in i)
                        if ((f = i[c]).name === e.name) {
                           if (f.state === $) return I(o);
                           4 === f.state ? (f.state = F, f.timer.stop(), f.on.call("interrupt", t, t.__data__, f.index, f.group), delete i[c]) : +c < n && (f.state = F, f.timer.stop(), f.on.call("cancel", t, t.__data__, f.index, f.group), delete i[c])
                        } if (I((function () {
                           e.state === $ && (e.state = 4, e.timer.restart(s, e.delay, e.time), s(u))
                        })), e.state = H, e.on.call("start", t, t.__data__, e.index, e.group), e.state === H) {
                        for (e.state = $, r = new Array(h = e.tween.length), c = 0, l = -1; c < h; ++c)(f = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (r[++l] = f);
                        r.length = l + 1
                     }
                  }

                  function s(n) {
                     for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(a), e.state = j, 1), o = -1, s = r.length; ++o < s;) r[o].call(t, i);
                     e.state === j && (e.on.call("end", t, t.__data__, e.index, e.group), a())
                  }

                  function a() {
                     for (var r in e.state = F, e.timer.stop(), delete i[n], i) return;
                     delete t.__transition
                  }
                  i[n] = e, e.timer = S((function (t) {
                     e.state = 1, e.timer.restart(o, e.delay, e.time), e.delay <= t && o(t - e.delay)
                  }), 0, e.time)
               }(t, e, {
                  name: n,
                  index: r,
                  group: i,
                  on: Z,
                  tween: C,
                  time: o.time,
                  delay: o.delay,
                  duration: o.duration,
                  ease: o.ease,
                  timer: null,
                  state: D
               })
            }

            function z(t, n) {
               var e = U(t, n);
               if (e.state > D) throw new Error("too late; already scheduled");
               return e
            }

            function R(t, n) {
               var e = U(t, n);
               if (e.state > $) throw new Error("too late; already running");
               return e
            }

            function U(t, n) {
               var e = t.__transition;
               if (!e || !(e = e[n])) throw new Error("transition not found");
               return e
            }

            function q(t, n) {
               var e, r, i, o = t.__transition,
                  s = !0;
               if (o) {
                  for (i in n = null == n ? null : n + "", o)(e = o[i]).name === n ? (r = e.state > H && e.state < j, e.state = F, e.timer.stop(), e.on.call(r ? "interrupt" : "cancel", t, t.__data__, e.index, e.group), delete o[i]) : s = !1;
                  s && delete t.__transition
               }
            }
            var X = e(6556),
               B = e(1663);

            function V(t, n) {
               var e, r;
               return function () {
                  var i = R(this, t),
                     o = i.tween;
                  if (o !== e)
                     for (var s = 0, a = (r = e = o).length; s < a; ++s)
                        if (r[s].name === n) {
                           (r = r.slice()).splice(s, 1);
                           break
                        } i.tween = r
               }
            }

            function W(t, n, e) {
               var r, i;
               if ("function" != typeof e) throw new Error;
               return function () {
                  var o = R(this, t),
                     s = o.tween;
                  if (s !== r) {
                     i = (r = s).slice();
                     for (var a = {
                           name: n,
                           value: e
                        }, u = 0, c = i.length; u < c; ++u)
                        if (i[u].name === n) {
                           i[u] = a;
                           break
                        } u === c && i.push(a)
                  }
                  o.tween = i
               }
            }

            function G(t, n, e) {
               var r = t._id;
               return t.each((function () {
                     var t = R(this, r);
                     (t.value || (t.value = {}))[n] = e.apply(this, arguments)
                  })),
                  function (t) {
                     return U(t, r).value[n]
                  }
            }
            var J = e(4447),
               Q = e(8063),
               K = e(6354),
               tt = e(6773);

            function nt(t, n) {
               var e;
               return ("number" == typeof n ? Q.Z : n instanceof J.ZP ? K.ZP : (e = (0, J.ZP)(n)) ? (n = e, K.ZP) : tt.Z)(t, n)
            }

            function et(t) {
               return function () {
                  this.removeAttribute(t)
               }
            }

            function rt(t) {
               return function () {
                  this.removeAttributeNS(t.space, t.local)
               }
            }

            function it(t, n, e) {
               var r, i, o = e + "";
               return function () {
                  var s = this.getAttribute(t);
                  return s === o ? null : s === r ? i : i = n(r = s, e)
               }
            }

            function ot(t, n, e) {
               var r, i, o = e + "";
               return function () {
                  var s = this.getAttributeNS(t.space, t.local);
                  return s === o ? null : s === r ? i : i = n(r = s, e)
               }
            }

            function st(t, n, e) {
               var r, i, o;
               return function () {
                  var s, a, u = e(this);
                  if (null != u) return (s = this.getAttribute(t)) === (a = u + "") ? null : s === r && a === i ? o : (i = a, o = n(r = s, u));
                  this.removeAttribute(t)
               }
            }

            function at(t, n, e) {
               var r, i, o;
               return function () {
                  var s, a, u = e(this);
                  if (null != u) return (s = this.getAttributeNS(t.space, t.local)) === (a = u + "") ? null : s === r && a === i ? o : (i = a, o = n(r = s, u));
                  this.removeAttributeNS(t.space, t.local)
               }
            }

            function ut(t, n) {
               var e, r;

               function i() {
                  var i = n.apply(this, arguments);
                  return i !== r && (e = (r = i) && function (t, n) {
                     return function (e) {
                        this.setAttributeNS(t.space, t.local, n.call(this, e))
                     }
                  }(t, i)), e
               }
               return i._value = n, i
            }

            function ct(t, n) {
               var e, r;

               function i() {
                  var i = n.apply(this, arguments);
                  return i !== r && (e = (r = i) && function (t, n) {
                     return function (e) {
                        this.setAttribute(t, n.call(this, e))
                     }
                  }(t, i)), e
               }
               return i._value = n, i
            }

            function lt(t, n) {
               return function () {
                  z(this, t).delay = +n.apply(this, arguments)
               }
            }

            function ht(t, n) {
               return n = +n,
                  function () {
                     z(this, t).delay = n
                  }
            }

            function ft(t, n) {
               return function () {
                  R(this, t).duration = +n.apply(this, arguments)
               }
            }

            function pt(t, n) {
               return n = +n,
                  function () {
                     R(this, t).duration = n
                  }
            }
            var dt = e(4421),
               yt = e(3010),
               mt = e(9701),
               _t = m.ZP.prototype.constructor,
               vt = e(2627);

            function gt(t) {
               return function () {
                  this.style.removeProperty(t)
               }
            }
            var xt = 0;

            function wt(t, n, e, r) {
               this._groups = t, this._parents = n, this._name = e, this._id = r
            }

            function bt() {
               return ++xt
            }
            var Mt = m.ZP.prototype;
            wt.prototype = function (t) {
               return (0, m.ZP)().transition(t)
            }.prototype = {
               constructor: wt,
               select: function (t) {
                  var n = this._name,
                     e = this._id;
                  "function" != typeof t && (t = (0, yt.Z)(t));
                  for (var r = this._groups, i = r.length, o = new Array(i), s = 0; s < i; ++s)
                     for (var a, u, c = r[s], l = c.length, h = o[s] = new Array(l), f = 0; f < l; ++f)(a = c[f]) && (u = t.call(a, a.__data__, f, c)) && ("__data__" in a && (u.__data__ = a.__data__), h[f] = u, Y(h[f], n, e, f, h, U(a, e)));
                  return new wt(o, this._parents, n, e)
               },
               selectAll: function (t) {
                  var n = this._name,
                     e = this._id;
                  "function" != typeof t && (t = (0, mt.Z)(t));
                  for (var r = this._groups, i = r.length, o = [], s = [], a = 0; a < i; ++a)
                     for (var u, c = r[a], l = c.length, h = 0; h < l; ++h)
                        if (u = c[h]) {
                           for (var f, p = t.call(u, u.__data__, h, c), d = U(u, e), y = 0, m = p.length; y < m; ++y)(f = p[y]) && Y(f, n, e, y, p, d);
                           o.push(p), s.push(u)
                        } return new wt(o, s, n, e)
               },
               selectChild: Mt.selectChild,
               selectChildren: Mt.selectChildren,
               filter: function (t) {
                  "function" != typeof t && (t = (0, dt.Z)(t));
                  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                     for (var o, s = n[i], a = s.length, u = r[i] = [], c = 0; c < a; ++c)(o = s[c]) && t.call(o, o.__data__, c, s) && u.push(o);
                  return new wt(r, this._parents, this._name, this._id)
               },
               merge: function (t) {
                  if (t._id !== this._id) throw new Error;
                  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), s = new Array(r), a = 0; a < o; ++a)
                     for (var u, c = n[a], l = e[a], h = c.length, f = s[a] = new Array(h), p = 0; p < h; ++p)(u = c[p] || l[p]) && (f[p] = u);
                  for (; a < r; ++a) s[a] = n[a];
                  return new wt(s, this._parents, this._name, this._id)
               },
               selection: function () {
                  return new _t(this._groups, this._parents)
               },
               transition: function () {
                  for (var t = this._name, n = this._id, e = bt(), r = this._groups, i = r.length, o = 0; o < i; ++o)
                     for (var s, a = r[o], u = a.length, c = 0; c < u; ++c)
                        if (s = a[c]) {
                           var l = U(s, n);
                           Y(s, t, e, c, a, {
                              time: l.time + l.delay + l.duration,
                              delay: 0,
                              duration: l.duration,
                              ease: l.ease
                           })
                        } return new wt(r, this._parents, t, e)
               },
               call: Mt.call,
               nodes: Mt.nodes,
               node: Mt.node,
               size: Mt.size,
               empty: Mt.empty,
               each: Mt.each,
               on: function (t, n) {
                  var e = this._id;
                  return arguments.length < 2 ? U(this.node(), e).on.on(t) : this.each(function (t, n, e) {
                     var r, i, o = function (t) {
                        return (t + "").trim().split(/^|\s+/).every((function (t) {
                           var n = t.indexOf(".");
                           return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
                        }))
                     }(n) ? z : R;
                     return function () {
                        var s = o(this, t),
                           a = s.on;
                        a !== r && (i = (r = a).copy()).on(n, e), s.on = i
                     }
                  }(e, t, n))
               },
               attr: function (t, n) {
                  var e = (0, B.Z)(t),
                     r = "transform" === e ? X.w : nt;
                  return this.attrTween(t, "function" == typeof n ? (e.local ? at : st)(e, r, G(this, "attr." + t, n)) : null == n ? (e.local ? rt : et)(e) : (e.local ? ot : it)(e, r, n))
               },
               attrTween: function (t, n) {
                  var e = "attr." + t;
                  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
                  if (null == n) return this.tween(e, null);
                  if ("function" != typeof n) throw new Error;
                  var r = (0, B.Z)(t);
                  return this.tween(e, (r.local ? ut : ct)(r, n))
               },
               style: function (t, n, e) {
                  var r = "transform" == (t += "") ? X.Y : nt;
                  return null == n ? this.styleTween(t, function (t, n) {
                     var e, r, i;
                     return function () {
                        var o = (0, vt.S)(this, t),
                           s = (this.style.removeProperty(t), (0, vt.S)(this, t));
                        return o === s ? null : o === e && s === r ? i : i = n(e = o, r = s)
                     }
                  }(t, r)).on("end.style." + t, gt(t)) : "function" == typeof n ? this.styleTween(t, function (t, n, e) {
                     var r, i, o;
                     return function () {
                        var s = (0, vt.S)(this, t),
                           a = e(this),
                           u = a + "";
                        return null == a && (this.style.removeProperty(t), u = a = (0, vt.S)(this, t)), s === u ? null : s === r && u === i ? o : (i = u, o = n(r = s, a))
                     }
                  }(t, r, G(this, "style." + t, n))).each(function (t, n) {
                     var e, r, i, o, s = "style." + n,
                        a = "end." + s;
                     return function () {
                        var u = R(this, t),
                           c = u.on,
                           l = null == u.value[s] ? o || (o = gt(n)) : void 0;
                        c === e && i === l || (r = (e = c).copy()).on(a, i = l), u.on = r
                     }
                  }(this._id, t)) : this.styleTween(t, function (t, n, e) {
                     var r, i, o = e + "";
                     return function () {
                        var s = (0, vt.S)(this, t);
                        return s === o ? null : s === r ? i : i = n(r = s, e)
                     }
                  }(t, r, n), e).on("end.style." + t, null)
               },
               styleTween: function (t, n, e) {
                  var r = "style." + (t += "");
                  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
                  if (null == n) return this.tween(r, null);
                  if ("function" != typeof n) throw new Error;
                  return this.tween(r, function (t, n, e) {
                     var r, i;

                     function o() {
                        var o = n.apply(this, arguments);
                        return o !== i && (r = (i = o) && function (t, n, e) {
                           return function (r) {
                              this.style.setProperty(t, n.call(this, r), e)
                           }
                        }(t, o, e)), r
                     }
                     return o._value = n, o
                  }(t, n, null == e ? "" : e))
               },
               text: function (t) {
                  return this.tween("text", "function" == typeof t ? function (t) {
                     return function () {
                        var n = t(this);
                        this.textContent = null == n ? "" : n
                     }
                  }(G(this, "text", t)) : function (t) {
                     return function () {
                        this.textContent = t
                     }
                  }(null == t ? "" : t + ""))
               },
               textTween: function (t) {
                  var n = "text";
                  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
                  if (null == t) return this.tween(n, null);
                  if ("function" != typeof t) throw new Error;
                  return this.tween(n, function (t) {
                     var n, e;

                     function r() {
                        var r = t.apply(this, arguments);
                        return r !== e && (n = (e = r) && function (t) {
                           return function (n) {
                              this.textContent = t.call(this, n)
                           }
                        }(r)), n
                     }
                     return r._value = t, r
                  }(t))
               },
               remove: function () {
                  return this.on("end.remove", function (t) {
                     return function () {
                        var n = this.parentNode;
                        for (var e in this.__transition)
                           if (+e !== t) return;
                        n && n.removeChild(this)
                     }
                  }(this._id))
               },
               tween: function (t, n) {
                  var e = this._id;
                  if (t += "", arguments.length < 2) {
                     for (var r, i = U(this.node(), e).tween, o = 0, s = i.length; o < s; ++o)
                        if ((r = i[o]).name === t) return r.value;
                     return null
                  }
                  return this.each((null == n ? V : W)(e, t, n))
               },
               delay: function (t) {
                  var n = this._id;
                  return arguments.length ? this.each(("function" == typeof t ? lt : ht)(n, t)) : U(this.node(), n).delay
               },
               duration: function (t) {
                  var n = this._id;
                  return arguments.length ? this.each(("function" == typeof t ? ft : pt)(n, t)) : U(this.node(), n).duration
               },
               ease: function (t) {
                  var n = this._id;
                  return arguments.length ? this.each(function (t, n) {
                     if ("function" != typeof n) throw new Error;
                     return function () {
                        R(this, t).ease = n
                     }
                  }(n, t)) : U(this.node(), n).ease
               },
               easeVarying: function (t) {
                  if ("function" != typeof t) throw new Error;
                  return this.each(function (t, n) {
                     return function () {
                        var e = n.apply(this, arguments);
                        if ("function" != typeof e) throw new Error;
                        R(this, t).ease = e
                     }
                  }(this._id, t))
               },
               end: function () {
                  var t, n, e = this,
                     r = e._id,
                     i = e.size();
                  return new Promise((function (o, s) {
                     var a = {
                           value: s
                        },
                        u = {
                           value: function () {
                              0 == --i && o()
                           }
                        };
                     e.each((function () {
                        var e = R(this, r),
                           i = e.on;
                        i !== t && ((n = (t = i).copy())._.cancel.push(a), n._.interrupt.push(a), n._.end.push(u)), e.on = n
                     })), 0 === i && o()
                  }))
               },
               [Symbol.iterator]: Mt[Symbol.iterator]
            };
            var Tt = {
               time: null,
               delay: 0,
               duration: 250,
               ease: function (t) {
                  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
               }
            };

            function Et(t, n) {
               for (var e; !(e = t.__transition) || !(e = e[n]);)
                  if (!(t = t.parentNode)) throw new Error(`transition ${n} not found`);
               return e
            }
            m.ZP.prototype.interrupt = function (t) {
               return this.each((function () {
                  q(this, t)
               }))
            }, m.ZP.prototype.transition = function (t) {
               var n, e;
               t instanceof wt ? (n = t._id, t = t._name) : (n = bt(), (e = Tt).time = k(), t = null == t ? null : t + "");
               for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
                  for (var s, a = r[o], u = a.length, c = 0; c < u; ++c)(s = a[c]) && Y(s, t, n, c, a, e || Et(s, n));
               return new wt(r, this._parents, t, n)
            };
            const kt = t => () => t;

            function Nt(t, {
               sourceEvent: n,
               target: e,
               transform: r,
               dispatch: i
            }) {
               Object.defineProperties(this, {
                  type: {
                     value: t,
                     enumerable: !0,
                     configurable: !0
                  },
                  sourceEvent: {
                     value: n,
                     enumerable: !0,
                     configurable: !0
                  },
                  target: {
                     value: e,
                     enumerable: !0,
                     configurable: !0
                  },
                  transform: {
                     value: r,
                     enumerable: !0,
                     configurable: !0
                  },
                  _: {
                     value: i
                  }
               })
            }

            function At(t, n, e) {
               this.k = t, this.x = n, this.y = e
            }
            At.prototype = {
               constructor: At,
               scale: function (t) {
                  return 1 === t ? this : new At(this.k * t, this.x, this.y)
               },
               translate: function (t, n) {
                  return 0 === t & 0 === n ? this : new At(this.k, this.x + this.k * t, this.y + this.k * n)
               },
               apply: function (t) {
                  return [t[0] * this.k + this.x, t[1] * this.k + this.y]
               },
               applyX: function (t) {
                  return t * this.k + this.x
               },
               applyY: function (t) {
                  return t * this.k + this.y
               },
               invert: function (t) {
                  return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
               },
               invertX: function (t) {
                  return (t - this.x) / this.k
               },
               invertY: function (t) {
                  return (t - this.y) / this.k
               },
               rescaleX: function (t) {
                  return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
               },
               rescaleY: function (t) {
                  return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
               },
               toString: function () {
                  return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
               }
            };
            var St = new At(1, 0, 0);

            function Pt(t) {
               for (; !t.__zoom;)
                  if (!(t = t.parentNode)) return St;
               return t.__zoom
            }

            function Ot(t) {
               t.stopImmediatePropagation()
            }

            function Lt(t) {
               t.preventDefault(), t.stopImmediatePropagation()
            }

            function It(t) {
               return !(t.ctrlKey && "wheel" !== t.type || t.button)
            }

            function Zt() {
               var t = this;
               return t instanceof SVGElement ? (t = t.ownerSVGElement || t).hasAttribute("viewBox") ? [
                  [(t = t.viewBox.baseVal).x, t.y],
                  [t.x + t.width, t.y + t.height]
               ] : [
                  [0, 0],
                  [t.width.baseVal.value, t.height.baseVal.value]
               ] : [
                  [0, 0],
                  [t.clientWidth, t.clientHeight]
               ]
            }

            function Ct() {
               return this.__zoom || St
            }

            function Dt(t) {
               return -t.deltaY * (1 === t.deltaMode ? .05 : t.deltaMode ? 1 : .002) * (t.ctrlKey ? 10 : 1)
            }

            function Ht() {
               return navigator.maxTouchPoints || "ontouchstart" in this
            }

            function $t(t, n, e) {
               var r = t.invertX(n[0][0]) - e[0][0],
                  i = t.invertX(n[1][0]) - e[1][0],
                  o = t.invertY(n[0][1]) - e[0][1],
                  s = t.invertY(n[1][1]) - e[1][1];
               return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s))
            }

            function jt() {
               var t, n, e, r = It,
                  i = Zt,
                  o = $t,
                  s = Dt,
                  a = Ht,
                  f = [0, 1 / 0],
                  p = [
                     [-1 / 0, -1 / 0],
                     [1 / 0, 1 / 0]
                  ],
                  m = 250,
                  _ = d.Z,
                  v = u("start", "zoom", "end"),
                  g = 500,
                  x = 150,
                  w = 0,
                  b = 10;

               function M(t) {
                  t.property("__zoom", Ct).on("wheel.zoom", P, {
                     passive: !1
                  }).on("mousedown.zoom", O).on("dblclick.zoom", L).filter(a).on("touchstart.zoom", I).on("touchmove.zoom", Z).on("touchend.zoom touchcancel.zoom", C).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
               }

               function T(t, n) {
                  return (n = Math.max(f[0], Math.min(f[1], n))) === t.k ? t : new At(n, t.x, t.y)
               }

               function E(t, n, e) {
                  var r = n[0] - e[0] * t.k,
                     i = n[1] - e[1] * t.k;
                  return r === t.x && i === t.y ? t : new At(t.k, r, i)
               }

               function k(t) {
                  return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
               }

               function N(t, n, e, r) {
                  t.on("start.zoom", (function () {
                     A(this, arguments).event(r).start()
                  })).on("interrupt.zoom end.zoom", (function () {
                     A(this, arguments).event(r).end()
                  })).tween("zoom", (function () {
                     var t = this,
                        o = arguments,
                        s = A(t, o).event(r),
                        a = i.apply(t, o),
                        u = null == e ? k(a) : "function" == typeof e ? e.apply(t, o) : e,
                        c = Math.max(a[1][0] - a[0][0], a[1][1] - a[0][1]),
                        l = t.__zoom,
                        h = "function" == typeof n ? n.apply(t, o) : n,
                        f = _(l.invert(u).concat(c / l.k), h.invert(u).concat(c / h.k));
                     return function (t) {
                        if (1 === t) t = h;
                        else {
                           var n = f(t),
                              e = c / n[2];
                           t = new At(e, u[0] - n[0] * e, u[1] - n[1] * e)
                        }
                        s.zoom(null, t)
                     }
                  }))
               }

               function A(t, n, e) {
                  return !e && t.__zooming || new S(t, n)
               }

               function S(t, n) {
                  this.that = t, this.args = n, this.active = 0, this.sourceEvent = null, this.extent = i.apply(t, n), this.taps = 0
               }

               function P(t, ...n) {
                  if (r.apply(this, arguments)) {
                     var e = A(this, n).event(t),
                        i = this.__zoom,
                        a = Math.max(f[0], Math.min(f[1], i.k * Math.pow(2, s.apply(this, arguments)))),
                        u = (0, y.Z)(t);
                     if (e.wheel) e.mouse[0][0] === u[0] && e.mouse[0][1] === u[1] || (e.mouse[1] = i.invert(e.mouse[0] = u)), clearTimeout(e.wheel);
                     else {
                        if (i.k === a) return;
                        e.mouse = [u, i.invert(u)], q(this), e.start()
                     }
                     Lt(t), e.wheel = setTimeout((function () {
                        e.wheel = null, e.end()
                     }), x), e.zoom("mouse", o(E(T(i, a), e.mouse[0], e.mouse[1]), e.extent, p))
                  }
               }

               function O(t, ...n) {
                  if (!e && r.apply(this, arguments)) {
                     var i = t.currentTarget,
                        s = A(this, n, !0).event(t),
                        a = (0, c.Z)(t.view).on("mousemove.zoom", (function (t) {
                           if (Lt(t), !s.moved) {
                              var n = t.clientX - f,
                                 e = t.clientY - d;
                              s.moved = n * n + e * e > w
                           }
                           s.event(t).zoom("mouse", o(E(s.that.__zoom, s.mouse[0] = (0, y.Z)(t, i), s.mouse[1]), s.extent, p))
                        }), !0).on("mouseup.zoom", (function (t) {
                           a.on("mousemove.zoom mouseup.zoom", null),
                              function (t, n) {
                                 var e = t.document.documentElement,
                                    r = (0, c.Z)(t).on("dragstart.drag", null);
                                 n && (r.on("click.drag", h, l), setTimeout((function () {
                                    r.on("click.drag", null)
                                 }), 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
                              }(t.view, s.moved), Lt(t), s.event(t).end()
                        }), !0),
                        u = (0, y.Z)(t, i),
                        f = t.clientX,
                        d = t.clientY;
                     ! function (t) {
                        var n = t.document.documentElement,
                           e = (0, c.Z)(t).on("dragstart.drag", h, l);
                        "onselectstart" in n ? e.on("selectstart.drag", h, l) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
                     }(t.view), Ot(t), s.mouse = [u, this.__zoom.invert(u)], q(this), s.start()
                  }
               }

               function L(t, ...n) {
                  if (r.apply(this, arguments)) {
                     var e = this.__zoom,
                        s = (0, y.Z)(t.changedTouches ? t.changedTouches[0] : t, this),
                        a = e.invert(s),
                        u = e.k * (t.shiftKey ? .5 : 2),
                        l = o(E(T(e, u), s, a), i.apply(this, n), p);
                     Lt(t), m > 0 ? (0, c.Z)(this).transition().duration(m).call(N, l, s, t) : (0, c.Z)(this).call(M.transform, l, s, t)
                  }
               }

               function I(e, ...i) {
                  if (r.apply(this, arguments)) {
                     var o, s, a, u, c = e.touches,
                        l = c.length,
                        h = A(this, i, e.changedTouches.length === l).event(e);
                     for (Ot(e), s = 0; s < l; ++s) a = c[s], u = [u = (0, y.Z)(a, this), this.__zoom.invert(u), a.identifier], h.touch0 ? h.touch1 || h.touch0[2] === u[2] || (h.touch1 = u, h.taps = 0) : (h.touch0 = u, o = !0, h.taps = 1 + !!t);
                     t && (t = clearTimeout(t)), o && (h.taps < 2 && (n = u[0], t = setTimeout((function () {
                        t = null
                     }), g)), q(this), h.start())
                  }
               }

               function Z(t, ...n) {
                  if (this.__zooming) {
                     var e, r, i, s, a = A(this, n).event(t),
                        u = t.changedTouches,
                        c = u.length;
                     for (Lt(t), e = 0; e < c; ++e) r = u[e], i = (0, y.Z)(r, this), a.touch0 && a.touch0[2] === r.identifier ? a.touch0[0] = i : a.touch1 && a.touch1[2] === r.identifier && (a.touch1[0] = i);
                     if (r = a.that.__zoom, a.touch1) {
                        var l = a.touch0[0],
                           h = a.touch0[1],
                           f = a.touch1[0],
                           d = a.touch1[1],
                           m = (m = f[0] - l[0]) * m + (m = f[1] - l[1]) * m,
                           _ = (_ = d[0] - h[0]) * _ + (_ = d[1] - h[1]) * _;
                        r = T(r, Math.sqrt(m / _)), i = [(l[0] + f[0]) / 2, (l[1] + f[1]) / 2], s = [(h[0] + d[0]) / 2, (h[1] + d[1]) / 2]
                     } else {
                        if (!a.touch0) return;
                        i = a.touch0[0], s = a.touch0[1]
                     }
                     a.zoom("touch", o(E(r, i, s), a.extent, p))
                  }
               }

               function C(t, ...r) {
                  if (this.__zooming) {
                     var i, o, s = A(this, r).event(t),
                        a = t.changedTouches,
                        u = a.length;
                     for (Ot(t), e && clearTimeout(e), e = setTimeout((function () {
                           e = null
                        }), g), i = 0; i < u; ++i) o = a[i], s.touch0 && s.touch0[2] === o.identifier ? delete s.touch0 : s.touch1 && s.touch1[2] === o.identifier && delete s.touch1;
                     if (s.touch1 && !s.touch0 && (s.touch0 = s.touch1, delete s.touch1), s.touch0) s.touch0[1] = this.__zoom.invert(s.touch0[0]);
                     else if (s.end(), 2 === s.taps && (o = (0, y.Z)(o, this), Math.hypot(n[0] - o[0], n[1] - o[1]) < b)) {
                        var l = (0, c.Z)(this).on("dblclick.zoom");
                        l && l.apply(this, arguments)
                     }
                  }
               }
               return M.transform = function (t, n, e, r) {
                  var i = t.selection ? t.selection() : t;
                  i.property("__zoom", Ct), t !== i ? N(t, n, e, r) : i.interrupt().each((function () {
                     A(this, arguments).event(r).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
                  }))
               }, M.scaleBy = function (t, n, e, r) {
                  M.scaleTo(t, (function () {
                     return this.__zoom.k * ("function" == typeof n ? n.apply(this, arguments) : n)
                  }), e, r)
               }, M.scaleTo = function (t, n, e, r) {
                  M.transform(t, (function () {
                     var t = i.apply(this, arguments),
                        r = this.__zoom,
                        s = null == e ? k(t) : "function" == typeof e ? e.apply(this, arguments) : e,
                        a = r.invert(s),
                        u = "function" == typeof n ? n.apply(this, arguments) : n;
                     return o(E(T(r, u), s, a), t, p)
                  }), e, r)
               }, M.translateBy = function (t, n, e, r) {
                  M.transform(t, (function () {
                     return o(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), i.apply(this, arguments), p)
                  }), null, r)
               }, M.translateTo = function (t, n, e, r, s) {
                  M.transform(t, (function () {
                     var t = i.apply(this, arguments),
                        s = this.__zoom,
                        a = null == r ? k(t) : "function" == typeof r ? r.apply(this, arguments) : r;
                     return o(St.translate(a[0], a[1]).scale(s.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, p)
                  }), r, s)
               }, S.prototype = {
                  event: function (t) {
                     return t && (this.sourceEvent = t), this
                  },
                  start: function () {
                     return 1 == ++this.active && (this.that.__zooming = this, this.emit("start")), this
                  },
                  zoom: function (t, n) {
                     return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this
                  },
                  end: function () {
                     return 0 == --this.active && (delete this.that.__zooming, this.emit("end")), this
                  },
                  emit: function (t) {
                     var n = (0, c.Z)(this.that).datum();
                     v.call(t, this.that, new Nt(t, {
                        sourceEvent: this.sourceEvent,
                        target: M,
                        type: t,
                        transform: this.that.__zoom,
                        dispatch: v
                     }), n)
                  }
               }, M.wheelDelta = function (t) {
                  return arguments.length ? (s = "function" == typeof t ? t : kt(+t), M) : s
               }, M.filter = function (t) {
                  return arguments.length ? (r = "function" == typeof t ? t : kt(!!t), M) : r
               }, M.touchable = function (t) {
                  return arguments.length ? (a = "function" == typeof t ? t : kt(!!t), M) : a
               }, M.extent = function (t) {
                  return arguments.length ? (i = "function" == typeof t ? t : kt([
                     [+t[0][0], +t[0][1]],
                     [+t[1][0], +t[1][1]]
                  ]), M) : i
               }, M.scaleExtent = function (t) {
                  return arguments.length ? (f[0] = +t[0], f[1] = +t[1], M) : [f[0], f[1]]
               }, M.translateExtent = function (t) {
                  return arguments.length ? (p[0][0] = +t[0][0], p[1][0] = +t[1][0], p[0][1] = +t[0][1], p[1][1] = +t[1][1], M) : [
                     [p[0][0], p[0][1]],
                     [p[1][0], p[1][1]]
                  ]
               }, M.constrain = function (t) {
                  return arguments.length ? (o = t, M) : o
               }, M.duration = function (t) {
                  return arguments.length ? (m = +t, M) : m
               }, M.interpolate = function (t) {
                  return arguments.length ? (_ = t, M) : _
               }, M.on = function () {
                  var t = v.on.apply(v, arguments);
                  return t === v ? M : t
               }, M.clickDistance = function (t) {
                  return arguments.length ? (w = (t = +t) * t, M) : Math.sqrt(w)
               }, M.tapDistance = function (t) {
                  return arguments.length ? (b = +t, M) : b
               }, M
            }
            Pt.prototype = At.prototype
         }
      },
      n = {};

   function e(r) {
      var i = n[r];
      if (void 0 !== i) return i.exports;
      var o = n[r] = {
         exports: {}
      };
      return t[r].call(o.exports, o, o.exports, e), o.exports
   }
   e.n = t => {
      var n = t && t.__esModule ? () => t.default : () => t;
      return e.d(n, {
         a: n
      }), n
   }, e.d = (t, n) => {
      for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {
         enumerable: !0,
         get: n[r]
      })
   }, e.g = function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
         return this || new Function("return this")()
      } catch (t) {
         if ("object" == typeof window) return window
      }
   }(), e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n), e.r = t => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
         value: "Module"
      }), Object.defineProperty(t, "__esModule", {
         value: !0
      })
   };
   var r = e(3607);
   return r.default
})()));
//# sourceMappingURL=function-plot.js.map