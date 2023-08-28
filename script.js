function decimalToBinary(num) {
  //Write you code here
	var s="";
	while(num>1){
		s=(num%2)+s;
		num=num/2;
	}
	return s;
}

window.decimalToBinary = decimalToBinary;
