function validateUsr(username) {
    let regExp = /[^a-z_0-9]*/g;
    let temp = username.replace(regExp, '');
    return temp.length >= 4 && temp.length <= 16 && username.length === temp.length;
  }