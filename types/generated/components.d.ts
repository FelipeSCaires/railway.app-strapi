import type { Struct, Schema } from '@strapi/strapi';

export interface ServicoSectionTwo extends Struct.ComponentSchema {
  collectionName: 'components_servico_section_twos';
  info: {
    displayName: 'SectionTwo';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    card: Schema.Attribute.Component<'servico.card', true>;
  };
}

export interface ServicoSectionTree extends Struct.ComponentSchema {
  collectionName: 'components_servico_section_trees';
  info: {
    displayName: 'SectionTree';
    icon: 'alien';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    item: Schema.Attribute.Component<'servico.item', true>;
  };
}

export interface ServicoSectionOne extends Struct.ComponentSchema {
  collectionName: 'components_servico_section_ones';
  info: {
    displayName: 'SectionOne';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.Blocks;
    description: Schema.Attribute.String;
    item: Schema.Attribute.Component<'servico.item', true>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ServicoItem extends Struct.ComponentSchema {
  collectionName: 'components_servico_items';
  info: {
    displayName: 'item';
    icon: 'alien';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
  };
}

export interface ServicoCard extends Struct.ComponentSchema {
  collectionName: 'components_servico_cards';
  info: {
    displayName: 'card';
    icon: 'alien';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    item: Schema.Attribute.Component<'servico.item', true>;
  };
}

export interface PrimeSectionTwo extends Struct.ComponentSchema {
  collectionName: 'components_prime_section_twos';
  info: {
    displayName: 'SectionTwo';
  };
  attributes: {
    title: Schema.Attribute.String;
    article: Schema.Attribute.String;
    description: Schema.Attribute.String;
    item: Schema.Attribute.Component<'servico.item', true>;
  };
}

export interface PrimeSectionTree extends Struct.ComponentSchema {
  collectionName: 'components_prime_section_trees';
  info: {
    displayName: 'SectionTree';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    item: Schema.Attribute.Component<'servico.item', true>;
  };
}

export interface PrimeSectionOne extends Struct.ComponentSchema {
  collectionName: 'components_prime_section_ones';
  info: {
    displayName: 'SectionOne';
    icon: 'alien';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.Blocks;
  };
}

export interface NossoPropositoSectionTwo extends Struct.ComponentSchema {
  collectionName: 'components_nosso_proposito_section_twos';
  info: {
    displayName: 'SectionTwo';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    description: Schema.Attribute.Component<
      'nosso-proposito.description',
      true
    >;
  };
}

export interface NossoPropositoSectionTree extends Struct.ComponentSchema {
  collectionName: 'components_nosso_proposito_section_trees';
  info: {
    displayName: 'SectionTree';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    item: Schema.Attribute.Component<'nosso-proposito.paragraph', true>;
  };
}

export interface NossoPropositoSectionOne extends Struct.ComponentSchema {
  collectionName: 'components_nosso_proposito_section_ones';
  info: {
    displayName: 'SectionOne';
    icon: 'alien';
  };
  attributes: {
    title: Schema.Attribute.Blocks;
    description: Schema.Attribute.String;
  };
}

export interface NossoPropositoSectionFour extends Struct.ComponentSchema {
  collectionName: 'components_nosso_proposito_section_fours';
  info: {
    displayName: 'SectionFour';
    icon: 'alien';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    item: Schema.Attribute.Component<'nosso-proposito.item', true>;
  };
}

export interface NossoPropositoSectionFive extends Struct.ComponentSchema {
  collectionName: 'components_nosso_proposito_section_fives';
  info: {
    displayName: 'SectionFive';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images', true>;
    item: Schema.Attribute.Component<'home.item', true>;
  };
}

export interface NossoPropositoParagraph extends Struct.ComponentSchema {
  collectionName: 'components_nosso_proposito_paragraphs';
  info: {
    displayName: 'paragraph';
    icon: 'alien';
  };
  attributes: {
    article: Schema.Attribute.Blocks;
  };
}

export interface NossoPropositoItem extends Struct.ComponentSchema {
  collectionName: 'components_nosso_proposito_items';
  info: {
    displayName: 'item';
    icon: 'alien';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
    info: Schema.Attribute.String;
  };
}

export interface NossoPropositoDescription extends Struct.ComponentSchema {
  collectionName: 'components_nosso_proposito_descriptions';
  info: {
    displayName: 'description';
    icon: 'alien';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
  };
}

export interface HomeSectionTree extends Struct.ComponentSchema {
  collectionName: 'components_home_section_trees';
  info: {
    displayName: 'SectionTree';
    icon: 'alien';
  };
  attributes: {
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    item: Schema.Attribute.Component<'home.item', true>;
  };
}

export interface HomeSectionFive extends Struct.ComponentSchema {
  collectionName: 'components_home_section_fives';
  info: {
    displayName: 'SectionFive';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.Blocks;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface HomeItem extends Struct.ComponentSchema {
  collectionName: 'components_home_items';
  info: {
    displayName: 'item';
    icon: 'alien';
    description: '';
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
    description: '';
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

export interface ContatoSectionTwo extends Struct.ComponentSchema {
  collectionName: 'components_contato_section_twos';
  info: {
    displayName: 'SectionTwo';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    map: Schema.Attribute.Blocks;
  };
}

export interface ContatoSectionOne extends Struct.ComponentSchema {
  collectionName: 'components_contato_section_ones';
  info: {
    displayName: 'SectionOne';
    icon: 'alien';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    whatsapp: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'servico.section-two': ServicoSectionTwo;
      'servico.section-tree': ServicoSectionTree;
      'servico.section-one': ServicoSectionOne;
      'servico.item': ServicoItem;
      'servico.card': ServicoCard;
      'prime.section-two': PrimeSectionTwo;
      'prime.section-tree': PrimeSectionTree;
      'prime.section-one': PrimeSectionOne;
      'nosso-proposito.section-two': NossoPropositoSectionTwo;
      'nosso-proposito.section-tree': NossoPropositoSectionTree;
      'nosso-proposito.section-one': NossoPropositoSectionOne;
      'nosso-proposito.section-four': NossoPropositoSectionFour;
      'nosso-proposito.section-five': NossoPropositoSectionFive;
      'nosso-proposito.paragraph': NossoPropositoParagraph;
      'nosso-proposito.item': NossoPropositoItem;
      'nosso-proposito.description': NossoPropositoDescription;
      'home.section-tree': HomeSectionTree;
      'home.section-five': HomeSectionFive;
      'home.item': HomeItem;
      'home.home-section-two': HomeHomeSectionTwo;
      'home.home-section-one': HomeHomeSectionOne;
      'hero.tag': HeroTag;
      'hero.hero-section': HeroHeroSection;
      'contato.section-two': ContatoSectionTwo;
      'contato.section-one': ContatoSectionOne;
    }
  }
}
