const Footer = () => {
  return (
    <div className="bg-black p-4">
      <div className="flex gap-3 flex-wrap px-5 font-semibold justify-center my-4 text-gray-400" style={{fontSize:'0.78rem'}}>
        <span>Terms of Use</span>
        <span>Privacy Policy</span>
        <span>About</span>
        <span>Blog</span>
        <span>FAQ</span>
      </div>
      <p className="text-center mb-4 text-gray-500" style={{fontSize:'0.7rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus id ligula nec pretium. Cras odio arcu, aliquet vel quam vitae, gravida mattis orci. Ut quis molestie nisl, ut suscipit dui. Curabitur consequat iaculis facilisis. Sed eget tellus ultrices, cursus felis a, aliquam diam. Donec laoreet pellentesque orci, vitae elementum ex.</p>
    </div>
  )
}

export default Footer