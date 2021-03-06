import React from 'react';
import renderer from 'react-test-renderer';
import 'helpers/mocking/react-dom_mock';

import ContentPackDetails from 'components/content-packs/ContentPackDetails';

describe('<ContentPackDetails />', () => {
  it('should render with content pack', () => {
    const contentPack = {
      id: '1',
      title: 'UFW Grok Patterns',
      description: 'Grok Patterns to extract informations from UFW logfiles',
      version: '1.0',
      states: ['installed', 'edited'],
      summary: 'This is a summary',
      vendor: 'graylog.com',
      url: 'www.graylog.com',
      parameters: [],
      entities: [],
    };
    const wrapper = renderer.create(<ContentPackDetails contentPack={contentPack} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render with content pack without a description', () => {
    const contentPack = {
      id: '1',
      title: 'UFW Grok Patterns',
      version: '1.0',
      states: ['installed', 'edited'],
      summary: 'This is a summary',
      vendor: 'graylog.com',
      url: 'www.graylog.com',
      parameters: [],
      entities: [],
    };
    const wrapper = renderer.create(<ContentPackDetails contentPack={contentPack} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
