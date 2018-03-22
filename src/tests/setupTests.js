// SET-UP SCRIPT TO USE ENZYME FOR TESTING
// airbnb.io/enzyme/

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});