import { Icon } from 'antd';

export function NextArrow(props) {
	const { className, onClick } = props;
	return <div className={className} onClick={onClick} style={{ height: '50px', width: '45px', right: '0' }}>
			<Icon className="hello" type="right" style={{ fontSize: '50px', color: '#7d7d7d' }} />
		</div>;
}

export function PrevArrow(props) {
	const { className, onClick } = props;
	return <div className={className} onClick={onClick} style={{ height: '50px', width: '45px', left: '0', marginLeft: '-5px', zIndex: '99' }}>
			<Icon type="left" style={{ fontSize: '50px', color: '#7d7d7d' }} />
		</div>;
}
