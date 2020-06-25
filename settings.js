{
  // Configura tamanho e família da fonte
  "editor.fontSize": 16,
    "editor.lineHeight": 24,
      "editor.fontFamily": "'Fira Code', 'Operator Mono', 'iA Writer Duospace', 'Source Code Pro', Menlo, Monaco, monospace",
        "editor.fontLigatures": true,
          "editor.detectIndentation": true,
            "editor.renderIndentGuides": false,
              // Enable auto-updating of import paths when you rename a file.
              "javascript.updateImportsOnFileMove.enabled": "always",
                "emmet.includeLanguages": {
    "javascript": "javascriptreact",
      "jsx-sublime-babel-tags": "javascriptreact"
  },
  // Enable per-language
  "[javascript]": {
    "editor.formatOnSave": true
  },
  "[json]": {
    "editor.formatOnSave": true
  },
  "emmet.syntaxProfiles": {
    "javascript": "jsx",
      "xml": {
      "attr_quotes": "single"
    }
  },
  "javascript.validate.enable": false,
    "workbench.editor.enablePreview": false,
      "prettier.trailingComma": "all",
        "bracketPairColorizer.forceIterationColorCycle": true,
          "emmet.triggerExpansionOnTab": true,
            "emmet.showExpandedAbbreviation": "never",
              "editor.tabSize": 2,
                "editor.minimap.enabled": false,
                  "editor.wordWrap": "on",
                    "window.title": "${rootPath}${separator}${appName}",
                      "window.titleBarStyle": "custom",
                        "editor.trimAutoWhitespace": true,
                          "editor.lineNumbers": "on",
                            "editor.mouseWheelZoom": true,
                              "editor.wordWrapColumn": 120,
                                "files.autoSave": "onFocusChange",
                                  "window.zoomLevel": 0,
                                    "editor.fontWeight": "500",
                                      "editor.cursorWidth": 5,
                                        "editor.cursorStyle": "line",
                                          "editor.cursorBlinking": "smooth",
                                            "editor.renderWhitespace": "all",
                                              "editor.snippetSuggestions": "top",
                                                "editor.glyphMargin": true,
                                                  "files.insertFinalNewline": true,
                                                    "files.trimFinalNewlines": true,
                                                      "files.trimTrailingWhitespace": true,
                                                        "files.eol": "\n",
                                                          "extensions.ignoreRecommendations": true,
                                                            "workbench.activityBar.visible": true,
                                                              "terminal.integrated.macOptionIsMeta": true,
                                                                "prettier.bracketSpacing": true,
                                                                  "terminal.integrated.fontWeightBold": "700",
                                                                    "terminal.integrated.lineHeight": 1.6,
                                                                      "zenMode.fullScreen": true,
                                                                        "zenMode.hideActivityBar": true,
                                                                          "zenMode.hideLineNumbers": true,
                                                                            "zenMode.hideStatusBar": true,
                                                                              "zenMode.hideTabs": true,
                                                                                "editor.minimap.maxColumn": 120,
                                                                                  "explorer.sortOrder": "type",
                                                                                    // Aplica linhas verticais para lembrar de quebrar linha em códigos muito grandes
                                                                                    "editor.rulers": [
                                                                                      80,
                                                                                      120
                                                                                    ],
                                                                                      // Aplica um sinal visual na esquerda da linha selecionada
                                                                                      "editor.renderLineHighlight": "gutter",
                                                                                        // Aumenta a fonte do terminal
                                                                                        "terminal.integrated.fontSize": 14,
                                                                                          "editor.formatOnPaste": true,
                                                                                            "editor.formatOnSave": true,
                                                                                              "highlight-matching-tag.styles": {
    "opening": {
      "left": {
        "custom": {
          "borderWidth": "0 0 0 3px",
            "borderStyle": "solid",
              "borderColor": "yellow",
                "borderRadius": "5px"
        }
      },
      "right": {
        "custom": {
          "borderWidth": "0 3px 0 0",
            "borderStyle": "solid",
              "borderColor": "yellow",
                "borderRadius": "5px"
        }
      }
    }
  },
  "git.enableSmartCommit": true,
    "workbench.startupEditor": "newUntitledFile",
      "workbench.editor.highlightModifiedTabs": true,
        "workbench.iconTheme": "material-icon-theme",
          "files.exclude": {
    // VCS
    "**/.git": true,
      "**/.svn": true,
        "**/.hg": true,
          // MacOS
          "**/.DS_Store": true,
            // my vscode/atom extensions
            "**/issues/**": true,
              // pascal
              "**/*.ico": true,
                "**/*.{res,RES}": true,
                  "**/*.rc": true,
                    "**/*.dcu": true,
                      "package-lock.json": true,
                        "**/*.rsb": true,
                          "**/*.dfm": {
      "when": "$(basename).pas"
    },
    "**/*.fmx": {
      "when": "$(basename).pas"
    },
    "**/*.~dfm": {
      "when": "$(basename).pas"
    },
    "**/*.ddp": {
      "when": "$(basename).pas"
    },
    "**/*.~ddp": {
      "when": "$(basename).pas"
    },
    "**/*.~pas": {
      "when": "$(basename).pas"
    },
    "**/*.exe": {
      "when": "$(basename).dpr"
    },
    "**/*.used": {
      "when": "$(basename).dpr"
    },
    "**/*.stat": {
      "when": "$(basename).dpr"
    },
    "**/*.identcache": {
      "when": "$(basename).dpr"
    },
    "**/__history/**": true,
      "**/__recovery/**": true,
        "**/Win32/**": true,
          // Java
          "**/*.class": true,
            // C#
            "**/*.dll": true,
              "**/*.jar": true,
                // FinalBuilder
                "**/*.local": true,
                  "**/*.fbl8": {
      "when": "$(basename).fbp8"
    },
    "**/*.fb8lck": {
      "when": "$(basename).fbp8"
    },
    "**/*.fbpbrk": {
      "when": "$(basename).fbp8"
    },
    "**/*.fbpInf": {
      "when": "$(basename).fbp8"
    }
  },
  "terminal.integrated.rendererType": "dom",
    "diffEditor.renderSideBySide": true,
      "breadcrumbs.enabled": true,
        "typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": true,
          "[markdown]": {
    "editor.wordWrap": "wordWrapColumn",
      "files.trimTrailingWhitespace": false
  },
  "gitlens.advanced.messages": {
    "suppressResultsExplorerNotice": true,
      "suppressShowKeyBindingsNotice": true
  },
  "gitlens.currentLine.enabled": false,
    "gitlens.codeLens.enabled": false,
      "gitlens.statusBar.enabled": false,
        "gitlens.recentChanges.highlight.locations": [
          "line",
          "gutter",
          "overview"
        ],
          "gitlens.keymap": "none",
            "gitlens.menus": {
    "editor": false,
      "editorGroup": {
      "blame": true,
        "compare": true,
          "history": false,
            "remote": false
    },
    "editorTab": {
      "compare": false,
        "history": false,
          "remote": true
    },
    "explorer": {
      "compare": true,
        "history": true,
          "remote": true
    }
  },
  "gitlens.blame.heatmap.enabled": false,
    "gitlens.blame.highlight.enabled": false,
      "gitlens.hovers.enabled": false,
        "gitlens.views.fileHistory.enabled": false,
          "gitlens.views.lineHistory.enabled": false,
            "gitlens.views.search.enabled": false,
              "gitlens.mode.statusBar.enabled": false,
                "gitlens.advanced.telemetry.enabled": false,
                  "gitlens.views.compare.enabled": false,
                    "workbench.sideBar.location": "right",
                      "explorer.openEditors.visible": 0,
                        "workbench.colorTheme": "Slack Theme Aubergine Dark",
                          "gitlens.gitCommands.skipConfirmations": [
                            "fetch:command",
                            "stash-push:command",
                            "switch:command",
                            "push:command"
                          ]
}
