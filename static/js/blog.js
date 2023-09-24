//creating script element and inserting tinymce using DOM painting
document.addEventListener("DOMContentLoaded", function (event) {
  console.log("This is blog.js");
  let sc = document.createElement("script");
  sc.setAttribute(
    "src",
    "https://cdn.tiny.cloud/1/no-api-key/tinymce/4/tinymce.min.js"
  );

  document.head.appendChild(sc);
  /*initializing tinymce  there is a chance that object might not exit,
  so use sc.onload*/
  sc.onload = () => {
    const useDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const isSmallScreen = window.matchMedia("(max-width: 1023.5px)").matches;

    tinymce.init({
      selector: "#id_content",
      plugins:
        "preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker editimage help formatpainter permanentpen pageembed charmap tinycomments mentions quickbars linkchecker emoticons advtable export footnotes mergetags autocorrect typography advtemplate",
      mobile: {
        plugins:
          "preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker help formatpainter pageembed charmap mentions quickbars linkchecker emoticons advtable footnotes mergetags autocorrect typography advtemplate",
      },
      menu: {
        tc: {
          title: "Comments",
          items: "addcomment showcomments deleteallconversations",
        },
      },
      menubar: "file edit view insert format tools table tc help",
      toolbar:
        "undo redo | aidialog aishortcuts | blocks fontsizeinput | bold italic | align numlist bullist | link image | table media pageembed | lineheight  outdent indent | strikethrough forecolor backcolor formatpainter removeformat | charmap emoticons checklist | code fullscreen preview | save print export | pagebreak anchor codesample footnotes mergetags | addtemplate inserttemplate | addcomment showcomments | ltr rtl casechange | spellcheckdialog a11ycheck", // Note: if a toolbar item requires a plugin, the item will not present in the toolbar if the plugin is not also loaded.
      autosave_ask_before_unload: true,
      autosave_interval: "30s",
      autosave_prefix: "{path}{query}-{id}-",
      autosave_restore_when_empty: false,
      autosave_retention: "2m",
      image_advtab: true,
      typography_rules: [
        "common/punctuation/quote",
        "en-US/dash/main",
        "common/nbsp/afterParagraphMark",
        "common/nbsp/afterSectionMark",
        "common/nbsp/afterShortWord",
        "common/nbsp/beforeShortLastNumber",
        "common/nbsp/beforeShortLastWord",
        "common/nbsp/dpi",
        "common/punctuation/apostrophe",
        "common/space/delBeforePunctuation",
        "common/space/afterComma",
        "common/space/afterColon",
        "common/space/afterExclamationMark",
        "common/space/afterQuestionMark",
        "common/space/afterSemicolon",
        "common/space/beforeBracket",
        "common/space/bracket",
        "common/space/delBeforeDot",
        "common/space/squareBracket",
        "common/number/mathSigns",
        "common/number/times",
        "common/number/fraction",
        "common/symbols/arrow",
        "common/symbols/cf",
        "common/symbols/copy",
        "common/punctuation/delDoublePunctuation",
        "common/punctuation/hellip",
      ],
      typography_ignore: ["code"],
      advtemplate_list: () => {
        return Promise.resolve([
          {
            id: "1",
            title: "Resolving tickets",
            content:
              "<p>As we have not heard back from you in over a week, we have gone ahead and resolved your ticket.</p>",
          },
          {
            id: "2",
            title: "Quick replies",
            items: [
              {
                id: "3",
                title: "Message received",
                content:
                  "<p>Just a quick note to say we have received your message, and will get back to you within 48 hours.</p>",
              },
              {
                id: "4",
                title: "Progress update",
                content:
                  "</p>Just a quick note to let you know we are still working on your case</p>",
              },
            ],
          },
        ]);
      },
      link_list: [
        { title: "My page 1", value: "https://www.tiny.cloud" },
        { title: "My page 2", value: "http://www.moxiecode.com" },
      ],
      image_list: [
        { title: "My page 1", value: "https://www.tiny.cloud" },
        { title: "My page 2", value: "http://www.moxiecode.com" },
      ],
      image_class_list: [
        { title: "None", value: "" },
        { title: "Some class", value: "class-name" },
      ],
      importcss_append: true,
      height: 600,
      image_caption: true,
      quickbars_selection_toolbar:
        "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
      noneditable_class: "mceNonEditable",
      toolbar_mode: "sliding",
      spellchecker_ignore_list: [
        "Ephox",
        "Moxiecode",
        "tinymce",
        "TinyMCE",
        "tm",
        "TM",
      ], // ‘tm’ and ‘TM’ are temporary spellchecker bug workarounds
      tinycomments_mode: "embedded",
      content_style: ".mymention{ color: gray; }",
      contextmenu: "link image editimage table configurepermanentpen",
      a11y_advanced_options: true,
      
    });
  };
});
