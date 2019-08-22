# jay-utils

jay-utils is a collection of useful javascript functions.

## Installing

```
npm install jay-utils
```

## API

### 1.类型判断

#### isObject

#### isArray

#### isDate

#### isNumber

#### isString

#### isBoolean

### 2.对象扩展

#### copy

### 3.其他

#### saveLocal(name, value)
保存本地localStorage

#### getLocal(name,type)
获取本地localStorage，如果type=='json'，这转换出json对象。

#### getLocal2Json(name)
获取本地localStorage，并转换出json对象。

#### removeLocal(name)
删除本地localStorage。

#### saveCookie(name, value, domain, path, minSec)
保存本地cookie，path默认为/，minSec默认无限

#### getCookie(name)
保存获取cookie

#### clearCookie(domain, path)
清除所有cookie

#### removeCookie(name, domain, path)
删除cookie

#### uuid()
生成唯一值

#### getURLParam(path, search)
获取url参数，例：aa.com?a=1

```
utils.getURLParam('a', window.location.search)  //1
```
