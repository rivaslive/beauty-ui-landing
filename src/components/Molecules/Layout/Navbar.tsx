import React from 'react';
import Image from 'next/image';
import { GithubOutlined } from '@ant-design/icons';

// brand
import Brand from '../../../../public/favicon.png';

// components
import {
	ButtonGithub,
	StyleBrand,
	StyleHead,
	StyleHeadContent,
	StyleInputSearch,
	StyleTitle,
} from './style';
import { MenuHome } from './Menu';
import { repoUrl } from '../../../utils/getGithub';

interface IProps {
	isHome?: boolean;
	isSolid?: boolean;
	menu?: {
		name: string;
		key: string;
	}[];
}

const Navbar = ({ isSolid = false, isHome = false, menu }: IProps) => {
	return (
		<StyleHead $isHome={isSolid} $isHome2={isHome} theme="light">
			<StyleHeadContent $isHome={isSolid}>
				<a href="/">
					<StyleBrand>
						<Image src={Brand} height={30} width={40} objectFit="contain" />
						<StyleTitle variant="ROBOT_24_28_500">Beauty Design</StyleTitle>
					</StyleBrand>
				</a>
				{!isHome ? (
					<>
						<StyleInputSearch placeholder="Search..." bordered={false} />
						{/* Github */}
						<ButtonGithub type="link">
							<a href={repoUrl} target="_blank" rel="noreferrer noopener">
								<StyleTitle variant="ROBOT_24_28_500">
									<GithubOutlined /> Github
								</StyleTitle>
							</a>
						</ButtonGithub>
					</>
				) : (
					<MenuHome items={menu} />
				)}
			</StyleHeadContent>
		</StyleHead>
	);
};

export default React.memo(Navbar);
