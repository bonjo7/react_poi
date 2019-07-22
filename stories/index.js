import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import POICreate from '../src/components/poiCreate'

storiesOf("POI APP/Create POI", module).add("default", () => <POICreate />);
