import { DIRECTORY_TYPE, ARCHIVE_TYPE } from '../../config/constants'

export const directoryTreeMapping = tree => {
  let level = 0
  let mappedTree = []
  const mapping = (tree, treeLevel, path) => {
    if (tree.name && tree.children) {
      tree.children.map(child => {
        if (child.children) {
          mappedTree = [ ...mappedTree, { name: child.name, level: treeLevel ? treeLevel : 0, type: DIRECTORY_TYPE, path: `${path}/${child.name}` } ]
          mapping(child, treeLevel + 1, `${path}/${child.name}`)
        } else {
          mappedTree = [ ...mappedTree, { name: child.name, level: treeLevel ? treeLevel : 0, type: ARCHIVE_TYPE, path: `${path}/${child.name}` } ]
        }
        return null
      })
    }
    return mappedTree
  }
  return mapping(tree, level, '')
}