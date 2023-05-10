class HashTable{
  constructor(size){
    this.table = new Array(size);
    this.size = size;
  }

  hash(key){
    let sum = 0; 
    for(let i = 0; i < key.length; i++){
      sum += key.charCodeAt(i);
    }
    return sum % this.size;
  }


  set(key, value){
    const index = this.hash(key);
    // this.table[index] = value;

    const bucket = this.table[index];
    if(!bucket){
      this.table[index] = [[key, value]]
    }else{
      const sameKeyItem = bucket.find(item => item[0] === key)
      if(sameKeyItem){
        sameKeyItem[1] = value;
      }else {
        bucket.push([key, value])
      }
      
    }
    
  }

  get(key){
    const index = this.hash(key);
    const bucket = this.table[index];

    if(bucket){
      const sameKeyItem = bucket.find(item => item[0] === key)
    if(sameKeyItem){
      return sameKeyItem[1]
    }
    }
    return undefined; 
  }

  remove(key){
  const index = this.hash(key);
  const bucket = this.table[index];
  if(bucket)
  {
    const sameKeyItem = bucket.find(item => item[0] === key)

    if(sameKeyItem){
      bucket.splice(bucket.indexOf(sameKeyItem), 1)
    }
  }
    
  }

  display(){
    for(let i = 0; i < this.table.length; i++){
      if(this.table[i]){
        console.log(i, this.table[i]);
      }
    }
    
  }
  
}

const table = new HashTable(50);

table.set("name", "Narine");
table.set("designation", "player");
table.set("mane", "Hasim")

console.log(table.get('mane'))

table.remove('mane')

table.display()