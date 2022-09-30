import React from 'react';

import Header from '../../components/organisms/Header';
import Menu from '../../components//organisms/Menu';
import Button from '../../components/Button'


function Dashboard() {
  return (
		<>
			<div className="layout__menu-header">
				<div className="flex flex-row">
					
          <div className="">
						<Menu />
          </div>
          
					<div className="pageContent w-full flex flex-col">
						<Header />
						<Button classname="bg-red-700 m-6 " title="botão" />
          </div>
          
        </div>
        
			</div>
		</>
	);
}

export default Dashboard;