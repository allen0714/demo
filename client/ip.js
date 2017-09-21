(function(){
  'use strict';
  /**
   * regExp for 0~255
   * @type {RegExp}
   */
  var IPV4_ITEM_RGX = /^((1[0-9][0-9])|(2[0-4][0-9])|(25[0-5])|([1-9][0-9])|([0-9]))$/;

  /**
   * check a string input whether is between 0~255 which is part of an IPv4 address.
   * @param str
   * @returns {boolean}
   */
  var isValidIPv4AddressItem = function(str){
    str = (str || '').trim();
    return IPV4_ITEM_RGX.test(str);
  };

  var ip = {
    /**
     * convert the string input of an ipv4 address to an integer,
     * will throw an Error when the input is not a valid IPv4 address.
     * e.g. 172.168.5.1 -> 2896692481
     * @param ipAdder
     * @returns {number}
     */
    toDecimal : function(ipAdder){
      var ipArr = (ipAdder||'').split('.');
      if(ipArr.length ===4){
        var ipDecimal = 0;
        ipArr.forEach(function(octet){
          if(isValidIPv4AddressItem(octet)){
            ipDecimal <<= 8;
            ipDecimal += parseInt(octet);
          }else{
           throw new Error('invalid ipv4 address!');
          }
        });
        return (ipDecimal >>> 0);
      }else{
        throw new Error('invalid ipv4 address!');
      }
    }
  };
  window.IP = ip;
})();