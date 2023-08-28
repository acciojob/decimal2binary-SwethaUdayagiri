function decimalToBinary(num) {
  	var s='';
	while(num>1){
		s=(num%2)+s;
		console.log(s);
		num=Math.floor(num/2);
		console.log(num);
	}
	s=(num%2)+s;
	return s;
}

window.decimalToBinary = decimalToBinary;
