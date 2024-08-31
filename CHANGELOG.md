## 1.0.0

### Added

##### Component

- Created the AnimateLoad React component for animating loading placeholders with customizable options.

#### Animations:

- <b>AnimationEffect.PULSE:</b> Adds a pulsing animation to the loading placeholders.
- <b>AnimationEffect.WAVE:</b> Adds a wave animation to the loading placeholders.

#### Alignment Options:

- <b>Align.LEFT:</b> Aligns the loading placeholders to the left.
- <b>Align.CENTER:</b> Centers the loading placeholders.
- <b>Align.RIGHT:</b> Aligns the loading placeholders to the right.

#### Customization:

- <b>Number of Rows (numRows):</b> Set the number of loading placeholder rows.
- <b>Custom Row Dimensions (customRows):</b> Specify custom width and height for individual rows.
- <b>Gap Between Rows (gapRow):</b> Adjust the space between loading placeholder rows.
- <b>Border Radius (roundCorner and round):</b>
  - <b>roundCorner:</b> Option to round the corners of the loading placeholders.
  - <b>round:</b> Option to make the loading placeholders fully rounded (circle).
- <b>Container and Row Styles (containerStyle and rowStyle):</b> Customize the styles of the container and individual rows.
- <b>Colors:</b>
  - <b>primaryColor:</b> Set the primary color for the loading placeholders.
  - <b>secondaryColor:</b> Set the secondary color for the loading placeholders.

#### Unique IDs:

- Each loading placeholder row is assigned a unique ID for React's key prop, generated using a custom function.
