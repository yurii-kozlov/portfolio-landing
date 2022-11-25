import { Cloudinary } from '@cloudinary/url-gen';

export const getImage = (publicId: string) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'docve4syp',
    },
  });

  const myImage = cld.image(publicId);

  return myImage.format('webp');
};
