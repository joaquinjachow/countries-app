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
    <div className='w-72 h-80 text-black bg-[#454545d1]'>
      <Link href={'/home' + id}>
        <div>
          <h3 className='text-black no-underline'>{name}</h3>
        </div>
      </Link>
      <div>
        <Image className='bg-transparent w-[90%] max-h-36 align-middle items-center text-center' src={flag} alt='No se encontro la bandera' />
      </div>
      <div className='pt-2'>
        <h3>{continent}</h3>
      </div>
    </div>
  )
}
