export const blogsData = {
  content_left: {
    id: "blogs-s1-left",
    sectionAlign: "content-left",
    sectionClasses: ["blog"],
    data: [
      {
        id: "1",
        contentType: "text",
        tag: "h2",
        text: "Attract Audience & Website Trafic",
      },
      {
        id: "2",
        contentType: "horizontal Line",
        width: "25%",
        tag: "hr",
        margin: "0",
        border: "2px solid #0e38aa",
      },
      {
        id: "3",
        contentType: "list",
        classes: ["line-height-3"],
        tag: "ul",
        list_style_image: "",
        list: [
          "Reasonable pricing",
          "Guranteed Results",
          "Effective Stratergies",
          "Creative Graphic Designs",
        ],
      },
    ],
  },
  content_right: {
    id: "blogs-s2-right",
    sectionAlign: "content-right",
    sectionClasses: ["form-card-container"],
    data: [
      {
        id: "1",
        contentType: "text",
        tag: "h2",
        text: "Request a Free Quote",
        class: "center",
      },
      {
        id: "1",
        contentType: "form",
        tag: "form",
        inputs: [
          {
            id: "2",
            contentType: "input",
            classes: ["quote-input"],
            tag: "input",
            inputType: "text",
            inputPlaceholder: "Name",
            inputId: "name",
            required: "required",
          },
          {
            id: "3",
            contentType: "input",
            classes: ["quote-input"],
            tag: "input",
            inputType: "email",
            inputPlaceholder: "Email",
            inputId: "email",
            required: "required",
          },
          {
            id: "4",
            contentType: "input",
            classes: ["quote-input"],
            tag: "input",
            inputType: "tel",
            inputPlaceholder: "Phone",
            inputId: "phone",
            required: "required",
            pattern: "[0-9]{9}",
          },
          {
            id: "5",
            contentType: "input",
            classes: ["quote-input"],
            tag: "input",
            inputType: "text",
            inputPlaceholder: "Message",
            inputId: "message",
            required: "required",
          },
          {
            id: "6",
            contentType: "button",
            classes: ["btn round-border primary-blue"],
            tag: "button",
            text: "Get Quote",
            onSubmit: "requestFreeQuote",
          },
        ],
        class: "",
        onSubmit: "requestFreeQuote",
      },
    ],
  },
};
