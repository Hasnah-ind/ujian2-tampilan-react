import React, {Component} from 'react';

class App extends Component{
  constructor(){
    super();
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {
      soal1 : [
        {
          soal: `1.Siapakah penemu baling-baling bambu`,
          a: `Doraemon`,
          b: `Suneo`,
          c: `Nobita`,
          d: `Naruto`,
          jawab: `a` 
        }
      ],
      soal2 : [
        {
          soal : `2. Pilihlah 3 yang benar mengenai Aqil`,
          c1 : `Trainer Juara Coding`,
          c2 : `Manusia`,
          c3 : `Aggota Avanger`
        }
      ],

      soal3 : [
        {
          soal : `3.Ceritakan pengalaman anda ketika tidur`
        }
      ]
      
    }

  }
  
 
onValueChange(event){
  this.setState ({selectedOption: event.target.value});
}


  render(){
    return(
      <div>
        {
          this.state.soal1.map((dinamis, key)=>
          <div>
            <p>{dinamis.soal}</p>
            <input type="radio" value="pilih1" checked={this.state.selectedOption === "pilih1"} onChange={this.onValueChange}/>{dinamis.a}
            <input type="radio" value="pilih2"checked={this.state.selectedOption === "pilih2"} onChange={this.onValueChange}/>{dinamis.b}
            <input type="radio" value="pilih3"checked={this.state.selectedOption === "pilih3"} onChange={this.onValueChange}/>{dinamis.c}
            <input type="radio" value="pilih4"checked={this.state.selectedOption === "pilih4"} onChange={this.onValueChange}/>{dinamis.d}
          </div>
          )
        }
        <br/>
        {
          this.state.soal2.map((dinamis, key)=>
          <div>
            <p>{dinamis.soal}</p>
            <input type="checkbox"/>{dinamis.c1}<br/>
            <input type="checkbox"/>{dinamis.c2}<br/>
            <input type="checkbox"/>{dinamis.c3}
          </div>

          )
        }
        <br/>
        {
          this.state.soal3.map((dinamis, key)=>
          <div>
            <p>{dinamis.soal}</p>
            <textarea cols={20} rows={5}/>
          </div>
          )
        }
      </div>
    )
  }
}

export default App;