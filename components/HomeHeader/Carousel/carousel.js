import React from 'react'
import { Carousel } from 'antd';
import { NextArrow, PrevArrow } from './slickArrows';

class HomeCarousel extends React.Component {
  render(){
    var settings = {
      dots: true,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return <React.Fragment>
				<Carousel {...settings}>
					<div className="featured_item">
						<div className="featured_image" style={{ background: `url('/static/images/example5.jpg')` }} />
					</div>
					<div className="featured_item">
						<div className="featured_image" style={{ background: `url('/static/images/example4.jpg')` }} />
					</div>
					<div className="featured_item">
						<div className="featured_image" style={{ background: `url('/static/images/example3.jpg')` }} />
					</div>
					<div className="featured_item">
						<div className="featured_image" style={{ background: `url('/static/images/example4.jpg')` }} />
					</div>
				</Carousel>
				<style jsx>{`
					.ant-carousel {
						height: 100%;
						position: relative;
					}
					.featured_item {
						position: relative;
					}
					.featured_image {
						height: 400px;
						background-size: cover !important;
						background-repeat: no-repeat !important;
					}
        `}</style>
			</React.Fragment>;
  }
};

export default HomeCarousel
