import type { Schema, Attribute } from '@strapi/strapi';

export interface SlicesTextsRow extends Schema.Component {
  collectionName: 'components_slices_texts_rows';
  info: {
    displayName: 'TextsRow';
    icon: 'apps';
  };
  attributes: {
    TextLeft: Attribute.Text;
    TextRight: Attribute.Text;
  };
}

export interface SlicesFooter extends Schema.Component {
  collectionName: 'components_slices_footers';
  info: {
    displayName: 'Footer';
    icon: 'archive';
  };
  attributes: {
    Columns: Attribute.Component<'slices.column-text', true>;
  };
}

export interface SlicesColumnText extends Schema.Component {
  collectionName: 'components_slices_column_texts';
  info: {
    displayName: 'ColumnText';
    icon: 'arrowRight';
  };
  attributes: {
    Text1: Attribute.Text;
    Text2: Attribute.Text;
    Text3: Attribute.String;
    Text4: Attribute.Text;
  };
}

export interface SlicesCard extends Schema.Component {
  collectionName: 'components_slices_cards';
  info: {
    displayName: 'Card';
    icon: 'calendar';
  };
  attributes: {
    LinkText: Attribute.String;
    Link: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media<'images'>;
  };
}

export interface SlicesCardZone extends Schema.Component {
  collectionName: 'components_slices_card_zones';
  info: {
    displayName: 'CardZone';
    icon: 'archive';
  };
  attributes: {
    Cards: Attribute.Component<'slices.card', true>;
  };
}

export interface SlicesBannerTop extends Schema.Component {
  collectionName: 'components_slices_banner_tops';
  info: {
    displayName: 'BannerTop';
    icon: 'grid';
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'slices.texts-row': SlicesTextsRow;
      'slices.footer': SlicesFooter;
      'slices.column-text': SlicesColumnText;
      'slices.card': SlicesCard;
      'slices.card-zone': SlicesCardZone;
      'slices.banner-top': SlicesBannerTop;
    }
  }
}
