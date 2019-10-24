import React, { useState, useEffect } from "react";
import moment from "moment";

import Timeline from "react-calendar-timeline";
import randomColor from "randomcolor";
import generateFakeData from "../generate-fake-data";

var keys = {
  groupIdKey: "id",
  groupTitleKey: "title",
  groupRightTitleKey: "rightTitle",
  itemIdKey: "id",
  itemTitleKey: "title",
  itemDivTitleKey: "title",
  itemGroupKey: "group",
  itemTimeStartKey: "start",
  itemTimeEndKey: "end",
  groupLabelKey: "title",
};

const CustomTimeline = ({ groups, events }) => {
  // const [items, setItems] = useState(events);
  const [defaultTimeStart, setDefaultTimeStart] = useState(
    moment()
      .startOf("day")
      .toDate()
  );
  const [defaultTimeEnd, setDefaultTimeEnd] = useState(
    moment()
      .startOf("day")
      .add(1, "day")
      .toDate()
  );

  let randomSeed = Math.floor(Math.random() * 1000);

  // console.log(events);

  let prItems = [];
  // for (let i = 0; i < events.length; i++) {
  //   prItems.push({
  //     color: randomColor({ luminosity: "dark", seed: randomSeed + i }),
  //     // id: i + "",
  //     title: events.title,
  //     start: Date.parse(events[i].start_time),
  //     end: Date.parse(events[i].end_time),
  //     group: events.group[i].id,
  //   });
  // }

  console.log(generateFakeData().items);
  console.log(prItems);
  console.log(events);

  const itemRenderer = ({
    item,
    timelineContext,
    itemContext,
    getItemProps,
    getResizeProps,
  }) => {
    const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
    const backgroundColor = itemContext.selected
      ? itemContext.dragging
        ? "red"
        : item.selectedBgColor
      : item.bgColor;
    const borderColor = itemContext.resizing ? "red" : item.color;
    return (
      <div
        {...getItemProps({
          style: {
            backgroundColor,
            color: item.color,
            borderColor,
            borderStyle: "solid",
            borderWidth: 1,
            borderRadius: 4,
            borderLeftWidth: itemContext.selected ? 3 : 1,
            borderRightWidth: itemContext.selected ? 3 : 1,
          },
          onMouseDown: () => {
            console.log("on item click", item);
          },
        })}
      >
        {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}

        <div
          style={{
            height: itemContext.dimensions.height,
            overflow: "hidden",
            paddingLeft: 3,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {itemContext.title}
        </div>

        {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}
      </div>
    );
  };

  // const handleItemMove = (itemId, dragTime, newGroupOrder) => {
  //   const group = groups[newGroupOrder];

  //   setItems(
  //     items.map(item =>
  //       item.id === itemId
  //         ? Object.assign({}, item, {
  //             start: dragTime,
  //             end: dragTime + (item.end - item.start),
  //             group: group.id,
  //           })
  //         : item
  //     )
  //   );

  //   console.log("Moved", itemId, dragTime, newGroupOrder);
  // };

  // const handleItemResize = (itemId, time, edge) => {
  //   setItems(
  //     items.map(item =>
  //       item.id === itemId
  //         ? Object.assign({}, item, {
  //             start: edge === "left" ? time : item.start,
  //             end: edge === "left" ? item.end : time,
  //           })
  //         : item
  //     )
  //   );

  //   console.log("Resized", itemId, time, edge);
  // };

  return (
    <Timeline
      groups={groups}
      items={prItems}
      keys={keys}
      itemTouchSendsClick={false}
      stackItems
      itemHeightRatio={0.75}
      showCursorLine
      canMove={false}
      canResize={false}
      defaultTimeStart={defaultTimeStart}
      defaultTimeEnd={defaultTimeEnd}
      itemRenderer={itemRenderer}
      // onItemMove={handleItemMove}
      // onItemResize={handleItemResize}
    />
  );
};

export default CustomTimeline;
