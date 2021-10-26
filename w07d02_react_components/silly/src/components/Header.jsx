import Button from './Button';

export const Header = (props) => {
  console.log('header props', props);
  // const title = props.title;
  const { title, someOtherProp } = props;
  


  // const title = "Gorilla Sara's Glamourous Gargoyle Gymnasium";

  return (
    <header>
      <h2>{title}</h2>
      <Button description={someOtherProp}/>
      {/* {someOtherProp && <p>this has some other prop called someOtherProp {someOtherProp}</p>} */}
    </header>
  )

}

export default Header;