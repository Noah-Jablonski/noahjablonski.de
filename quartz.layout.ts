import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// ============================================================
// GEMEINSAME KOMPONENTEN (auf allen Seiten)
// ============================================================
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        repo: "Noah-Jablonski/noahjablonski.de",
        repoId: "R_kgDOOkAKpw",
        category: "Announcements",
        categoryId: "DIC_kwDOOkAKp84CtLVd",
      },
    }),
  ],
  footer: Component.Footer({
    links: {
      quartzblog: "https://github.com/Noah-Jablonski/quartzblog",
      Kontakt: "mailto:info@noahjablonski.de",
      Instagram: "https://www.instagram.com/noahjablonski.de",
    },
  }),
}

// ============================================================
// EINZELNE INHALTSSEITE (z.B. eine Filmkritik)
// ============================================================
export const defaultContentPageLayout: PageLayout = {
  // Vor dem Artikeltext: Breadcrumbs (nicht auf Startseite),
  // Titel, Metadaten, Tags
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],

  // Linke Sidebar: Navigation & Suche
  left: [
    // Seitentitel / Logo
    Component.PageTitle(),

    // Spacer schiebt Suche & Icons nach rechts (nur Mobile)
    Component.MobileOnly(Component.Spacer()),

    // Suche + Darkmode + ReaderMode in einer Zeile
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),

    // Datei-Explorer (Ordnerstruktur)
    // Auf Mobile: Hamburger-Menü
    // Auf Desktop: aufklappbare Sidebar
    Component.Explorer({
      folderDefaultState: "collapsed",
      folderClickBehavior: "link",
      useSavedState: true,
    }),
  ],

  // Rechte Sidebar: Inhaltsverzeichnis (nur Desktop) & Backlinks
  right: [
    // Inhaltsverzeichnis nur auf Desktop – auf Mobile
    // würde es vor dem Artikel erscheinen und verwirren
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// ============================================================
// LISTEN-SEITEN (z.B. Tag-Übersicht, Ordner-Ansicht)
// ============================================================
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],

  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      folderDefaultState: "collapsed",
      folderClickBehavior: "link",
      useSavedState: true,
    }),
  ],

  // Rechte Sidebar auf Listen-Seiten leer –
  // kein Inhaltsverzeichnis oder Backlinks nötig
  right: [],
}