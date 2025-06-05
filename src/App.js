
import React, { useState } from "react";
import "@react-spectrum/s2/page.css";
import {
  Divider,
  Heading,
  Text,
  TreeView,
  TreeViewItem,
  TreeViewItemContent
} from "@react-spectrum/s2";
import FileTxt from "@react-spectrum/s2/icons/FileText";
import Folder from "@react-spectrum/s2/icons/Folder";
import { style } from "@react-spectrum/s2/style" with { type: "macro" };

function App() {
  return (
    <main>

      <div
        className={style({
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "center"
        })}
      >
        <TreeView disabledKeys={['projects-1']} aria-label="test static tree">
          <TreeViewItem id="Photos" textValue="Photos">
            <TreeViewItemContent>
              <Text>Photos</Text>
              <Folder />
            </TreeViewItemContent>
          </TreeViewItem>
          <TreeViewItem id="projects" textValue="Projects">
            <TreeViewItemContent>
              <Text>Projects</Text>
              <Folder />
            </TreeViewItemContent>
            <TreeViewItem id="projects-1" textValue="Projects-1">
              <TreeViewItemContent>
                <Text>Projects-1</Text>
                <Folder />
              </TreeViewItemContent>
              <TreeViewItem id="projects-1A" textValue="Projects-1A">
                <TreeViewItemContent>
                  <Text>Projects-1A</Text>
                  <FileTxt />
                </TreeViewItemContent>
              </TreeViewItem>
            </TreeViewItem>
            <TreeViewItem id="projects-2" textValue="Projects-2">
              <TreeViewItemContent>
                <Text>Projects-2</Text>
                <FileTxt />
              </TreeViewItemContent>
            </TreeViewItem>
            <TreeViewItem id="projects-3" textValue="Projects-3">
              <TreeViewItemContent>
                <Text>Projects-3</Text>
                <FileTxt />
              </TreeViewItemContent>
            </TreeViewItem>
          </TreeViewItem>
        </TreeView>



      </div>
    </main>
  );
}

export default App;
