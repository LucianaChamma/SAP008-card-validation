const validator = {
  isValid:function (cardNumber) {
    console.log(cardNumber)
  }
  
};



// function maskify(creditCard) {
// 	if (CreditCard.length < 6) return creditCard;
// 	const last4Characters = creditCard.substr(-4);
// 	const firstCharacter = creditCard.substr(0, 1);
// 	const maskingCharacters = creditCard.substr(1, creditCard.length - 5).replace(/\d/g, '#');
// 	return `${firstCharacter}${maskingCharacters}${last4Characters}`;
// }

export default validator;