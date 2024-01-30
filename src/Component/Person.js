import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props) {
        super(props);
        this.state={
            person:{
                fullName:'Hmed',
                bio:'24y.o',
                imgSrc:'https://www.les-soins-infirmiers.fr/wp-content/uploads/2018/06/ic-ne-d-homme-conception-de-personne-dessin-de-vecteur-73697014.jpg',
                profession:'web dev'
            },
            mongela: 0,
        }
    }

    componentDidMount= () => {
        this.timer=setInterval(() => {
            this.setState({mongela:this.state.mongela + 1})
        }, 1000);
    }
    
    componentWillUnmount= () => {
        clearInterval(this.timer)
    }

  render() {
    return (
      <div>
       
       
        <div>
        <h1>{this.state.person.fullName}</h1>
        <p>Mongela:{this.state.mongela}</p>
           <h2>{this.state.person.bio}</h2>
           <img src={this.state.person.imgSrc} alt='hmed'></img>
           <h2>{this.state.person.profession}</h2>
           </div>
        </div>
    )
  }
}
