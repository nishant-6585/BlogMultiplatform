package com.example.blogmultiplatform.pages.admin

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.example.blogmultiplatform.models.Theme
import com.example.blogmultiplatform.utils.Constants.FONT_FAMILY
import com.example.blogmultiplatform.utils.Res
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.border
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fontFamily
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.outline
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.textAlign
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.silk.components.forms.Input
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.attributes.InputType.Text
import org.jetbrains.compose.web.css.LineStyle
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Button

@Page
@Composable
fun LoginScreen() {
    var userNameValue by remember { mutableStateOf("") }
    var passwordValue by remember { mutableStateOf("") }
    var errorText by remember { mutableStateOf("") }
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Column(
            modifier = Modifier
                .padding(leftRight = 50.px, top = 80.px, bottom = 24.px)
                .backgroundColor(Theme.LightGray.rgb),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Image(
                modifier = Modifier
                    .margin(bottom = 50.px)
                    .width(110.px),
                src = Res.Image.logo,
                description = "Logo Image",
            )
            Input(
                type = Text,
                value = userNameValue,
                placeholder = "userName",
                modifier = Modifier
                    .margin(bottom = 12.px)
                    .width(350.px)
                    .height(54.px)
                    .padding(leftRight = 20.px)
                    .backgroundColor(Colors.White)
                    .fontFamily(FONT_FAMILY)
                    .border(
                        width = 0.px,
                        color = Colors.Transparent,
                        style = LineStyle.None
                    )
                    .outline(
                        width = 0.px,
                        color = Colors.Transparent,
                        style = LineStyle.None
                    ),
                onValueChanged = {
                    userNameValue = it
                }
            )

            Input(
                type = InputType.Password,
                value = passwordValue,
                placeholder = "Password",
                modifier = Modifier
                    .margin(bottom = 12.px)
                    .width(350.px)
                    .height(54.px)
                    .padding(leftRight = 20.px)
                    .backgroundColor(Colors.White)
                    .fontFamily(FONT_FAMILY)
                    .border(
                        width = 0.px,
                        color = Colors.Transparent,
                        style = LineStyle.None
                    )
                    .outline(
                        width = 0.px,
                        color = Colors.Transparent,
                        style = LineStyle.None
                    ),
                onValueChanged = {
                    passwordValue = it
                }
            )

            Button(
                attrs = Modifier
                    .margin(24.px)
                    .width(350.px)
                    .height(54.px)
                    .backgroundColor(Theme.Primary.rgb)
                    .color(Colors.White)
                    .borderRadius(r = 4.px)
                    .fontFamily(FONT_FAMILY)
                    .fontWeight(FontWeight.Medium)
                    .fontSize(16.px)
                    .border(
                        width = 0.px,
                        color = Colors.Transparent,
                        style = LineStyle.None
                    )
                    .outline(
                        width = 0.px,
                        color = Colors.Transparent,
                        style = LineStyle.None
                    )
                    .toAttrs(),
            ) {
                SpanText(text = "Sign In")
            }
            SpanText(
                modifier = Modifier
                    .width(350.px)
                    .color(Colors.Red)
                    .textAlign(TextAlign.Center),
                text = ""
            )
        }
    }

}