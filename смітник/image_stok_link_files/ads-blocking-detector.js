/**
* Mix of several scripts to detect AdBlock-like browser features:
* https://www.detectadblock.com/
* https://github.com/sitexw/FuckAdBlock
* https://github.com/InteractiveAdvertisingBureau/AdBlockDetection
*
*/
(function(window) {
var BlockingDetector = function(options) {
	this._options = {
		checkOnLoad:		false,
		resetOnEnd:			false,
		loopCheckTime:		500,
		loopMaxNumber:		5,
		baitClass:			'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links',
		baitStyle:			'width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;',
		debug:				false
	};
	this._var = {
		version:			'3.2.1',
		bait:				null,
		checking:			false,
		loop:				null,
		loopNumber:			0,
		event:				{ detected: [], notDetected: [] }
	};
	if(options !== undefined) {
		this.setOption(options);
	}
	var self = this;
	var eventCallback = function() {
		setTimeout(function() {
			if(self._options.checkOnLoad === true) {
				if(self._options.debug === true) {
					self._log('onload->eventCallback', 'A check loading is launched');
				}
				if(self._var.bait === null) {
					self._createBait();
				}
				setTimeout(function() {
					self.check();
				}, 1);
			}
		}, 1);
	};
	if(window.addEventListener !== undefined) {
		window.addEventListener('load', eventCallback, false);
	} else {
		window.attachEvent('onload', eventCallback);
	}
};

BlockingDetector.prototype._options = null;
BlockingDetector.prototype._var = null;
BlockingDetector.prototype._bait = null;

BlockingDetector.prototype._log = function(method, message) {
	console.log('[BlockingDetector][' + method + '] ' + message);
};

BlockingDetector.prototype.setOption = function(options, value) {
	if(value !== undefined) {
		var key = options;
		options = {};
		options[key] = value;
	}
	for(var option in options) {
		this._options[option] = options[option];
		if(this._options.debug === true) {
			this._log('setOption', 'The option "' + option + '" he was assigned to "' + options[option] + '"');
		}
	}
	return this;
};

BlockingDetector.prototype._createBait = function() {
	var bait = document.createElement('div');
	bait.setAttribute('class', this._options.baitClass);
	bait.setAttribute('style', this._options.baitStyle);
	this._var.bait = window.document.body.appendChild(bait);

	this._var.bait.offsetParent;
	this._var.bait.offsetHeight;
	this._var.bait.offsetLeft;
	this._var.bait.offsetTop;
	this._var.bait.offsetWidth;
	this._var.bait.clientHeight;
	this._var.bait.clientWidth;

	if(this._options.debug === true) {
		this._log('_createBait', 'Bait has been created');
	}
};
BlockingDetector.prototype._destroyBait = function() {
	window.document.body.removeChild(this._var.bait);
	this._var.bait = null;

	if(this._options.debug === true) {
		this._log('_destroyBait', 'Bait has been removed');
	}
};

BlockingDetector.prototype.check = function(loop) {
	if(loop === undefined) {
		loop = true;
	}

	if(this._options.debug === true) {
		this._log('check', 'An audit was requested ' + (loop===true?'with a':'without') + ' loop');
	}

	if(this._var.checking === true) {
		if(this._options.debug === true) {
			this._log('check', 'A check was canceled because there is already an ongoing');
		}
		return false;
	}
	this._var.checking = true;

	if(this._var.bait === null) {
		this._createBait();
	}

	var self = this;
	this._var.loopNumber = 0;
	if(loop === true) {
		this._var.loop = setInterval(function() {
			self._checkBait(loop);
		}, this._options.loopCheckTime);
	}
	setTimeout(function() {
		self._checkBait(loop);
	}, 1);
	if(this._options.debug === true) {
		this._log('check', 'A check is in progress ...');
	}

	return true;
};
BlockingDetector.prototype._checkBait = function(loop) {
	var detected = false;

	if(this._var.bait === null) {
		this._createBait();
	}

	if(window.document.body.getAttribute('abp') !== null
		|| this._var.bait.offsetParent === null
		|| this._var.bait.offsetHeight == 0
		|| this._var.bait.offsetLeft == 0
		|| this._var.bait.offsetTop == 0
		|| this._var.bait.offsetWidth == 0
		|| this._var.bait.clientHeight == 0
		|| this._var.bait.clientWidth == 0) {
		detected = true;
	}
	if(window.getComputedStyle !== undefined) {
		var baitTemp = window.getComputedStyle(this._var.bait, null);
		if(baitTemp && (baitTemp.getPropertyValue('display') == 'none' || baitTemp.getPropertyValue('visibility') == 'hidden')) {
			detected = true;
		}
	}

	if(this._options.debug === true) {
		this._log('_checkBait', 'A check (' + (this._var.loopNumber + 1) + '/' + this._options.loopMaxNumber + ' ~' + (1 + this._var.loopNumber*this._options.loopCheckTime) + 'ms) was conducted and detection is ' + (detected===true?'positive':'negative'));
	}

	if(loop === true) {
		this._var.loopNumber++;
		if(this._var.loopNumber >= this._options.loopMaxNumber) {
			this._stopLoop();
		}
	}

	if(detected === true) {
		this._stopLoop();
		this._destroyBait();
		this.emitEvent(true);
		if(loop === true) {
			this._var.checking = false;
		}
	} else if(this._var.loop === null || loop === false) {
		this._destroyBait();
		this.emitEvent(false);
		if(loop === true) {
			this._var.checking = false;
		}
	}
};
BlockingDetector.prototype._stopLoop = function(detected) {
	clearInterval(this._var.loop);
	this._var.loop = null;
	this._var.loopNumber = 0;

	if(this._options.debug === true) {
		this._log('_stopLoop', 'A loop has been stopped');
	}
};

BlockingDetector.prototype.emitEvent = function(detected) {
	if(this._options.debug === true) {
		this._log('emitEvent', 'An event with a ' + (detected===true?'positive':'negative') + ' detection was called');
	}

	var fns = this._var.event[(detected===true?'detected':'notDetected')];
	for(var i in fns) {
		if(this._options.debug === true) {
			this._log('emitEvent', 'Call function ' + (parseInt(i) + 1) + '/' + fns.length);
		}
		if(fns.hasOwnProperty(i)) {
			fns[i]();
		}
	}
	if(this._options.resetOnEnd === true) {
		this.clearEvent();
	}
	return this;
};
BlockingDetector.prototype.clearEvent = function() {
	this._var.event.detected = [];
	this._var.event.notDetected = [];

	if(this._options.debug === true) {
		this._log('clearEvent', 'The event list has been cleared');
	}
};

BlockingDetector.prototype.on = function(detected, fn) {
	this._var.event[(detected===true?'detected':'notDetected')].push(fn);
	if(this._options.debug === true) {
		this._log('on', 'A type of event "' + (detected===true?'detected':'notDetected') + '" was added');
	}

	return this;
};
BlockingDetector.prototype.onDetected = function(fn) {
	return this.on(true, fn);
};
BlockingDetector.prototype.onNotDetected = function(fn) {
	return this.on(false, fn);
};

window.BlockingDetector = BlockingDetector;

if(window.blockingDetector === undefined) {
	window.blockingDetector = new BlockingDetector({
		checkOnLoad: true,
		resetOnEnd: true
	});
}
})(window.top);

