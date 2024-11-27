import type { Struct, Schema } from '@strapi/strapi';

export interface HomeItem extends Struct.ComponentSchema {
  collectionName: 'components_home_items';
  info: {
    displayName: 'item';
    icon: 'alien';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
  };
}

export interface HomeHomeSectionTwo extends Struct.ComponentSchema {
  collectionName: 'components_home_home_section_twos';
  info: {
    displayName: 'homeSectionTwo';
    icon: 'alien';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    item: Schema.Attribute.Component<'home.item', true>;
  };
}

export interface HomeHomeSectionOne extends Struct.ComponentSchema {
  collectionName: 'components_home_home_section_ones';
  info: {
    displayName: 'homeSectionOne';
    icon: 'alien';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
  };
}

export interface HeroTag extends Struct.ComponentSchema {
  collectionName: 'components_hero_tags';
  info: {
    displayName: 'tag';
    icon: 'chartBubble';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface HeroHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_sections';
  info: {
    displayName: 'heroSection';
    icon: 'alien';
  };
  attributes: {
    title: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tag: Schema.Attribute.Component<'hero.tag', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.item': HomeItem;
      'home.home-section-two': HomeHomeSectionTwo;
      'home.home-section-one': HomeHomeSectionOne;
      'hero.tag': HeroTag;
      'hero.hero-section': HeroHeroSection;
    }
  }
}
