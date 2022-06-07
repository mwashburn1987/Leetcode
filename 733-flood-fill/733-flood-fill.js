/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  var oldColor = image[sr][sc];
  
  if(newColor == oldColor)
    return image;
  
  image[sr][sc] = newColor;
  
  if(sr > 0 && image[sr - 1][sc] == oldColor)
    floodFill(image, sr - 1, sc, newColor); //Left
  
  if(sc > 0 && image[sr][sc - 1] == oldColor)
    floodFill(image, sr, sc - 1, newColor); //Up

  if(sr < image.length - 1 && image[sr + 1][sc] == oldColor)
    floodFill(image, sr + 1, sc, newColor); //Down
      
  if(sc < image[0].length - 1 && image[sr][sc + 1] == oldColor)
    floodFill(image, sr, sc + 1, newColor); // Right
      
  return image;
};