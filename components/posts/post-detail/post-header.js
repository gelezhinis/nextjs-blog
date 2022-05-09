import Image from 'next/image';

import classes from './post-header.module.css';

const PostHeader = (props) => {
  const {title, imagePath} = props;
 
  return <header className={classes.header}>
    <h1>{title}</h1>
    <Image src={imagePath} alt={title} width={200} height={175} />
  </header>
}

export default PostHeader;