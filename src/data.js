// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from 'react-icons/io';

// import images
import Features1Img from './assets/img/features-1.png';
import Features2Img from './assets/img/features-2.png';
import ChairImg from './assets/img/chair.png';
import BedImg from './assets/img/bed.png';
import CupboardImg from './assets/img/cupboard.png';
import LightingImg from './assets/img/lighting.png';
import Product1Img from './assets/img/products/product-1.png';
import Product2Img from './assets/img/products/product-2.png';
import Product3Img from './assets/img/products/product-3.png';
import Product4Img from './assets/img/products/product-4.png';
import Product5Img from './assets/img/products/product-5.png';
import Product6Img from './assets/img/products/product-6.png';
import Product7Img from './assets/img/products/product-7.png';
import Product8Img from './assets/img/products/product-8.png';
import Product9Img from './assets/img/products/product-9.png';
import Product10Img from './assets/img/products/product-10.png';
import TestimonialImg from './assets/img/testimonial.png';
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/avatar-3.png';

export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'Sobre nós',
    href: 'about',
  },
  {
    name: 'features',
    href: 'features',
  },
  {
    name: 'contato',
    href: 'contact',
  },
];

export const hero = {
  title: 'Kitchens Luxury Design',
  subtitle:
    'Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto',
  buttonText: 'Veja mais',
};

export const stats = [
  {
    value: 'Valcucine',
    text: 'KITCHENS',
  },
  {
    value: 'Wolf',
    text: 'COOKING',
  },
  {
    value: 'Subzero',
    text: 'REFRIGERATION',
  },
  {
    value: 'Cove',
    text: 'DISHWASHING',
  },
];

export const features = {
  image: <Features1Img />,
  title: 'Tecnologia de ponta e beleza texturizada',
  subtitle:
    'Personalizar sua cozinha é mais do que escolher uma cor de gabinete e uma bancada. Trata-se de fazer com que o espaço reflita você, sua família e seu estilo de vida.',
  buttonText: 'Veja mais',
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Soluções sustentáveis',
      subtitle:
        'Desmaterializar e reciclar para Valcucine significa refletir e melhorar, inovar e renovar; significa reduzir o supérfluo para proporcionar mais bem-estar.',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Gaveta personalizável graças ao precioso artesanato.',
      subtitle:
        'Um detalhe fundamental, que se integra perfeitamente com a pureza das formas e materiais da cozinha, para um resultado sofisticado.',
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: 'Novidade em Salone del Mobile Logica Celata',
    subtitle:
      'A Logica Celata, o mais novo membro da família Logica e o produto final de uma pesquisa brilhante para transformar o espaço e reinventar a ergonomia, foi apresentada na Semana de Design de Milão 2022 com a personalização Stilema3 de Alessandro Mendini.',
  },
};

export const newInStore = {
  title: 'MARCAS',
  subtitle: 'Mãos hábeis revelam a beleza oculta em harmonia com a verdadeira natureza.',
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: 'Valcucine',
      image: <ChairImg />,
    },
    {
      name: 'Wolf',
      image: <BedImg />,
    },
    {
      name: 'Subzero',
      image: <CupboardImg />,
    },
    {
      name: 'cove',
      image: <LightingImg />,
    },
  ],
};

export const products = {
  title: 'Todos os produtos',
  subtitle:
    'Itens escolhidos à dedo para compor o seu Decor.',
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Ceiling Light',
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Wood Chair',
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Treos Seroes 911',
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Multi bilderman slibber',
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'XORA corner desk',
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Black Forest Series Wood',
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
        },
      ],
    },
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Ceiling Light',
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Wood Chair',
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Treos Seroes 911',
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Multi bilderman slibber',
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'XORA corner desk',
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Black Forest Series Wood',
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
        },
      ],
    },
  ],
};

export const testimonial = {
  title: 'O que estão falando sobre a gente?',
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: 'Sharon Fliter',
      occupation: 'Arquiteta',
      message:
        '“Amo trabalhar com os produtos oferecidos pela Habitat.”',
    },
    {
      avatar: <Avatar2Img />,
      name: 'Jacobsen',
      occupation: 'Arquiteto',
      message:
        '“Elegância, conforto, e autoridade. Isso que representa Habitat Naturale em meus projetos.”',
    },
    {
      avatar: <Avatar3Img />,
      name: 'Marí Aní Oglouyan',
      occupation: 'Arquiteta',
      message:
        '“Amo poder projetar sonhos com os mobiliarios Valcucine.”',
    },
  ],
};

export const newsletter = {
  title: 'Quer saber mais sobre nossas novidades?',
  subtitle: 'Receba todas as novidades em seu e-mail',
  placeholder: 'Endereço de e-mail',
  buttonText: 'Enviar',
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: '#',
    },
    {
      icon: <IoLogoInstagram />,
      href: '#',
    },
    {
      icon: <IoLogoFacebook />,
      href: '#',
    },
  ],
  copyright: 'Habitat Naturale - All Rights Reserved.',
  href:'#',
};
