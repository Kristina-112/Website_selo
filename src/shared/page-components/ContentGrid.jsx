import React from 'react';
import clsx from 'clsx';

const ContentGrid = ({layout = 'half', children}) => (
    <div className={clsx('content__grid', `content__grid_${layout}`)}>
        {children}
    </div>
);

export default ContentGrid;