import type { Schema, Struct } from '@strapi/strapi';

export interface LayerDeepnote extends Struct.ComponentSchema {
  collectionName: 'components_layer_deepnotes';
  info: {
    displayName: 'deepnote';
  };
  attributes: {
    index_number: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    key_word: Schema.Attribute.String;
    note: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LayoutLink extends Struct.ComponentSchema {
  collectionName: 'components_layout_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutLinkPack extends Struct.ComponentSchema {
  collectionName: 'components_layout_link_packs';
  info: {
    displayName: 'linkPack';
  };
  attributes: {
    description: Schema.Attribute.Text;
    links: Schema.Attribute.Component<'layout.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutVerses extends Struct.ComponentSchema {
  collectionName: 'components_layout_verses_s';
  info: {
    displayName: 'verses ';
  };
  attributes: {
    arabic_text: Schema.Attribute.Text & Schema.Attribute.Required;
    deep_notes: Schema.Attribute.Component<'layer.deepnote', true>;
    index_number: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    turkish_text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layer.deepnote': LayerDeepnote;
      'layout.link': LayoutLink;
      'layout.link-pack': LayoutLinkPack;
      'layout.verses': LayoutVerses;
    }
  }
}
