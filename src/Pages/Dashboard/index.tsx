import React from 'react';

import Header from '../../components/organisms/Header';
import Menu from '../../components//organisms/Menu';
import Button from '../../components/Button'


function Dashboard() {
  return (
		<>
			<div className="layout__menu-header">
				<div className="flex">
					<div className="flex">
						<Menu />
					</div>

					<div className="pageContent w-screen flex flex-col">
						<div>
							<Header />
						</div>

						<div className="content">
							<Button classname="bg-red-700 m-6 " title="botão" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Dashboard;