/*!
 * CropSelectJs - https://zara4.com/projects/crop-select-js
 *
 * Copyright (c) 2017 Zara 4
 *
 * Released under the GNU GPL 3.0 License
 * @license https://github.com/zara-4/crop-select-js/blob/master/LICENSE.md
 *
 */
function CropSelectJs(elem, options) {
    this.elem = jQuery(elem), this.options = $.extend({}, {
        animatedBorder: null != this.elem.data("animated-border") ? this.elem.data("animated-border") : !0,
        aspectRatio: null != this.elem.data("aspect-ratio") ? this.elem.data("aspect-ratio") : null,
        imageSrc: null,
        imageWidth: null,
        imageHeight: null,
        selectionResize: function() {},
        selectionMove: function() {}
    }, options);
    var $this = this;
    $(elem).bind(CropSelectJs.EVENT_NAME__SELECTION_RESIZE, function(event, data) {
        $this.options.selectionResize(data)
    }), $(elem).bind(CropSelectJs.EVENT_NAME__SELECTION_MOVE, function(event, data) {
        $this.options.selectionMove(data)
    }), this.elem.hasClass("crop-select-js") || this.elem.addClass("crop-select-js"), this.initialiseWrapper(), this.initialiseSelectionBox(), this.initialiseShadows(), this.initialiseImage(), this.elem.empty(), this.elem.append(this.wrapper), $(window).on("mouseup", function(e) {
        $this.handleMouseUp(e)
    }), $(window).on("mousemove", function(e) {
        $this.handleMouseMove(e)
    }), $(window).on("resize", function() {
        $this.handleWrapperResize()
    }), $(this.cropImage).on("load", function() {
        $this.handleImageLoad()
    }), this.options.animatedBorder ? this.enableAnimatedBorder() : this.disableAnimatedBorder(), this.options.imageSrc && this.setImageSrc(this.options.imageSrc)
}! function($) {
    var methods = {
        init: function(arguments) {
            return this.data("cropselectjs", new CropSelectJs(this, arguments)), this
        },
        enableAnimatedBorder: function() {
            return this.data("cropselectjs").enableAnimatedBorder()
        },
        disableAnimatedBorder: function() {
            return this.data("cropselectjs").disableAnimatedBorder()
        },
        getSelectionBoxX: function() {
            return this.data("cropselectjs").getSelectionBoxX()
        },
        setSelectionBoxX: function(x) {
            return this.data("cropselectjs").setSelectionBoxX(x)
        },
        getSelectionBoxY: function() {
            return this.data("cropselectjs").getSelectionBoxY()
        },
        setSelectionBoxY: function(y) {
            return this.data("cropselectjs").setSelectionBoxY(y)
        },
        getSelectionBoxWidth: function() {
            return this.data("cropselectjs").getSelectionBoxWidth()
        },
        setSelectionBoxWidth: function(width) {
            return this.data("cropselectjs").setSelectionBoxWidth(width)
        },
        getSelectionBoxHeight: function() {
            return this.data("cropselectjs").getSelectionBoxHeight()
        },
        setSelectionBoxHeight: function(height) {
            return this.data("cropselectjs").setSelectionBoxHeight(height)
        },
        setSelectionAspectRatio: function(aspectRatio) {
            return this.data("cropselectjs").setSelectionAspectRatio(aspectRatio)
        },
        clearSelectionAspectRatio: function(aspectRatio) {
            return this.data("cropselectjs").clearSelectionAspectRatio(aspectRatio)
        },
        getImageSrc: function() {
            return this.data("cropselectjs").getImageSrc()
        },
        getImageWidth: function() {
            return this.data("cropselectjs").getImageWidth()
        },
        getImageHeight: function() {
            return this.data("cropselectjs").getImageHeight()
        },
        getImageAspectRatio: function() {
            return this.data("cropselectjs").getImageAspectRatio()
        },
        setImageSrc: function(src) {
            return this.data("cropselectjs").setImageSrc(src)
        },
        selectEverything: function() {
            this.data("cropselectjs").selectEverything()
        },
        selectCentredSquare: function() {
            this.data("cropselectjs").selectCentredSquare()
        },
        selectCentredFittedAspectRatio: function(aspectRatio) {
            this.data("cropselectjs").selectCentredFittedAspectRatio(aspectRatio)
        }
    };
    $.fn.CropSelectJs = function(methodOrOptions) {
        return methods[methodOrOptions] ? methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof methodOrOptions && methodOrOptions ? void $.error("Method " + methodOrOptions + " does not exist on jQuery.CropSelectJs") : methods.init.apply(this, arguments)
    }
}(jQuery), CropSelectJs.prototype.constructor = CropSelectJs, CropSelectJs.MINIMUM_SELECTION_BOX_WIDTH = 50, CropSelectJs.MINIMUM_SELECTION_BOX_HEIGHT = 50, CropSelectJs.EVENT_NAME__SELECTION_RESIZE = "crop-select-js.selection.resize", CropSelectJs.EVENT_NAME__SELECTION_MOVE = "crop-select-js.selection.move", CropSelectJs.prototype.initialiseWrapper = function() {
    this.wrapper = this.elem.find(".crop-wrapper"), this.wrapper[0] ? this.wrapper.detach() : this.wrapper = $("<div id='crop-wrapperId' class='crop-wrapper'></div>")[0]
}, CropSelectJs.prototype.initialiseSelectionBox = function() {
    var $this = this;
    this.selectionBox = this.elem.find(".crop-selection"), this.selectionBox[0] ? this.selectionBox.detach() : this.selectionBox = $("<div class='crop-selection'><div class='border left'></div><div class='border top'></div><div class='border right'></div><div class='border bottom'></div><div class='handle top-left'></div><div class='handle top'></div><div class='handle top-right'></div><div class='handle right'></div><div class='handle bottom-right'></div><div class='handle bottom'></div><div class='handle bottom-left'></div><div class='handle left'></div></div>")[0], $(this.wrapper).append(this.selectionBox), $(this.selectionBox).on("mousedown", function(e) {
        $this.handleMouseDownInsideSelectionBox(e)
    })
}, CropSelectJs.prototype.initialiseShadows = function() {
    this.shadowLeft = this.elem.find(".shadow.left"), this.shadowLeft[0] ? this.shadowLeft.detach() : this.shadowLeft = $("<div class='shadow left'></div>")[0], $(this.wrapper).append(this.shadowLeft), this.shadowRight = this.elem.find(".shadow.right"), this.shadowRight[0] ? this.shadowRight.detach() : this.shadowRight = $("<div class='shadow right'></div>")[0], $(this.wrapper).append(this.shadowRight), this.shadowTop = this.elem.find(".shadow.top"), this.shadowTop[0] ? this.shadowTop.detach() : this.shadowTop = $("<div class='shadow top'></div>")[0], $(this.wrapper).append(this.shadowTop), this.shadowBottom = this.elem.find(".shadow.bottom"), this.shadowBottom[0] ? this.shadowBottom.detach() : this.shadowBottom = $("<div class='shadow bottom'></div>")[0], $(this.wrapper).append(this.shadowBottom)
}, CropSelectJs.prototype.initialiseImage = function() {
    this.cropImage = this.elem.find(".crop-image"), this.cropImage[0] ? this.cropImage.detach() : this.cropImage = $("<img id='cropImageId' class='crop-image' />")[0], $(this.wrapper).append(this.cropImage)
}, CropSelectJs.prototype.handleMouseUp = function(e) {
    this.selectionMouseStartX = null, this.selectionMouseStartY = null, this.selectionStartX = null, this.selectionStartY = null, this.selectionStartWidth = null, this.selectionStartHeight = null, this.selectionResizeHandle = null
}, CropSelectJs.prototype.handleMouseMove = function(e) {
    if (this.selectionMouseStartX && this.selectionMouseStartY) {
        var changeX = e.pageX - this.selectionMouseStartX,
            changeY = e.pageY - this.selectionMouseStartY;
        this.selectionResizeHandle ? (null == this.options.aspectRatio ? this.handleFreeResize(changeX, changeY) : "top-left" == this.selectionResizeHandle ? this.handleAspectRatioLockedResizeTopLeft(changeX, changeY, this.options.aspectRatio) : "top" == this.selectionResizeHandle ? this.handleAspectRatioLockedResizeTop(changeX, changeY, this.options.aspectRatio) : "top-right" == this.selectionResizeHandle ? this.handleAspectRatioLockedResizeTopRight(changeX, changeY, this.options.aspectRatio) : "right" == this.selectionResizeHandle ? this.handleAspectRatioLockedResizeRight(changeX, changeY, this.options.aspectRatio) : "bottom-right" == this.selectionResizeHandle ? this.handleAspectRatioLockedResizeBottomRight(changeX, changeY, this.options.aspectRatio) : "bottom" == this.selectionResizeHandle ? this.handleAspectRatioLockedResizeBottom(changeX, changeY, this.options.aspectRatio) : "bottom-left" == this.selectionResizeHandle ? this.handleAspectRatioLockedResizeBottomLeft(changeX, changeY, this.options.aspectRatio) : "left" == this.selectionResizeHandle && this.handleAspectRatioLockedResizeLeft(changeX, changeY, this.options.aspectRatio), this.triggerSelectionResizeEvent(), this.getSelectionBoxX() == this.selectionStartX && this.getSelectionBoxY() == this.selectionStartY || this.triggerSelectionMoveEvent()) : (this.setSelectionBoxX(this.selectionStartX + changeX), this.setSelectionBoxY(this.selectionStartY + changeY), this.triggerSelectionMoveEvent())
    }
}, CropSelectJs.prototype.handleMouseDownInsideSelectionBox = function(e) {
    this.selectionMouseStartX = e.pageX, this.selectionMouseStartY = e.pageY, this.selectionStartX = this.getSelectionBoxX(), this.selectionStartY = this.getSelectionBoxY(), this.selectionStartWidth = this.getSelectionBoxWidth(), this.selectionStartHeight = this.getSelectionBoxHeight();
    var target = $(e.target);
    target.hasClass("handle") && (target.hasClass("top-left") && (this.selectionResizeHandle = "top-left"), target.hasClass("top") && (this.selectionResizeHandle = "top"), target.hasClass("top-right") && (this.selectionResizeHandle = "top-right"), target.hasClass("right") && (this.selectionResizeHandle = "right"), target.hasClass("bottom-right") && (this.selectionResizeHandle = "bottom-right"), target.hasClass("bottom") && (this.selectionResizeHandle = "bottom"), target.hasClass("bottom-left") && (this.selectionResizeHandle = "bottom-left"), target.hasClass("left") && (this.selectionResizeHandle = "left"))
}, CropSelectJs.prototype.handleWrapperResize = function() {
    var changeInWrapperWidth = this.previousWrapperWidth - this.getWrapperWidth(),
        changeInWrapperHeight = this.previousWrapperHeight - this.getWrapperHeight();
    if (0 != changeInWrapperWidth || 0 != changeInWrapperHeight) {
        var previousImageXScaleFactor = this.getImageWidth() / this.previousWrapperWidth,
            previousImageYScaleFactor = this.getImageHeight() / this.previousWrapperHeight,
            previousScaledSelectionBoxWidth = previousImageXScaleFactor * this.getSelectionBoxWidth(),
            previousScaledSelectionBoxHeight = previousImageYScaleFactor * this.getSelectionBoxHeight(),
            previousScaledSelectionBoxX = previousImageXScaleFactor * this.getSelectionBoxX(),
            previousScaledSelectionBoxY = previousImageYScaleFactor * this.getSelectionBoxY(),
            newImageXScaleFactor = this.getImageXScaleFactor(),
            newImageYScaleFactor = this.getImageYScaleFactor(),
            newSelectionBoxWidth = Math.round(previousScaledSelectionBoxWidth / newImageXScaleFactor),
            newSelectionBoxHeight = Math.round(previousScaledSelectionBoxHeight / newImageYScaleFactor),
            newSelectionBoxX = Math.round(previousScaledSelectionBoxX / newImageXScaleFactor),
            newSelectionBoxY = Math.round(previousScaledSelectionBoxY / newImageYScaleFactor);
        this.setSelectionBoxWidth(newSelectionBoxWidth), this.setSelectionBoxHeight(newSelectionBoxHeight), this.setSelectionBoxX(newSelectionBoxX), this.setSelectionBoxY(newSelectionBoxY), this.previousWrapperWidth = this.getWrapperWidth(), this.previousWrapperHeight = this.getWrapperHeight(), this.triggerSelectionResizeEvent(), this.triggerSelectionMoveEvent()
    }
}, CropSelectJs.prototype.handleImageLoad = function() {
    this.previousWrapperWidth = this.getWrapperWidth(), this.previousWrapperHeight = this.getWrapperHeight(), this.options.aspectRatio ? this.selectCentredFittedAspectRatio(this.options.aspectRatio) : this.selectEverything()
}, CropSelectJs.prototype.triggerSelectionResizeEvent = function() {
    $(this.elem).trigger(CropSelectJs.EVENT_NAME__SELECTION_RESIZE, {
        width: this.getSelectionBoxWidth(),
        height: this.getSelectionBoxWidth(),
        widthScaledToImage: this.getScaledSelectionBoxWidth(),
        heightScaledToImage: this.getScaledSelectionBoxHeight()
    })
}, CropSelectJs.prototype.triggerSelectionMoveEvent = function() {
    $(this.elem).trigger(CropSelectJs.EVENT_NAME__SELECTION_MOVE, {
        x: this.getSelectionBoxX(),
        y: this.getSelectionBoxY(),
        xScaledToImage: this.getScaledSelectionBoxX(),
        yScaledToImage: this.getScaledSelectionBoxY()
    })
}, CropSelectJs.prototype.handleFreeResize = function(changeX, changeY) {
    this.selectionResizeHandle.indexOf("top") !== -1 ? (this.setSelectionBoxHeight(Math.min(this.selectionStartHeight - changeY, this.selectionStartY + this.selectionStartHeight)), this.setSelectionBoxY(Math.min(this.selectionStartY + changeY, this.selectionStartY + this.selectionStartHeight - CropSelectJs.MINIMUM_SELECTION_BOX_HEIGHT))) : this.selectionResizeHandle.indexOf("bottom") !== -1 && this.setSelectionBoxHeight(Math.min(this.selectionStartHeight + changeY, this.getWrapperHeight() - this.selectionStartY)), this.selectionResizeHandle.indexOf("left") !== -1 ? (this.setSelectionBoxWidth(Math.min(this.selectionStartWidth - changeX, this.selectionStartX + this.selectionStartWidth)), this.setSelectionBoxX(Math.min(this.selectionStartX + changeX, this.selectionStartX + this.selectionStartWidth - CropSelectJs.MINIMUM_SELECTION_BOX_WIDTH))) : this.selectionResizeHandle.indexOf("right") !== -1 && this.setSelectionBoxWidth(Math.min(this.selectionStartWidth + changeX, this.getWrapperWidth() - this.selectionStartX))
}, CropSelectJs.prototype.handleAspectRatioLockedResizeTopLeft = function(changeX, changeY, aspectRatio) {
    var maxHeight = this.selectionStartY + this.selectionStartHeight,
        maxWidth = this.selectionStartX + this.selectionStartWidth;
    maxWidth = Math.min(maxWidth, maxHeight * aspectRatio), maxHeight = Math.min(maxHeight, maxWidth / aspectRatio);
    var newHeight, newWidth, calculatedHeight = Math.min(this.selectionStartHeight - changeY, maxHeight),
        calculatedWidth = Math.min(this.selectionStartWidth - changeX, maxWidth),
        aspectCalculatedWidth = calculatedHeight * aspectRatio,
        aspectCalculatedHeight = calculatedWidth / aspectRatio;
    calculatedWidth > aspectCalculatedWidth ? (newWidth = calculatedWidth, newHeight = aspectCalculatedHeight) : (newHeight = calculatedHeight, newWidth = aspectCalculatedWidth);
    var actualChangeInWidth = newWidth - this.selectionStartWidth,
        actualChangeInHeight = newHeight - this.selectionStartHeight,
        newX = this.selectionStartX - actualChangeInWidth,
        newY = this.selectionStartY - actualChangeInHeight;
    newX = Math.min(newX, this.selectionStartX + this.selectionStartWidth - CropSelectJs.MINIMUM_SELECTION_BOX_WIDTH), newY = Math.min(newY, this.selectionStartY + this.selectionStartHeight - CropSelectJs.MINIMUM_SELECTION_BOX_HEIGHT), this.setSelectionBoxWidth(newWidth), this.setSelectionBoxHeight(newHeight), this.setSelectionBoxX(newX), this.setSelectionBoxY(newY)
}, CropSelectJs.prototype.handleAspectRatioLockedResizeTop = function(changeX, changeY, aspectRatio) {
    var maxHeight = this.selectionStartY + this.selectionStartHeight,
        maxWidth = this.selectionStartX + this.selectionStartWidth,
        newHeight = Math.min(this.selectionStartHeight - changeY, maxHeight),
        newWidth = newHeight * aspectRatio;
    newWidth > maxWidth && (newWidth = maxWidth, newHeight = newWidth / aspectRatio);
    var actualChangeInWidth = newWidth - this.selectionStartWidth,
        actualChangeInHeight = newHeight - this.selectionStartHeight,
        newX = this.selectionStartX - actualChangeInWidth,
        newY = this.selectionStartY - actualChangeInHeight;
    newX = Math.min(newX, this.selectionStartX + this.selectionStartWidth - CropSelectJs.MINIMUM_SELECTION_BOX_WIDTH), newY = Math.min(newY, this.selectionStartY + this.selectionStartHeight - CropSelectJs.MINIMUM_SELECTION_BOX_HEIGHT), this.setSelectionBoxWidth(newWidth), this.setSelectionBoxHeight(newHeight), this.setSelectionBoxX(newX), this.setSelectionBoxY(newY)
}, CropSelectJs.prototype.handleAspectRatioLockedResizeTopRight = function(changeX, changeY, aspectRatio) {
    var maxWidth = this.getWrapperWidth() - this.selectionStartX,
        maxHeight = this.selectionStartY + this.selectionStartHeight;
    maxWidth = Math.min(maxWidth, maxHeight * aspectRatio), maxHeight = Math.min(maxHeight, maxWidth / aspectRatio);
    var newHeight, newWidth, calculatedHeight = Math.min(this.selectionStartHeight - changeY, maxHeight),
        calculatedWidth = Math.min(this.selectionStartWidth + changeX, maxWidth),
        aspectCalculatedWidth = calculatedHeight * aspectRatio,
        aspectCalculatedHeight = calculatedWidth / aspectRatio;
    calculatedWidth > aspectCalculatedWidth ? (newWidth = calculatedWidth, newHeight = aspectCalculatedHeight) : (newHeight = calculatedHeight, newWidth = aspectCalculatedWidth);
    var actualChangeInHeight = newHeight - this.selectionStartHeight,
        newY = this.selectionStartY - actualChangeInHeight;
    newY = Math.max(newY, this.selectionStartY - maxHeight), newY = Math.min(newY, this.selectionStartY + this.selectionStartHeight - CropSelectJs.MINIMUM_SELECTION_BOX_HEIGHT), this.setSelectionBoxWidth(newWidth), this.setSelectionBoxHeight(newHeight), this.setSelectionBoxY(newY)
}, CropSelectJs.prototype.handleAspectRatioLockedResizeRight = function(changeX, changeY, aspectRatio) {
    var maxHeight = this.getWrapperHeight() - this.selectionStartY,
        maxWidth = this.getWrapperWidth() - this.selectionStartX,
        newWidth = Math.min(this.selectionStartWidth + changeX, maxWidth),
        newHeight = newWidth / aspectRatio;
    newHeight > maxHeight && (newHeight = maxHeight, newWidth = newHeight * aspectRatio), this.setSelectionBoxWidth(newWidth), this.setSelectionBoxHeight(newHeight)
}, CropSelectJs.prototype.handleAspectRatioLockedResizeBottomRight = function(changeX, changeY, aspectRatio) {
    var maxHeight = this.getWrapperHeight() - this.selectionStartY,
        maxWidth = this.getWrapperWidth() - this.selectionStartX;
    maxWidth = Math.min(maxWidth, maxHeight * aspectRatio), maxHeight = Math.min(maxHeight, maxWidth / aspectRatio);
    var newWidth, newHeight, calculatedHeight = Math.min(this.selectionStartHeight + changeY, maxHeight),
        calculatedWidth = Math.min(this.selectionStartWidth + changeX, maxWidth),
        aspectCalculatedWidth = calculatedHeight * aspectRatio,
        aspectCalculatedHeight = calculatedWidth / aspectRatio;
    calculatedWidth > aspectCalculatedWidth ? (newWidth = calculatedWidth, newHeight = aspectCalculatedHeight) : (newHeight = calculatedHeight, newWidth = aspectCalculatedWidth), this.setSelectionBoxWidth(newWidth), this.setSelectionBoxHeight(newHeight)
}, CropSelectJs.prototype.handleAspectRatioLockedResizeBottom = function(changeX, changeY, aspectRatio) {
    var maxHeight = this.getWrapperHeight() - this.selectionStartY,
        maxWidth = this.getWrapperWidth() - this.selectionStartX,
        newHeight = Math.min(this.selectionStartHeight + changeY, maxHeight),
        newWidth = newHeight * aspectRatio;
    newWidth > maxWidth && (newWidth = maxWidth, newHeight = newWidth / aspectRatio), this.setSelectionBoxWidth(newWidth), this.setSelectionBoxHeight(newHeight)
}, CropSelectJs.prototype.handleAspectRatioLockedResizeBottomLeft = function(changeX, changeY, aspectRatio) {
    var maxWidth = this.selectionStartX + this.selectionStartWidth,
        maxHeight = this.getWrapperHeight() - this.selectionStartY;
    maxWidth = Math.min(maxWidth, maxHeight * aspectRatio), maxHeight = Math.min(maxHeight, maxWidth / aspectRatio);
    var newHeight, newWidth, calculatedWidth = Math.min(this.selectionStartWidth - changeX, maxWidth),
        calculatedHeight = Math.min(this.selectionStartHeight + changeY, maxHeight),
        aspectCalculatedWidth = calculatedHeight * aspectRatio,
        aspectCalculatedHeight = calculatedWidth / aspectRatio;
    calculatedWidth > aspectCalculatedWidth ? (newWidth = calculatedWidth, newHeight = aspectCalculatedHeight) : (newHeight = calculatedHeight, newWidth = aspectCalculatedWidth);
    var actualChangeInWidth = newWidth - this.selectionStartWidth,
        newX = this.selectionStartX - actualChangeInWidth;
    newX = Math.max(newX, this.selectionStartX - maxWidth), newX = Math.min(newX, this.selectionStartX + this.selectionStartWidth - CropSelectJs.MINIMUM_SELECTION_BOX_WIDTH), this.setSelectionBoxWidth(newWidth), this.setSelectionBoxHeight(newHeight), this.setSelectionBoxX(newX)
}, CropSelectJs.prototype.handleAspectRatioLockedResizeLeft = function(changeX, changeY, aspectRatio) {
    var maxHeight = this.selectionStartY + this.selectionStartHeight,
        maxWidth = this.selectionStartX + this.selectionStartWidth,
        newWidth = Math.min(this.selectionStartHeight - changeX, maxWidth),
        newHeight = newWidth / aspectRatio;
    newHeight > maxHeight && (newHeight = maxHeight, newWidth = newHeight * aspectRatio);
    var actualChangeInWidth = newWidth - this.selectionStartWidth,
        actualChangeInHeight = newHeight - this.selectionStartHeight,
        newX = this.selectionStartX - actualChangeInWidth,
        newY = this.selectionStartY - actualChangeInHeight;
    newX = Math.min(newX, this.selectionStartX + this.selectionStartWidth - CropSelectJs.MINIMUM_SELECTION_BOX_WIDTH), newY = Math.min(newY, this.selectionStartY + this.selectionStartHeight - CropSelectJs.MINIMUM_SELECTION_BOX_HEIGHT), this.setSelectionBoxWidth(newWidth), this.setSelectionBoxHeight(newHeight), this.setSelectionBoxX(newX), this.setSelectionBoxY(newY)
}, CropSelectJs.prototype.enableAnimatedBorder = function() {
    $(this.selectionBox).addClass("animated")
}, CropSelectJs.prototype.disableAnimatedBorder = function() {
    $(this.selectionBox).removeClass("animated")
}, CropSelectJs.prototype.setSelectionAspectRatio = function(aspectRatio) {
    this.options.aspectRatio = aspectRatio, this.selectCentredFittedAspectRatio(aspectRatio)
}, CropSelectJs.prototype.clearSelectionAspectRatio = function() {
    this.options.aspectRatio = null
}, CropSelectJs.prototype.getWrapperWidth = function() {
    return $(this.wrapper)[0].getBoundingClientRect().width
}, CropSelectJs.prototype.getWrapperHeight = function() {
    return $(this.wrapper)[0].getBoundingClientRect().height
}, CropSelectJs.prototype.getContainerWidth = function() {
    $(this.elem).parent().width()
}, CropSelectJs.prototype.getSelectionBoxX = function() {
    return $(this.selectionBox).offset().left - $(this.selectionBox).parent().offset().left
}, CropSelectJs.prototype.setSelectionBoxX = function(x) {
    var wrapperWidth = this.getWrapperWidth(),
        cropSelectionWidth = this.getSelectionBoxWidth();
    x = Math.max(0, Math.min(x, wrapperWidth - cropSelectionWidth)), this.selectionBox.style.left = x + "px", this.shadowLeft.style.width = x + "px", this.shadowRight.style.width = wrapperWidth - x - cropSelectionWidth + "px", this.shadowTop.style.left = x + "px", this.shadowBottom.style.left = x + "px"
}, CropSelectJs.prototype.getSelectionBoxY = function() {
    return $(this.selectionBox).offset().top - $(this.selectionBox).parent().offset().top
}, CropSelectJs.prototype.setSelectionBoxY = function(y) {
    var wrapperHeight = this.getWrapperHeight(),
        cropSelectionHeight = this.getSelectionBoxHeight();
    y = Math.max(0, Math.min(y, wrapperHeight - cropSelectionHeight)), this.selectionBox.style.top = y + "px", this.shadowTop.style.height = y + "px", this.shadowBottom.style.height = wrapperHeight - y - cropSelectionHeight + "px"
}, CropSelectJs.prototype.getSelectionBoxWidth = function() {
    return $(this.selectionBox).outerWidth()
}, CropSelectJs.prototype.setSelectionBoxWidth = function(width) {
    width = Math.max(width, CropSelectJs.MINIMUM_SELECTION_BOX_WIDTH), this.selectionBox.style.width = width + "px";
    var wrapperWidth = this.getWrapperWidth();
    this.shadowTop.style.width = width + "px", this.shadowBottom.style.width = width + "px", this.shadowRight.style.width = wrapperWidth - this.getSelectionBoxX() - width + "px"
}, CropSelectJs.prototype.getSelectionBoxHeight = function() {
    return $(this.selectionBox).outerHeight()
}, CropSelectJs.prototype.setSelectionBoxHeight = function(height) {
    height = Math.max(height, CropSelectJs.MINIMUM_SELECTION_BOX_HEIGHT), this.selectionBox.style.height = height + "px", this.shadowBottom.style.height = this.getWrapperHeight() - this.getSelectionBoxY() - height + "px"
}, CropSelectJs.prototype.refreshSelectionBoxShadow = function() {
    this.setSelectionBoxWidth(this.getSelectionBoxWidth()), this.setSelectionBoxHeight(this.getSelectionBoxHeight()), this.setSelectionBoxX(this.getSelectionBoxX()), this.setSelectionBoxY(this.getSelectionBoxY())
}, CropSelectJs.prototype.getImageSrc = function() {
    return $(this.cropImage).attr("src")
}, CropSelectJs.prototype.setImageSrc = function(imageSrc) {
    var $this = this,
        img = new Image;
    img.onload = function() {
        $this.setImageWidth(this.width), $this.setImageHeight(this.height), $($this.cropImage).attr("src", imageSrc)
    }, img.src = imageSrc
}, CropSelectJs.prototype.setImageWidth = function(width) {
    this.imageWidth = width
}, CropSelectJs.prototype.getImageWidth = function() {
    return this.imageWidth
}, CropSelectJs.prototype.setImageWidth = function(width) {
    this.imageWidth = width
}, CropSelectJs.prototype.getImageHeight = function() {
    return this.imageHeight
}, CropSelectJs.prototype.setImageHeight = function(height) {
    this.imageHeight = height
}, CropSelectJs.prototype.getImageAspectRatio = function() {
    return this.getImageWidth() && this.getImageHeight() ? this.getImageWidth() / this.getImageHeight() : null
}, CropSelectJs.prototype.getImageXScaleFactor = function() {
    return this.getImageWidth() / $(this.cropImage).width()
}, CropSelectJs.prototype.getImageYScaleFactor = function() {
    return this.getImageHeight() / $(this.cropImage).height()
}, CropSelectJs.prototype.getScaledSelectionBoxWidth = function() {
    return Math.round(this.getImageXScaleFactor() * this.getSelectionBoxWidth())
}, CropSelectJs.prototype.getScaledSelectionBoxHeight = function() {
    return Math.round(this.getImageYScaleFactor() * this.getSelectionBoxHeight())
}, CropSelectJs.prototype.getScaledSelectionBoxX = function() {
    return Math.round(this.getImageXScaleFactor() * this.getSelectionBoxX())
}, CropSelectJs.prototype.getScaledSelectionBoxY = function() {
    return Math.round(this.getImageYScaleFactor() * this.getSelectionBoxY())
}, CropSelectJs.prototype.selectEverything = function() {
    this.setSelectionBoxX(0), this.setSelectionBoxY(0), this.setSelectionBoxWidth(this.getWrapperWidth()), this.setSelectionBoxHeight(this.getWrapperHeight()), this.triggerSelectionMoveEvent(), this.triggerSelectionResizeEvent()
}, CropSelectJs.prototype.selectCentredFittedAspectRatio = function(aspectRatio) {
    var width, height, wrapperWidth = this.getWrapperWidth(),
        wrapperHeight = this.getWrapperHeight(),
        aspectCalculatedWidth = wrapperHeight * aspectRatio,
        aspectCalculatedHeight = wrapperWidth / aspectRatio;
    aspectCalculatedWidth > wrapperWidth ? (width = wrapperWidth, height = Math.round(aspectCalculatedHeight)) : (width = Math.round(aspectCalculatedWidth), height = wrapperHeight);
    var x = Math.floor((wrapperWidth - width) / 2),
        y = Math.floor((wrapperHeight - height) / 2);
    this.setSelectionBoxWidth(width), this.setSelectionBoxHeight(height), this.setSelectionBoxX(x), this.setSelectionBoxY(y), this.triggerSelectionResizeEvent(), this.triggerSelectionMoveEvent()
}, CropSelectJs.prototype.selectCentredSquare = function() {
    this.selectCentredFittedAspectRatio(1)
};
