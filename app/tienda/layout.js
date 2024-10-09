
export const metadata = {
  title: 'TIENDA OFICIAL',
  description: 'Estos headers pueden ser dinamicos, o sea que puede ser personalizale para cada page',
}


const Tiendalayout = ({children}) => {
  return (
    <>
    <h1>Tienda layout</h1>
    {children}
    </>
  )
}

export default Tiendalayout