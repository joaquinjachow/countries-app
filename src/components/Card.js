import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
/* export default class Card extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    render() {
return(

    <div className="card">
        <div >
            <h3 className="link">{this.props.name}</h3>
        </div>
        <div>
            <img className="img-c" src={this.props.flag} alt="flag not found" />
        </div>
        <div className="continent">
            <h5 >{this.props.id}</h5>
            <h5 >{this.props.continent}</h5>
        </div>
    </div>
)
}} */
export default function Card ({ name, flag, continent, id }) {
  return (
    <div className='card'>
      <Link href={'/home' + id}>
        <div>
          <h3 className='link'>{name}</h3>
        </div>
      </Link>
      <div>
        <Image className='img-c' src={flag} alt='No se encontro la bandera' />
      </div>
      <div className='continent'>
        <h3>{continent}</h3>
      </div>
    </div>
  )
}
