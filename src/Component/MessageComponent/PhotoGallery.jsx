import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const PhotoGallery = () => {

    const itemData=[
        {
            img: 'https://dufs9495.org/wp-content/uploads/2021/01/13781901_1736728893250258_943159943051784414_n-1.jpg',
            title: '1',
          },
        {
            img: 'https://dufs9495.org/wp-content/uploads/2021/02/bannar.png',
            title: '2',
          },
        {
            img: 'https://dufs9495.org/wp-content/uploads/2021/01/maxresdefault.jpg',
            title: '3',
          },
        {
            img: 'https://dufs9495.org/wp-content/uploads/2021/01/Untitled-23-samakal-5efb84bab741a.jpg',
            title: '4',
          },
          {
            img: 'https://dufs9495.org/wp-content/uploads/2021/02/bannar.png',
            title: '5',
          },
          {
            img: 'https://dufs9495.org/wp-content/uploads/2021/01/13781901_1736728893250258_943159943051784414_n-1.jpg',
            title: '6',
          },
        {
            img: 'https://dufs9495.org/wp-content/uploads/2021/01/maxresdefault.jpg',
            title: '7',
          },
        {
            img: 'https://dufs9495.org/wp-content/uploads/2021/01/13781901_1736728893250258_943159943051784414_n-1.jpg',
            title: '8',
          },
          {
            img: 'https://dufs9495.org/wp-content/uploads/2021/01/Untitled-23-samakal-5efb84bab741a.jpg',
            title: '9',
          },
    ]


    return (
        <ImageList sx={{ width:'100%', height: 650 }} cols={3} rowHeight={200}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      );
    }

export default PhotoGallery;