(() => {
  // ns-hugo:/home/runner/work/evcc.io/evcc.io/assets/js/vendor/countUp.js
  var __assign = function() {
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  var CountUp = (
    /** @class */
    function() {
      function CountUp2(target, endVal, options) {
        var _this = this;
        this.endVal = endVal;
        this.options = options;
        this.version = "2.3.2";
        this.defaults = {
          startVal: 0,
          decimalPlaces: 0,
          duration: 2,
          useEasing: true,
          useGrouping: true,
          smartEasingThreshold: 999,
          smartEasingAmount: 333,
          separator: ",",
          decimal: ".",
          prefix: "",
          suffix: "",
          enableScrollSpy: false,
          scrollSpyDelay: 200,
          scrollSpyOnce: false
        };
        this.finalEndVal = null;
        this.useEasing = true;
        this.countDown = false;
        this.error = "";
        this.startVal = 0;
        this.paused = true;
        this.once = false;
        this.count = function(timestamp) {
          if (!_this.startTime) {
            _this.startTime = timestamp;
          }
          var progress = timestamp - _this.startTime;
          _this.remaining = _this.duration - progress;
          if (_this.useEasing) {
            if (_this.countDown) {
              _this.frameVal = _this.startVal - _this.easingFn(progress, 0, _this.startVal - _this.endVal, _this.duration);
            } else {
              _this.frameVal = _this.easingFn(progress, _this.startVal, _this.endVal - _this.startVal, _this.duration);
            }
          } else {
            _this.frameVal = _this.startVal + (_this.endVal - _this.startVal) * (progress / _this.duration);
          }
          var wentPast = _this.countDown ? _this.frameVal < _this.endVal : _this.frameVal > _this.endVal;
          _this.frameVal = wentPast ? _this.endVal : _this.frameVal;
          _this.frameVal = Number(_this.frameVal.toFixed(_this.options.decimalPlaces));
          _this.printValue(_this.frameVal);
          if (progress < _this.duration) {
            _this.rAF = requestAnimationFrame(_this.count);
          } else if (_this.finalEndVal !== null) {
            _this.update(_this.finalEndVal);
          } else {
            if (_this.callback) {
              _this.callback();
            }
          }
        };
        this.formatNumber = function(num) {
          var neg = num < 0 ? "-" : "";
          var result, x1, x2, x3;
          result = Math.abs(num).toFixed(_this.options.decimalPlaces);
          result += "";
          var x = result.split(".");
          x1 = x[0];
          x2 = x.length > 1 ? _this.options.decimal + x[1] : "";
          if (_this.options.useGrouping) {
            x3 = "";
            for (var i = 0, len = x1.length; i < len; ++i) {
              if (i !== 0 && i % 3 === 0) {
                x3 = _this.options.separator + x3;
              }
              x3 = x1[len - i - 1] + x3;
            }
            x1 = x3;
          }
          if (_this.options.numerals && _this.options.numerals.length) {
            x1 = x1.replace(/[0-9]/g, function(w) {
              return _this.options.numerals[+w];
            });
            x2 = x2.replace(/[0-9]/g, function(w) {
              return _this.options.numerals[+w];
            });
          }
          return neg + _this.options.prefix + x1 + x2 + _this.options.suffix;
        };
        this.easeOutExpo = function(t, b, c, d) {
          return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
        };
        this.options = __assign(__assign({}, this.defaults), options);
        this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber;
        this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo;
        this.startVal = this.validateValue(this.options.startVal);
        this.frameVal = this.startVal;
        this.endVal = this.validateValue(endVal);
        this.options.decimalPlaces = Math.max(this.options.decimalPlaces);
        this.resetDuration();
        this.options.separator = String(this.options.separator);
        this.useEasing = this.options.useEasing;
        if (this.options.separator === "") {
          this.options.useGrouping = false;
        }
        this.el = typeof target === "string" ? document.getElementById(target) : target;
        if (this.el) {
          this.printValue(this.startVal);
        } else {
          this.error = "[CountUp] target is null or undefined";
        }
        if (typeof window !== "undefined" && this.options.enableScrollSpy) {
          if (!this.error) {
            window["onScrollFns"] = window["onScrollFns"] || [];
            window["onScrollFns"].push(function() {
              return _this.handleScroll(_this);
            });
            window.onscroll = function() {
              window["onScrollFns"].forEach(function(fn) {
                return fn();
              });
            };
            this.handleScroll(this);
          } else {
            console.error(this.error, target);
          }
        }
      }
      CountUp2.prototype.handleScroll = function(self) {
        if (!self || !window || self.once)
          return;
        var bottomOfScroll = window.innerHeight + window.scrollY;
        var rect = self.el.getBoundingClientRect();
        var bottomOfEl = rect.top + rect.height + window.pageYOffset;
        if (bottomOfEl < bottomOfScroll && bottomOfEl > window.scrollY && self.paused) {
          self.paused = false;
          setTimeout(function() {
            return self.start();
          }, self.options.scrollSpyDelay);
          if (self.options.scrollSpyOnce)
            self.once = true;
        } else if (window.scrollY > bottomOfEl && !self.paused) {
          self.reset();
        }
      };
      CountUp2.prototype.determineDirectionAndSmartEasing = function() {
        var end = this.finalEndVal ? this.finalEndVal : this.endVal;
        this.countDown = this.startVal > end;
        var animateAmount = end - this.startVal;
        if (Math.abs(animateAmount) > this.options.smartEasingThreshold && this.options.useEasing) {
          this.finalEndVal = end;
          var up = this.countDown ? 1 : -1;
          this.endVal = end + up * this.options.smartEasingAmount;
          this.duration = this.duration / 2;
        } else {
          this.endVal = end;
          this.finalEndVal = null;
        }
        if (this.finalEndVal !== null) {
          this.useEasing = false;
        } else {
          this.useEasing = this.options.useEasing;
        }
      };
      CountUp2.prototype.start = function(callback) {
        if (this.error) {
          return;
        }
        this.callback = callback;
        if (this.duration > 0) {
          this.determineDirectionAndSmartEasing();
          this.paused = false;
          this.rAF = requestAnimationFrame(this.count);
        } else {
          this.printValue(this.endVal);
        }
      };
      CountUp2.prototype.pauseResume = function() {
        if (!this.paused) {
          cancelAnimationFrame(this.rAF);
        } else {
          this.startTime = null;
          this.duration = this.remaining;
          this.startVal = this.frameVal;
          this.determineDirectionAndSmartEasing();
          this.rAF = requestAnimationFrame(this.count);
        }
        this.paused = !this.paused;
      };
      CountUp2.prototype.reset = function() {
        cancelAnimationFrame(this.rAF);
        this.paused = true;
        this.resetDuration();
        this.startVal = this.validateValue(this.options.startVal);
        this.frameVal = this.startVal;
        this.printValue(this.startVal);
      };
      CountUp2.prototype.update = function(newEndVal) {
        cancelAnimationFrame(this.rAF);
        this.startTime = null;
        this.endVal = this.validateValue(newEndVal);
        if (this.endVal === this.frameVal) {
          return;
        }
        this.startVal = this.frameVal;
        if (this.finalEndVal == null) {
          this.resetDuration();
        }
        this.finalEndVal = null;
        this.determineDirectionAndSmartEasing();
        this.rAF = requestAnimationFrame(this.count);
      };
      CountUp2.prototype.printValue = function(val) {
        var result = this.formattingFn(val);
        if (this.el.tagName === "INPUT") {
          var input = this.el;
          input.value = result;
        } else if (this.el.tagName === "text" || this.el.tagName === "tspan") {
          this.el.textContent = result;
        } else {
          this.el.innerHTML = result;
        }
      };
      CountUp2.prototype.ensureNumber = function(n) {
        return typeof n === "number" && !isNaN(n);
      };
      CountUp2.prototype.validateValue = function(value) {
        var newValue = Number(value);
        if (!this.ensureNumber(newValue)) {
          this.error = "[CountUp] invalid start or end value: ".concat(value);
          return null;
        } else {
          return newValue;
        }
      };
      CountUp2.prototype.resetDuration = function() {
        this.startTime = null;
        this.duration = Number(this.options.duration) * 1e3;
        this.remaining = this.duration;
      };
      return CountUp2;
    }()
  );

  // <stdin>
  var UPDATE_INTERVAL_SECONDS = 10;
  function createCounter(id, value, decimalPlaces) {
    return new CountUp(id, value, {
      startVal: value,
      duration: UPDATE_INTERVAL_SECONDS,
      useEasing: false,
      separator: ".",
      decimal: ",",
      decimalPlaces
    });
  }
  var powerCount = null;
  var greenShareCount = null;
  var greenEnergyCount = null;
  var $activeClients = document.querySelector("#telemetry--activeClients");
  var $totalClients = document.querySelector("#telemetry--totalClients");
  var $chargePowerUnit = document.querySelector("#telemetry--chargePowerUnit");
  var $unitGreenEnergy = document.querySelector("#telemetry--greenEnergyUnit");
  function render(data) {
    document.querySelector(".telemetry").style.display = "block";
    data.greenEnergy = 55123456;
    const chargePower = fmtKW(data.chargePower / 1e3);
    const greenEnergy = fmtKWh(data.greenEnergy);
    const greenShare = 100 / data.chargePower * data.greenPower;
    if (!powerCount) {
      powerCount = createCounter(
        "telemetry--power",
        chargePower.value,
        chargePower.decimals
      );
      greenEnergyCount = createCounter(
        "telemetry--greenEnergy",
        greenEnergy.value,
        greenEnergy.decimals
      );
      greenShareCount = createCounter("telemetry--greenShare", greenShare, 1);
    } else {
      powerCount.update(chargePower.value);
      greenEnergyCount.update(greenEnergy.value);
      greenShareCount.update(greenShare);
    }
    $chargePowerUnit.innerText = chargePower.unit;
    $unitGreenEnergy.innerText = greenEnergy.unit;
    $activeClients.innerText = data.activeClients;
    $totalClients.innerText = data.totalClients;
  }
  function update() {
    fetch("https://api.evcc.io/v1/total").then((response) => response.json()).then(render).catch((err) => {
      console.error(err);
      document.querySelector(".telemetry").style.display = "none";
    });
  }
  function fmtKW(kW) {
    if (kW < 1e3) {
      return { value: kW, decimals: 0, unit: "kW" };
    } else if (kW < 1e4) {
      return { value: kW / 1e3, decimals: 2, unit: "MW" };
    } else if (kW < 1e5) {
      return { value: kW / 1e3, decimals: 1, unit: "MW" };
    } else if (kW < 1e6) {
      return { value: kW / 1e3, decimals: 0, unit: "MW" };
    } else if (kW < 1e7) {
      return { value: kW / 1e6, decimals: 2, unit: "GW" };
    } else if (kW < 1e8) {
      return { value: kW / 1e6, decimals: 1, unit: "GW" };
    }
    return { value: kW / 1e6, decimals: 0, unit: "GW" };
  }
  function fmtKWh(kWh) {
    const result = fmtKW(kWh);
    result.unit += "h";
    return result;
  }
  setInterval(update, UPDATE_INTERVAL_SECONDS * 1e3);
  update();
})();
