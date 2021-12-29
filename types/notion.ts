// Server response types
export type TitleProperty = {
  type: 'text';
  text: { content: string; link: null };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: null;
};

export type RichTextProperty = {
  type: 'text';
  text: {
    content: string;
    link: null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: null;
};

export type FileProperty = {
  name: string;
  type: 'file';
  file: {
    url: string;
    expiry_time: string;
  };
};

export type MultiSelectProperty = {
  id: string;
  name: string;
  color: string;
};

export type TableProperty = {
  id: string;
  type: 'title' | 'files' | 'rich_text' | 'multi_select';
  files?: FileProperty[];
  multi_select?: MultiSelectProperty[];
  rich_text: RichTextProperty[];
  title?: TitleProperty[];
};

export type DatabaseResponse = {
  results: {
    object: string;
    id: string;
    cover: null;
    icon: {
      type: 'file';
      file: {
        url: string;
        expiry_time: string;
      };
    };
    parent: {
      type: 'database_id';
      database_id: string;
    };
    archived: false;
    properties: Record<string, TableProperty>;
  }[];
};

// Client code types
export type Post = {
  id: string;
  title: string;
  cover: string;
  author: string;
  description: string;
  tags: string;
  url: string;
};
