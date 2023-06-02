class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    if (!(node instanceof TreeNode)) {
      throw new Error('Invalid node. Node must be an instance of TreeNode.');
    }

    this.children.push(node);
  }

  removeChild(node) {
    const index = this.children.indexOf(node);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  getChild(index) {
    if (index < 0 || index >= this.children.length) {
      throw new Error('Index out of bounds.');
    }

    return this.children[index];
  }

  getChildren() {
    return this.children;
  }

  getValue() {
    return this.value;
  }
}

// ResNet(
//   (conv1): Conv2d(3, 64, kernel_size=(7, 7), stride=(2, 2), padding=(3, 3), bias=False)
//   (bn1): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
//   (relu): ReLU(inplace=True)
//   (maxpool): MaxPool2d(kernel_size=3, stride=2, padding=1, dilation=1, ceil_mode=False)
//   (layer1): Sequential(
//     (0): BasicBlock(
//       (conv1): Conv2d(64, 64, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
//       (bn1): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
//       (relu): ReLU(inplace=True)
//       (conv2): Conv2d(64, 64, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
//       (bn2): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
//     )
//     (1): BasicBlock(
//       (conv1): Conv2d(64, 64, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
//       (bn1): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
//       (relu): ReLU(inplace=True)
//       (conv2): Conv2d(64, 64, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
//       (bn2): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
//     )
//   )
//   (layer2): Sequential(
//     (0): BasicBlock(
//       (conv1): Conv2d(64, 128, kernel_size=(3, 3), stride=(2, 2), padding=(1, 1), bias=False)
//       (bn1): BatchNorm2d(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
//       (relu): ReLU(inplace=True)
//       (conv2): Conv2d(128, 128, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
//       (bn2): BatchNorm2d(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
//       (downsample): Sequential(
//         (0): Conv2d(64, 128, kernel_size=(1, 1), stride=(2, 2), bias=False)
//         (1): BatchNorm2d(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
//       )
//     )
//     (1): BasicBlock(
//       (conv1): Conv2d(128, 128, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
//       (bn1): BatchNorm2d(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
//       (relu): ReLU(inplace=True)
//       (conv2): Conv2d(128, 128, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
//       (bn2): BatchNorm2d(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
//     )
//   )
//   (layer3): Sequential(
//     (0): BasicBlock(
//       (conv1): Conv2d(128, 256, kernel_size=(3, 3), stride=(2, 2), padding=(1, 1), bias=False)
//       (bn1): BatchNorm2d(256, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
//       (relu): ReLU(inplace=True)
//       (conv2): Conv2d(256, 256, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
//       (bn2): BatchNorm2d(256, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
//       (downsample): Sequential(
//         (0): Conv2d(128, 256, kernel_size=(1, 1), stride=(2, 2), bias=False)
//         (1): BatchNorm2d(256, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
//       )
//     )
//     (1): BasicBlock(
//       (conv1): Conv2d(256, 256, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
//       (bn1): BatchNorm2d(256, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
//       (relu): ReLU(inplace=True)
//       (conv2): Conv2d(256, 256, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
//       (bn2): BatchNorm2d(256, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
//     )
//   )
//   (layer4): Sequential(
//     (0): BasicBlock(
//       (conv1): Conv2d(256, 512, kernel_size=(3, 3), stride=(2, 2), padding=(1, 1), bias=False)
//       (bn1): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
//       (relu): ReLU(inplace=True)
//       (conv2): Conv2d(512, 512, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
//       (bn2): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
//       (downsample): Sequential(
//         (0): Conv2d(256, 512, kernel_size=(1, 1), stride=(2, 2), bias=False)
//         (1): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
//       )
//     )
//     (1): BasicBlock(
//       (conv1): Conv2d(512, 512, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
//       (bn1): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
//       (relu): ReLU(inplace=True)
//       (conv2): Conv2d(512, 512, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False)
//       (bn2): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
//     )
//   )
//   (avgpool): AdaptiveAvgPool2d(output_size=(1, 1))
//   (fc): Linear(in_features=512, out_features=10, bias=True)
// )

// Example usage:
const rootNode = new TreeNode('model');
const rootChildNode1 = new TreeNode('conv1');
const rootChildNode2 = new TreeNode('bn1');
const rootChildNode3 = new TreeNode('maxpool');
const rootChildNode4 = new TreeNode('classifier')
const rootChildNode5 = new TreeNode('layer1')
const rootChildNode6 = new TreeNode('layer2')
const rootChildNode7 = new TreeNode('layer3')
const rootChildNode8 = new TreeNode('layer4')

const layer1ChildNode1 = new TreeNode('0')
const layer10ChildNode1 = new TreeNode('conv1')
const layer10ChildNode2 = new TreeNode('bn1')
const layer10ChildNode3 = new TreeNode('relu')
const layer10ChildNode4 = new TreeNode('conv2')
const layer10ChildNode5 = new TreeNode('bn2')

const layer1ChildNode2 = new TreeNode('1')
const layer11ChildNode1 = new TreeNode('conv1')
const layer11ChildNode2 = new TreeNode('bn1')
const layer11ChildNode3 = new TreeNode('relu')
const layer11ChildNode4 = new TreeNode('conv2')
const layer11ChildNode5 = new TreeNode('bn2')

rootNode.addChild(rootChildNode1)
rootNode.addChild(rootChildNode2)
rootNode.addChild(rootChildNode3)
rootNode.addChild(rootChildNode4)
rootNode.addChild(rootChildNode5)
rootNode.addChild(rootChildNode6)
rootNode.addChild(rootChildNode7)
rootNode.addChild(rootChildNode8)

rootChildNode5.addChild(layer1ChildNode1)
layer1ChildNode1.addChild(layer10ChildNode1)
layer1ChildNode1.addChild(layer10ChildNode2)
layer1ChildNode1.addChild(layer10ChildNode3)
layer1ChildNode1.addChild(layer10ChildNode4)
layer1ChildNode1.addChild(layer10ChildNode5)


rootChildNode5.addChild(layer1ChildNode2)
layer1ChildNode2.addChild(layer11ChildNode1)
layer1ChildNode2.addChild(layer11ChildNode2)
layer1ChildNode2.addChild(layer11ChildNode3)
layer1ChildNode2.addChild(layer11ChildNode4)
layer1ChildNode2.addChild(layer11ChildNode5)