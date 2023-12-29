import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
        const settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 6,
                slidesToScroll: 2,
                autoplay: true,
                innerWidth: 10,
                autoplaySpeed: 2000,

        };

        const images = [
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/qvm7rfndamithmqrgbfd.svg',
                        alt: 'Image 1',
                        text: 'Object C',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/qkdgvm9xhecrpqdwaovb.svg',
                        alt: 'Image 2',
                        text: 'Swift',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/mfhvuju6kqoraaknbzag.svg',
                        alt: 'Image 3',
                        text: 'Kotlin',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/ilovi002dpb9fkoogcc0.svg',
                        alt: 'Image 3',
                        text: 'React Native',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/kbbpwb7uf2qqrqoth3gb.svg',
                        alt: 'Image 3',
                        text: 'Xamarin',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/zbcijvliexj0xikpjx9a.svg',
                        alt: 'Image 3',
                        text: 'Ionic',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/xuhjyfm5zsreynboz7u2.svg',
                        alt: 'Image 3',
                        text: 'Flutter',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/appec-150x150.png',
                        alt: 'Image 3',
                        text: 'Appcelator',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/jhmpcyvc3l1wbb03mgli.svg',
                        alt: 'Image 3',
                        text: 'Phone Gap',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/oiwpqhvjyygdxgi70vvg.svg',
                        alt: 'Image 3',
                        text: 'React.js',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/bii2umn1tkxexocdkkux.svg',
                        alt: 'Image 3',
                        text: 'Angular',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/exdvyddcuoi37tvpxm4t.svg',
                        alt: 'Image 3',
                        text: 'Vue.js',
                },

                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/iatvh1qmciujnc21obzg.svg',
                        alt: 'Image 3',
                        text: 'Bootstrap',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/igt7un3mqxkq9cpgppqv.svg',
                        alt: 'Image 3',
                        text: 'Figma',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/jnlgefe65hhmwrzmrlqi.svg',
                        alt: 'Image 3',
                        text: 'Sketch',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/zperuutis6vdvyapmf6m.svg',
                        alt: 'Image 3',
                        text: 'Adobe XD',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/zyt5ctngblyr8kcp4usb.svg',
                        alt: 'Image 3',
                        text: 'Adobe Photoshop',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/tcc8xpwzv9ajprjfztgc.svg',
                        alt: 'Image 3',
                        text: 'Adobe Illustrator',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/in9ga3ygav7vxfl7azfc.svg',
                        alt: 'Image 3',
                        text: 'Adobr Indesign',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/ycxb8mhrjhnqaph6hzwr.svg',
                        alt: 'Image 3',
                        text: 'Javascript',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/wckgv4eeew8pc51ugqzy.svg',
                        alt: 'Image 3',
                        text: 'Saas/Less',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/lwexkwipt6lebccl9nhn.svg',
                        alt: 'Image 3',
                        text: 'C #',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/cmhameu5wchhhfepgqti.svg',
                        alt: 'Image 3',
                        text: 'Java',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/mwbhxorrabbxqcfxwc6b.svg',
                        alt: 'Image 3',
                        text: 'Laravel',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/njptwsc1vx4ssg6sanud.svg',
                        alt: 'Image 3',
                        text: 'Node.js',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/pwtn5ucn33qkgkgstsbv.svg',
                        alt: 'Image 3',
                        text: 'Php',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/bxcfmixg0jponbuqr3s1.svg',
                        alt: 'Image 3',
                        text: 'Python',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/tfjn7qzrueuntziytb5f.svg',
                        alt: 'Image 3',
                        text: 'Adobr After Effect',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/hscbc0qorxz0og6ymmdm.svg',
                        alt: 'Image 3',
                        text: 'Adobe Premier',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/kwgwcu4wu0cmuu4bdeun.svg',
                        alt: 'Image 3',
                        text: 'MySQL',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/s2hmeg9cqx7oxyrhepxy.svg',
                        alt: 'Image 3',
                        text: 'Mongo DB',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/zkiluwzfd9my6c0uwfvo.svg',
                        alt: 'Image 3',
                        text: 'Postgre SQL',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/o3mzxr4f77mybzyhaizp.svg',
                        alt: 'Image 3',
                        text: 'Redis',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/oyh0ogh3w9ncetbpe4kg.svg',
                        alt: 'Image 3',
                        text: 'MariaDB',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/mem4xsyxewuwygsixcyw.png',
                        alt: 'Image 3',
                        text: 'WordPress',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/uiqnijzvgwnkifn0pwbx.png',
                        alt: 'Image 3',
                        text: 'Shopify',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/a8gcnzedcwuw1vufruqo.png',
                        alt: 'Image 3',
                        text: 'Wix',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/opencart.png',
                        alt: 'Image 3',
                        text: 'Opencart',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/fdotxyvngl1882z0j5gb.png',
                        alt: 'Image 3',
                        text: 'Big Commerce',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/a1pfhpd8yx8ldaepmdkv.png',
                        alt: 'Image 3',
                        text: 'prestashop',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/rmxjjc64fnyvhnedyd3n.png',
                        alt: 'Image 3',
                        text: 'Drupal',
                },
                {
                        url: 'https://thecustomwebsites.com/wp-content/uploads/2023/05/xyiojsqvmbg4xqzaaant.png',
                        alt: 'Image 3',
                        text: 'Jomla',
                },


        ];

        return (
                <section className='overflow-hidden flex justify-center'>
                        <div className="container  ml-36 w-[1200px] ">
                                <Slider {...settings}>
                                        {images.map((image, index) => (
                                                <div key={index} className='cursor-grab '>
                                                        <img src={image.url} alt={image.alt} className='w-12 ' />
                                                        <p>{image.text}</p>
                                                </div>
                                        ))}
                                </Slider>
                        </div>
                </section>
        );
};

export default Carousel;