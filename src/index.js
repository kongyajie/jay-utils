const utils = {
  isObject: function (input) {
    return Object.prototype.toString.call(input) === '[object Object]';
  },
  isArray: function (input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
  },
  isDate: function (input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
  },
  isNumber: function (input) {
    return input instanceof Number || Object.prototype.toString.call(input) === '[object Number]';
  },
  isString: function (input) {
    return input instanceof String || Object.prototype.toString.call(input) === '[object String]';
  },
  isBoolean: function (input) {
    return typeof input == 'boolean';
  },
  isFunction: function (input) {
    return typeof input == 'function';
  },
  copy(data) {
    let copyOne = null;
    if (this.isObject(data)) {
      copyOne = {};
      for (const key in data) {
        copyOne[key] = this.copy(data[key]);
      }
    } else if (this.isArray(data)) {
      copyOne = [];
      for (const index of data) {
        copyOne.push(this.copy(index));
      }
    } else {
      copyOne = data;
    }
    return copyOne;
  },
  saveLocal(name, value) {
    if (window.localStorage && JSON && name) {
      if (typeof value == 'object') {
        value = JSON.stringify(value);
      }
      window.localStorage.setItem(name, value);
      return true;
    }
    return false;
  },
  getLocal(name, type) {
    if (window.localStorage && JSON && name) {
      const data = window.localStorage.getItem(name);
      if (type && type == 'json' && !this.isNull(data)) {
        try {
          return JSON.parse(data);
        } catch (e) {
          console.error(`取数转换json错误${e}`);
          return '';
        }
      } else {
        return data;
      }
    }
    return null;
  },
  getLocal2Json(name) {
    return this.getLocal(name, 'json');
  },
  removeLocal(name) {
    if (window.localStorage && JSON && name) {
      window.localStorage.removeItem(name);
    }
    return null;
  },
  saveCookie(name, value, domain, path, minSec) {
    const cookieEnabled = (navigator.cookieEnabled) ? true : false;
    if (name && cookieEnabled) {
      path = path || '/';
      if (typeof value == 'object') {
        value = JSON.stringify(value);
      }
      let exp;
      if (minSec) {
        exp = new Date(); // new Date("December 31, 9998");
        exp.setTime(exp.getTime() + minSec * 1000);
      } else {
        exp = new Date("9998-01-01");
      }
      let cookieString = `${name}=${escape(value)}${minSec?(`;expires=${exp.toGMTString()}`) : ''};path=${path};`; 
      if(domain){
        cookieString += `domain=${domain};`;
      }
      document.cookie = cookieString;
      return true;
    }
    return false;
  },
  getCookie(name) {
    const cookieEnabled = (navigator.cookieEnabled) ? true : false;
    if (name && cookieEnabled) {
      const arr = document.cookie.match(new RegExp(`(^| )${name}=([^;]*)(;|$)`));
      if (arr !== null) {
        return unescape(arr[2]);
      }
    }
    return null;
  },
  clearCookie(domain, path) {
    const keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    path = path || '/';
    if (keys) {
      for (let i = keys.length; i--;) {
        let cookieString = `${keys[i]}=0;expires=${new Date(0).toUTCString()};path=${path};`;
        if(domain){
          cookieString += `domain=${domain};`;
        }
        document.cookie = cookieString;
      }
    }
  },
  removeCookie(name, domain, path) {
    const cookieEnabled = (navigator.cookieEnabled) ? true : false;
    if (name && cookieEnabled) {
      path = path || '/';
      let cookieString = `${name}=0;expires=${new Date(0).toUTCString()};path=${path};`;
      if(domain){
        cookieString += `domain=${domain};`;
      }
      document.cookie = cookieString;
      return true;
    }
    return false;
  },
  uuid() {
    const s4 = ()=>{
      return Math.floor(( 1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  },
  getURLParam( name, search ) {
    return decodeURIComponent( ( new RegExp( `[?|&]${name}=` + '([^&;]+?)(&|#|;|$)' ).exec( search || location.search ) || [ true, '' ] )[ 1 ].replace( /\+/g, '%20' ) ) || null;
  },
}

module.exports = utils;