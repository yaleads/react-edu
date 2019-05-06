function Pluralizer(count, word){
  switch(word) {
    case 'item':
      return `${count} ${Math.abs(count) === 1  ? 'item' : 'items'}`;

    default:
      console.error('Ошибка! Передан параметр, который нельзя обработать!')
  }

}

export default Pluralizer;