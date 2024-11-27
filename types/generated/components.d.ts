import type { Struct, Schema } from '@strapi/strapi';

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
      'hero.tag': HeroTag;
      'hero.hero-section': HeroHeroSection;
    }
  }
}
